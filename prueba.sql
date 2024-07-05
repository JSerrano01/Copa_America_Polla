-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 06-07-2024 a las 00:33:08
-- Versión del servidor: 10.4.22-MariaDB
-- Versión de PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `prueba`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `equipos`
--

CREATE TABLE `equipos` (
  `id` int(11) NOT NULL,
  `group_name` varchar(10) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `points` int(11) DEFAULT 0,
  `logo` varchar(110) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `equipos`
--

INSERT INTO `equipos` (`id`, `group_name`, `name`, `points`, `logo`) VALUES
(1, 'A', 'ARGENTINA', 9, 'https://media.api-sports.io/football/teams/26.png'),
(2, 'A', 'CANADA', 4, 'https://media.api-sports.io/football/teams/5529.png'),
(3, 'A', 'CHILE', 2, 'https://media.api-sports.io/football/teams/2383.png'),
(4, 'A', 'PERU', 1, 'https://media.api-sports.io/football/teams/30.png'),
(5, 'B', 'VENEZUELA', 9, 'https://media.api-sports.io/football/teams/2379.png'),
(6, 'B', 'ECUADOR', 4, 'https://media.api-sports.io/football/teams/2382.png'),
(7, 'B', 'MEXICO', 4, 'https://media.api-sports.io/football/teams/16.png'),
(8, 'B', 'JAMAICA', 0, 'https://media.api-sports.io/football/teams/2385.png'),
(9, 'C', 'URUGUAY', 9, 'https://media.api-sports.io/football/teams/7.png'),
(10, 'C', 'PANAMA', 6, 'https://media.api-sports.io/football/teams/11.png'),
(11, 'C', 'USA', 3, 'https://media.api-sports.io/football/teams/2384.png'),
(12, 'C', 'BOLIVIA', 0, 'https://media.api-sports.io/football/teams/2381.png'),
(13, 'D', 'COLOMBIA', 7, 'https://media.api-sports.io/football/teams/8.png'),
(14, 'D', 'BRAZIL', 5, 'https://media.api-sports.io/football/teams/6.png'),
(15, 'D', 'COSTA RICA', 4, 'https://media.api-sports.io/football/teams/29.png'),
(16, 'D', 'PARAGUAY', 0, 'https://media.api-sports.io/football/teams/2380.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matches`
--

CREATE TABLE `matches` (
  `id` int(11) NOT NULL,
  `home_team` varchar(100) DEFAULT NULL,
  `home_team_logo` varchar(255) DEFAULT NULL,
  `away_team` varchar(100) DEFAULT NULL,
  `away_team_logo` varchar(255) DEFAULT NULL,
  `home_score` int(11) DEFAULT NULL,
  `away_score` int(11) DEFAULT NULL,
  `date` varchar(50) DEFAULT NULL,
  `round` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `matches`
--

INSERT INTO `matches` (`id`, `home_team`, `home_team_logo`, `away_team`, `away_team_logo`, `home_score`, `away_score`, `date`, `round`) VALUES
(1, 'Peru', 'https://media.api-sports.io/football/teams/30.png', 'Chile', 'https://media.api-sports.io/football/teams/2383.png', 0, 0, '2024-06-22T00:00:00+00:00', 'Group Stage - 1'),
(2, 'Ecuador', 'https://media.api-sports.io/football/teams/2382.png', 'Venezuela', 'https://media.api-sports.io/football/teams/2379.png', 1, 2, '2024-06-22T22:00:00+00:00', 'Group Stage - 1'),
(3, 'Mexico', 'https://media.api-sports.io/football/teams/16.png', 'Jamaica', 'https://media.api-sports.io/football/teams/2385.png', 1, 0, '2024-06-23T01:00:00+00:00', 'Group Stage - 1'),
(4, 'USA', 'https://media.api-sports.io/football/teams/2384.png', 'Bolivia', 'https://media.api-sports.io/football/teams/2381.png', 2, 0, '2024-06-23T22:00:00+00:00', 'Group Stage - 1'),
(5, 'Uruguay', 'https://media.api-sports.io/football/teams/7.png', 'Panama', 'https://media.api-sports.io/football/teams/11.png', 3, 1, '2024-06-24T01:00:00+00:00', 'Group Stage - 1'),
(6, 'Colombia', 'https://media.api-sports.io/football/teams/8.png', 'Paraguay', 'https://media.api-sports.io/football/teams/2380.png', 2, 1, '2024-06-24T22:00:00+00:00', 'Group Stage - 1'),
(7, 'Chile', 'https://media.api-sports.io/football/teams/2383.png', 'Argentina', 'https://media.api-sports.io/football/teams/26.png', 0, 1, '2024-06-26T01:00:00+00:00', 'Group Stage - 2'),
(8, 'Ecuador', 'https://media.api-sports.io/football/teams/2382.png', 'Jamaica', 'https://media.api-sports.io/football/teams/2385.png', 3, 1, '2024-06-26T22:00:00+00:00', 'Group Stage - 2'),
(9, 'Venezuela', 'https://media.api-sports.io/football/teams/2379.png', 'Mexico', 'https://media.api-sports.io/football/teams/16.png', 1, 0, '2024-06-27T01:00:00+00:00', 'Group Stage - 2'),
(10, 'Panama', 'https://media.api-sports.io/football/teams/11.png', 'USA', 'https://media.api-sports.io/football/teams/2384.png', 2, 1, '2024-06-27T22:00:00+00:00', 'Group Stage - 2'),
(11, 'Uruguay', 'https://media.api-sports.io/football/teams/7.png', 'Bolivia', 'https://media.api-sports.io/football/teams/2381.png', 5, 0, '2024-06-28T01:00:00+00:00', 'Group Stage - 2'),
(12, 'Paraguay', 'https://media.api-sports.io/football/teams/2380.png', 'Brazil', 'https://media.api-sports.io/football/teams/6.png', 1, 4, '2024-06-29T01:00:00+00:00', 'Group Stage - 2'),
(13, 'Argentina', 'https://media.api-sports.io/football/teams/26.png', 'Peru', 'https://media.api-sports.io/football/teams/30.png', 2, 0, '2024-06-30T00:00:00+00:00', 'Group Stage - 3'),
(14, 'Jamaica', 'https://media.api-sports.io/football/teams/2385.png', 'Venezuela', 'https://media.api-sports.io/football/teams/2379.png', 0, 3, '2024-07-01T00:00:00+00:00', 'Group Stage - 3'),
(15, 'Mexico', 'https://media.api-sports.io/football/teams/16.png', 'Ecuador', 'https://media.api-sports.io/football/teams/2382.png', 0, 0, '2024-07-01T00:00:00+00:00', 'Group Stage - 3'),
(16, 'Bolivia', 'https://media.api-sports.io/football/teams/2381.png', 'Panama', 'https://media.api-sports.io/football/teams/11.png', 1, 3, '2024-07-02T01:00:00+00:00', 'Group Stage - 3'),
(17, 'USA', 'https://media.api-sports.io/football/teams/2384.png', 'Uruguay', 'https://media.api-sports.io/football/teams/7.png', 0, 1, '2024-07-02T01:00:00+00:00', 'Group Stage - 3'),
(18, 'Brazil', 'https://media.api-sports.io/football/teams/6.png', 'Colombia', 'https://media.api-sports.io/football/teams/8.png', 1, 1, '2024-07-03T01:00:00+00:00', 'Group Stage - 3'),
(19, 'Argentina', 'https://media.api-sports.io/football/teams/26.png', 'Canada', 'https://media.api-sports.io/football/teams/5529.png', 2, 0, '2024-06-21T00:00:00+00:00', 'Group Stage - 1'),
(20, 'Brazil', 'https://media.api-sports.io/football/teams/6.png', 'Costa Rica', 'https://media.api-sports.io/football/teams/29.png', 0, 0, '2024-06-25T01:00:00+00:00', 'Group Stage - 1'),
(21, 'Peru', 'https://media.api-sports.io/football/teams/30.png', 'Canada', 'https://media.api-sports.io/football/teams/5529.png', 0, 1, '2024-06-25T22:00:00+00:00', 'Group Stage - 2'),
(22, 'Colombia', 'https://media.api-sports.io/football/teams/8.png', 'Costa Rica', 'https://media.api-sports.io/football/teams/29.png', 3, 0, '2024-06-28T22:00:00+00:00', 'Group Stage - 2'),
(23, 'Canada', 'https://media.api-sports.io/football/teams/5529.png', 'Chile', 'https://media.api-sports.io/football/teams/2383.png', 0, 0, '2024-06-30T00:00:00+00:00', 'Group Stage - 3'),
(24, 'Costa Rica', 'https://media.api-sports.io/football/teams/29.png', 'Paraguay', 'https://media.api-sports.io/football/teams/2380.png', 2, 1, '2024-07-03T01:00:00+00:00', 'Group Stage - 3'),
(25, 'Argentina', 'https://media.api-sports.io/football/teams/26.png', 'Ecuador', 'https://media.api-sports.io/football/teams/2382.png', 1, 1, '2024-07-05T01:00:00+00:00', 'Quarter-finals'),
(26, 'Venezuela', 'https://media.api-sports.io/football/teams/2379.png', 'Canada', 'https://media.api-sports.io/football/teams/5529.png', NULL, NULL, '2024-07-06T01:00:00+00:00', 'Quarter-finals'),
(27, 'Colombia', 'https://media.api-sports.io/football/teams/8.png', 'Panama', 'https://media.api-sports.io/football/teams/11.png', NULL, NULL, '2024-07-06T22:00:00+00:00', 'Quarter-finals'),
(28, 'Uruguay', 'https://media.api-sports.io/football/teams/7.png', 'Brazil', 'https://media.api-sports.io/football/teams/6.png', NULL, NULL, '2024-07-07T01:00:00+00:00', 'Quarter-finals');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pollas_grupos`
--

CREATE TABLE `pollas_grupos` (
  `id` int(11) NOT NULL,
  `perfil` varchar(50) NOT NULL,
  `grupo` varchar(10) NOT NULL,
  `primero` varchar(40) NOT NULL,
  `segundo` varchar(40) NOT NULL,
  `puntos` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `pollas_grupos`
--

INSERT INTO `pollas_grupos` (`id`, `perfil`, `grupo`, `primero`, `segundo`, `puntos`) VALUES
(1, 'MANUELA AGUDELO', 'A', 'ARGENTINA', 'CHILE', 0),
(2, 'MANUELA AGUDELO', 'B', 'VENEZUELA', 'ECUADOR', 0),
(3, 'MANUELA AGUDELO', 'C', 'URUGUAY', 'USA', 0),
(4, 'MANUELA AGUDELO', 'D', 'BRAZIL', 'COLOMBIA', 0),
(5, 'GUILLERMO SERRANO', 'A', 'ARGENTINA', 'PERU', 0),
(6, 'GUILLERMO SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(7, 'GUILLERMO SERRANO', 'C', 'URUGUAY', 'USA', 0),
(8, 'GUILLERMO SERRANO', 'D', 'COLOMBIA', 'BRAZIL', 0),
(9, 'MARIA NELCY SALGADO', 'A', 'ARGENTINA', 'CHILE', 0),
(10, 'MARIA NELCY SALGADO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(11, 'MARIA NELCY SALGADO', 'C', 'URUGUAY', 'USA', 0),
(12, 'MARIA NELCY SALGADO', 'D', 'COLOMBIA', 'BRAZIL', 0),
(13, 'DAVID SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(14, 'DAVID SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(15, 'DAVID SERRANO', 'C', 'URUGUAY', 'USA', 0),
(16, 'DAVID SERRANO', 'D', 'COLOMBIA', 'BRAZIL', 0),
(17, 'PATRICIA GARCIA', 'A', 'ARGENTINA', 'CHILE', 0),
(18, 'PATRICIA GARCIA', 'B', 'VENEZUELA', 'ECUADOR', 0),
(19, 'PATRICIA GARCIA', 'C', 'URUGUAY', 'USA', 0),
(20, 'PATRICIA GARCIA', 'D', 'BRAZIL', 'COLOMBIA', 0),
(21, 'JOSE DAVID', 'A', 'ARGENTINA', 'PERU', 0),
(22, 'JOSE DAVID', 'B', 'ECUADOR', 'VENEZUELA', 0),
(23, 'JOSE DAVID', 'C', 'URUGUAY', 'USA', 0),
(24, 'JOSE DAVID', 'D', 'COLOMBIA', 'BRAZIL', 0),
(25, 'SANTI SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(26, 'SANTI SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(27, 'SANTI SERRANO', 'C', 'URUGUAY', 'USA', 0),
(28, 'SANTI SERRANO', 'D', 'COLOMBIA', 'BRAZIL', 0),
(29, 'DANIEL SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(30, 'DANIEL SERRANO', 'B', 'VENEZUELA', 'MEXICO', 0),
(31, 'DANIEL SERRANO', 'C', 'URUGUAY', 'USA', 0),
(32, 'DANIEL SERRANO', 'D', 'COLOMBIA', 'BRAZIL', 0),
(33, 'MARIANA PINEDA', 'A', 'ARGENTINA', 'CHILE', 0),
(34, 'MARIANA PINEDA', 'B', 'MEXICO', 'ECUADOR', 0),
(35, 'MARIANA PINEDA', 'C', 'URUGUAY', 'USA', 0),
(36, 'MARIANA PINEDA', 'D', 'COLOMBIA', 'BRAZIL', 0),
(37, 'ALEJANDRO ARRIETA', 'A', 'ARGENTINA', 'PERU', 0),
(38, 'ALEJANDRO ARRIETA', 'B', 'ECUADOR', 'VENEZUELA', 0),
(39, 'ALEJANDRO ARRIETA', 'C', 'URUGUAY', 'BOLIVIA', 0),
(40, 'ALEJANDRO ARRIETA', 'D', 'BRAZIL', 'COLOMBIA', 0),
(41, 'LINA SERRANO', 'A', 'ARGENTINA', 'PERU', 0),
(42, 'LINA SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(43, 'LINA SERRANO', 'C', 'URUGUAY', 'USA', 0),
(44, 'LINA SERRANO', 'D', 'BRAZIL', 'COLOMBIA', 0),
(45, 'OSCAR SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(46, 'OSCAR SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(47, 'OSCAR SERRANO', 'C', 'URUGUAY', 'USA', 0),
(48, 'OSCAR SERRANO', 'D', 'BRAZIL', 'COLOMBIA', 0),
(49, 'MARCELA WALTEROS', 'A', 'ARGENTINA', 'PERU', 0),
(50, 'MARCELA WALTEROS', 'B', 'MEXICO', 'ECUADOR', 0),
(51, 'MARCELA WALTEROS', 'C', 'USA', 'URUGUAY', 0),
(52, 'MARCELA WALTEROS', 'D', 'COLOMBIA', 'BRAZIL', 0),
(53, 'MARTA ECHEVERRI', 'A', 'ARGENTINA', 'PERU', 0),
(54, 'MARTA ECHEVERRI', 'B', 'ECUADOR', 'VENEZUELA', 0),
(55, 'MARTA ECHEVERRI', 'C', 'URUGUAY', 'USA', 0),
(56, 'MARTA ECHEVERRI', 'D', 'BRAZIL', 'COLOMBIA', 0),
(57, 'ANDRES FELIPE', 'A', 'ARGENTINA', 'CHILE', 0),
(58, 'ANDRES FELIPE', 'B', 'MEXICO', 'ECUADOR', 0),
(59, 'ANDRES FELIPE', 'C', 'PANAMA', 'USA', 0),
(60, 'ANDRES FELIPE', 'D', 'COLOMBIA', 'BRAZIL', 0),
(61, 'GERMAN PINEDA', 'A', 'ARGENTINA', 'CHILE', 0),
(62, 'GERMAN PINEDA', 'B', 'ECUADOR', 'MEXICO', 0),
(63, 'GERMAN PINEDA', 'C', 'URUGUAY', 'USA', 0),
(64, 'GERMAN PINEDA', 'D', 'COLOMBIA', 'BRAZIL', 0),
(65, 'JUAN MA SERRANO Y MAFE', 'A', 'ARGENTINA', 'CHILE', 0),
(66, 'JUAN MA SERRANO Y MAFE', 'B', 'ECUADOR', 'VENEZUELA', 0),
(67, 'JUAN MA SERRANO Y MAFE', 'C', 'URUGUAY', 'USA', 0),
(68, 'JUAN MA SERRANO Y MAFE', 'D', 'BRAZIL', 'COLOMBIA', 0),
(69, 'FERNANDO SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(70, 'FERNANDO SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(71, 'FERNANDO SERRANO', 'C', 'URUGUAY', 'USA', 0),
(72, 'FERNANDO SERRANO', 'D', 'BRAZIL', 'COLOMBIA', 0),
(73, 'EMANUEL SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(74, 'EMANUEL SERRANO', 'B', 'ECUADOR', 'VENEZUELA', 0),
(75, 'EMANUEL SERRANO', 'C', 'URUGUAY', 'USA', 0),
(76, 'EMANUEL SERRANO', 'D', 'BRAZIL', 'COLOMBIA', 0),
(77, 'LUCILA PINEDA PEREZ', 'A', 'ARGENTINA', 'CHILE', 0),
(78, 'LUCILA PINEDA PEREZ', 'B', 'MEXICO', 'ECUADOR', 0),
(79, 'LUCILA PINEDA PEREZ', 'C', 'URUGUAY', 'USA', 0),
(80, 'LUCILA PINEDA PEREZ', 'D', 'COLOMBIA', 'BRAZIL', 0),
(81, 'ISABEL DE SERRANO', 'A', 'ARGENTINA', 'CHILE', 0),
(82, 'ISABEL DE SERRANO', 'B', 'MEXICO', 'ECUADOR', 0),
(83, 'ISABEL DE SERRANO', 'C', 'URUGUAY', 'USA', 0),
(84, 'ISABEL DE SERRANO', 'D', 'BRAZIL', 'COLOMBIA', 0),
(85, 'DAVID RICARDO', 'A', 'ARGENTINA', 'PERU', 0),
(86, 'DAVID RICARDO', 'B', 'MEXICO', 'ECUADOR', 0),
(87, 'DAVID RICARDO', 'C', 'URUGUAY', 'USA', 0),
(88, 'DAVID RICARDO', 'D', 'BRAZIL', 'COLOMBIA', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(40) NOT NULL,
  `password` int(22) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'Jaime', 12345);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `equipos`
--
ALTER TABLE `equipos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `matches`
--
ALTER TABLE `matches`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pollas_grupos`
--
ALTER TABLE `pollas_grupos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `equipos`
--
ALTER TABLE `equipos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `matches`
--
ALTER TABLE `matches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `pollas_grupos`
--
ALTER TABLE `pollas_grupos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=89;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
