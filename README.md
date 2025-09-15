FIGMA
https://www.figma.com/design/ldySaxON86a8jVVOOtXoFH/Untitled?node-id=9-34&m=dev&t=t79mtv6zL3yR1kFU-1



-- Base de datos: `ia_solutions_db`

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
-- Estructura de tabla para la tabla `contactos`

CREATE TABLE `contactos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `correo` varchar(150) NOT NULL,
  `celular` varchar(20) NOT NULL,
  `consentimiento` tinyint(1) NOT NULL DEFAULT 0,
  `fecha_registro` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_spanish_ci;
