CREATE DATABASE proyecto_torneos;

CREATE TABLE `admin` (`id` VARCHAR(10) NOT NULL, `password` VARCHAR(30) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=UTF8;

CREATE TABLE `usuario` (`nombre` VARCHAR(30) NOT NULL, `email` VARCHAR(30) NOT NULL, `password` VARCHAR(30) NOT NULL,  `sexo` VARCHAR(10) NOT NULL) ENGINE=InnoDB DEFAULT CHARSET=UTF8;
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`nombre`);


CREATE TABLE `torneos` (
  `id` INT(10) auto_increment NOT NULL,
  `juego` VARCHAR(20),
  `nombre` VARCHAR(30),
  `descripcion` VARCHAR(200),
  `urlImagen` VARCHAR(30),
  `capacidad` INT(5),
  PRIMARY KEY (`id`)
)