import React, { useState } from 'react';
import { Form, Row, Col, Container, FloatingLabel, Card, Button } from 'react-bootstrap';
import Header from '../components/Header';
import '../styles/App.css';

function Abogado() {
  // Crear un estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');
  const [genero, setGenero] = useState('Masculino'); // Puedes establecer un valor predeterminado
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  // Función para manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Crear un objeto con los datos del formulario
    const formData = {
      nombre,
      apellido,
      fecha_de_nacimiento: fechaNacimiento,
      genero,
      direccion,
      telefono,
      correo,
      especialidad,
    };

    try {
      // Realizar una solicitud HTTP al backend para enviar los datos
      const response = await fetch('http://localhost:5000/crud/createabogados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // El registro se creó exitosamente
        alert('Registro exitoso');
        // Reiniciar los campos del formulario
        setNombre('');
        setApellido('');
        setFechaNacimiento('');
        setGenero('Masculino');
        setDireccion('');
        setTelefono('');
        setCorreo('');
        setEspecialidad('');
      } else {
        alert('Error al registrar el abogado');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      alert('Error en la solicitud al servidor');
    }
  };

  return (
    <div>
      <Header />

      <Container>
        <Card className="mt-3">
          <Card.Body>
            <Card.Title>Registro de Abogados</Card.Title>
            <Form className="mt-3" onSubmit={handleSubmit}>
              <Row className="g-3">
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="nombre" label="Nombre">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el nombre"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="apellido" label="Apellido">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el apellido"
                      value={apellido}
                      onChange={(e) => setApellido(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="fechaNacimiento" label="Fecha de Nacimiento">
                    <Form.Control
                      type="date"
                      value={fechaNacimiento}
                      onChange={(e) => setFechaNacimiento(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="genero" label="Género">
                    <Form.Select
                      value={genero}
                      onChange={(e) => setGenero(e.target.value)}
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Femenino">Femenino</option>
                      <option value="Otro">Otro</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="direccion" label="Dirección">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese la dirección"
                      value={direccion}
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="telefono" label="Teléfono">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese el teléfono"
                      value={telefono}
                      onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm="6" md="6" lg="4">
                  <FloatingLabel controlId="correo" label="Correo">
                    <Form.Control
                      type="email"
                      placeholder="Ingrese el correo"
                      value={correo}
                      onChange={(e) => setCorreo(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col sm="12" md="6" lg="4">
                  <FloatingLabel controlId="especialidad" label="Especialidad">
                    <Form.Control
                      type="text"
                      placeholder="Ingrese la especialidad"
                      value={especialidad}
                      onChange={(e) => setEspecialidad(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <div className="center-button">
                <Button variant="primary" type="submit" className="mt-3 custom-button" size="lg">
                  Registrar
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Abogado;
