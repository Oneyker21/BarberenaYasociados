-- Creación de la base de datos
CREATE DATABASE abogados_firma;

-- Seleccionar la base de datos
USE abogados_firma;

-- Tabla de Abogados con campos adicionales
CREATE TABLE Abogados (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    apellido VARCHAR(255) NOT NULL,
    fecha_de_nacimiento DATE,
    genero ENUM('Masculino', 'Femenino', 'Otro'),
    direccion VARCHAR(255),
    telefono VARCHAR(20),
    correo VARCHAR(255) NOT NULL,
    especialidad VARCHAR(255)
);



-- Tabla de Clientes
CREATE TABLE Clientes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    correo VARCHAR(255),
    telefono VARCHAR(20),
    abogado_id INT,
    FOREIGN KEY (abogado_id) REFERENCES Abogados(id)
);

-- Tabla de Casos
CREATE TABLE Casos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Clientes(id)
);

CREATE TABLE bitacora (
 id_bitacora INT NOT NULL AUTO_INCREMENT,
 transaccion VARCHAR(18) NOT NULL,
 usuario VARCHAR(40) NOT NULL,
 fecha DATETIME NOT NULL,
 tabla VARCHAR(20) NOT NULL, 
PRIMARY KEY (id_bitacora) );