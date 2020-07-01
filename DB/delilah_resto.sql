-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 01-07-2020 a las 19:49:16
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `delilah_resto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(10) UNSIGNED NOT NULL,
  `id_user` int(10) UNSIGNED NOT NULL,
  `total` int(10) UNSIGNED NOT NULL,
  `address` varchar(60) NOT NULL,
  `id_payment` int(10) UNSIGNED NOT NULL,
  `id_status` int(10) UNSIGNED NOT NULL,
  `time` varchar(5) NOT NULL,
  `description` varchar(1000) NOT NULL,
  `date` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orders`
--

INSERT INTO `orders` (`id`, `id_user`, `total`, `address`, `id_payment`, `id_status`, `time`, `description`, `date`) VALUES
(297, 48, 480, 'Patrick 1265, Washington D.C.', 1, 6, '15:37', '2xLemPi', '22/6/2020'),
(298, 48, 420, 'Patrick 1265, Washington D.C.', 1, 5, '16:16', '2xCheCa', '22/6/2020'),
(301, 48, 740, 'Patrick 1265, Washington D.C.', 1, 1, '16:42', '2xEnsVeg', '22/6/2020'),
(302, 48, 480, 'Patrick 1265, Washington D.C.', 1, 1, '16:44', '2xLemPi', '22/6/2020'),
(303, 48, 360, 'Patrick 1265, Washington D.C.', 1, 1, '16:55', '1xSandVeg', '22/6/2020'),
(304, 48, 410, 'Patrick 1265, Washington D.C.', 1, 1, '16:58', '1xHamCla', '22/6/2020'),
(305, 48, 410, 'Patrick 1265, Washington D.C.', 1, 1, '17:1:', '1xHamCla', '22/6/2020'),
(306, 48, 360, 'Patrick 1265, Washington D.C.', 1, 5, '17:4:', '1xSandVeg', '22/6/2020'),
(307, 48, 820, 'Patrick 1265, Washington D.C.', 1, 1, '17:17', '2xHamCla', '22/6/2020'),
(308, 48, 740, 'Patrick 1265, Washington D.C.', 1, 1, '17:21', '2xEnsVeg', '22/6/2020'),
(309, 48, 420, 'Patrick 1265, Washington D.C.', 1, 1, '17:36', '2xCheCa', '22/6/2020'),
(310, 48, 480, 'Patrick 1265, Washington D.C.', 1, 1, '17:40', '2xLemPi', '22/6/2020'),
(311, 48, 720, 'Patrick 1265, Washington D.C.', 1, 1, '17:51', '2xSandVeg', '22/6/2020'),
(313, 48, 620, 'Patrick 1265, Washington D.C.', 1, 1, '11:41', '2xSandVeg', '23/6/2020'),
(314, 48, 310, 'Patrick 1265, Washington D.C.', 2, 1, '14:18', '1xSandVeg', '1/7/2020'),
(315, 48, 310, 'Patrick 1265, Washington D.C.', 1, 2, '14:21', '1xSandVeg', '1/7/2020'),
(317, 48, 620, 'Patrick 1265, Washington D.C.', 1, 6, '14:28', '2xSandVeg', '1/7/2020');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `payment_methods`
--

CREATE TABLE `payment_methods` (
  `id` int(11) UNSIGNED NOT NULL,
  `payment_method` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `payment_methods`
--

INSERT INTO `payment_methods` (`id`, `payment_method`) VALUES
(1, 'efectivo'),
(2, 'débito'),
(3, 'crédito');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(60) NOT NULL,
  `price` int(10) UNSIGNED NOT NULL,
  `url_img` varchar(3000) NOT NULL,
  `code` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `url_img`, `code`) VALUES
(52, 'Sandwich Veggie', 310, 'https://cdn.kiwilimon.com/recetaimagen/16320/th5-640x426-8269.jpg', 'SandVeg'),
(54, 'Ensalada Veggie', 370, 'https://cookieandkate.com/images/2018/02/chopped-greek-salad-with-homemade-greek-vinaigrette-550x824.jpg', 'EnsVeg'),
(77, 'Tabule', 350, 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/ffe79fd5-f498-4b89-a2ea-bea00b81ed57/Derivates/8eb8e221-11db-4a8d-b701-59b24aebbfb1.jpg', 'Tab'),
(79, 'Hamburguesa Class', 410, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYrG2WTl4Qst9-A4sKKCP5TOMtXwEylgYDz4bpgKKEZXNneNcE&usqp=CAU', 'HamCla'),
(80, 'Avocado Sandwich', 380, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTsTDaWI_3twNjO4-SEUb5dslisxOK-jvIbLxC1meeA0WsthOnR&usqp=CAU', 'AvoSand'),
(82, 'Lemon Pie', 240, 'https://placeralplato.com/files/2015/06/lemon-pie-640x480.jpg?width=1200&enable=upscale', 'LemPi'),
(84, 'Cheesecake', 210, 'https://d1uz88p17r663j.cloudfront.net/original/be76bdf97899c8ed21441fd9d2d60771_cheeseok.jpg', 'CheCa');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products_orders`
--

CREATE TABLE `products_orders` (
  `id` int(11) UNSIGNED NOT NULL,
  `id_product` int(11) UNSIGNED NOT NULL,
  `id_order` int(11) UNSIGNED NOT NULL,
  `cant` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products_orders`
--

INSERT INTO `products_orders` (`id`, `id_product`, `id_order`, `cant`) VALUES
(341, 54, 201, 3),
(342, 52, 202, 1),
(343, 52, 203, 2),
(344, 52, 204, 1),
(345, 52, 205, 1),
(346, 52, 206, 1),
(347, 52, 207, 1),
(348, 52, 208, 1),
(349, 52, 209, 1),
(350, 52, 210, 1),
(351, 52, 211, 1),
(352, 54, 212, 2),
(353, 67, 213, 1),
(354, 54, 214, 1),
(355, 54, 215, 2),
(356, 54, 216, 2),
(357, 54, 217, 2),
(358, 52, 218, 2),
(359, 54, 219, 1),
(360, 54, 220, 2),
(361, 54, 221, 2),
(362, 54, 222, 2),
(363, 54, 223, 2),
(364, 82, 224, 1),
(365, 80, 224, 2),
(366, 52, 225, 1),
(367, 54, 226, 1),
(368, 67, 226, 1),
(369, 52, 227, 1),
(370, 54, 227, 1),
(371, 82, 228, 1),
(372, 80, 228, 1),
(373, 52, 229, 1),
(374, 80, 229, 2),
(375, 52, 230, 2),
(376, 80, 230, 3),
(377, 52, 231, 2),
(378, 80, 231, 2),
(379, 52, 232, 2),
(380, 80, 232, 3),
(381, 52, 233, 1),
(382, 80, 233, 1),
(383, 52, 234, 2),
(384, 54, 234, 4),
(385, 52, 235, 2),
(386, 54, 235, 4),
(387, 52, 235, 1),
(388, 54, 235, 3),
(389, 52, 236, 1),
(390, 54, 236, 1),
(391, 52, 237, 2),
(392, 54, 237, 2),
(393, 52, 238, 2),
(394, 54, 238, 2),
(395, 52, 239, 2),
(396, 54, 239, 2),
(397, 52, 240, 2),
(398, 54, 240, 2),
(399, 52, 241, 2),
(400, 54, 241, 2),
(401, 52, 242, 2),
(402, 54, 242, 2),
(403, 52, 242, 2),
(404, 54, 242, 2),
(405, 52, 243, 1),
(406, 54, 243, 3),
(407, 52, 244, 2),
(408, 54, 244, 2),
(409, 52, 245, 2),
(410, 54, 245, 2),
(411, 52, 246, 2),
(412, 54, 246, 2),
(413, 52, 247, 2),
(414, 54, 247, 2),
(415, 52, 248, 2),
(416, 54, 248, 2),
(417, 52, 249, 2),
(418, 54, 249, 2),
(419, 52, 250, 1),
(420, 52, 251, 2),
(421, 52, 252, 2),
(422, 52, 253, 2),
(423, 52, 254, 2),
(424, 52, 255, 2),
(425, 54, 256, 2),
(426, 54, 257, 2),
(427, 54, 257, 2),
(428, 54, 258, 2),
(429, 54, 258, 2),
(430, 54, 258, 2),
(431, 54, 259, 2),
(432, 54, 259, 2),
(433, 54, 259, 2),
(434, 54, 259, 2),
(435, 54, 260, 2),
(436, 54, 260, 2),
(437, 54, 260, 2),
(438, 54, 260, 2),
(439, 54, 260, 2),
(440, 54, 261, 2),
(441, 54, 261, 2),
(442, 54, 261, 2),
(443, 54, 261, 2),
(444, 54, 261, 2),
(445, 54, 261, 2),
(446, 54, 262, 2),
(447, 52, 263, 1),
(448, 82, 264, 2),
(449, 77, 265, 2),
(450, 52, 266, 3),
(451, 52, 267, 2),
(452, 54, 268, 3),
(453, 52, 269, 2),
(454, 77, 270, 7),
(455, 79, 270, 8),
(456, 80, 270, 13),
(457, 82, 271, 1),
(458, 82, 272, 2),
(459, 52, 273, 2),
(460, 52, 274, 2),
(461, 52, 275, 2),
(462, 52, 276, 2),
(463, 90, 277, 1),
(464, 89, 277, 3),
(465, 52, 277, 3),
(466, 54, 277, 1),
(467, 52, 278, 3),
(468, 54, 278, 1),
(469, 89, 278, 3),
(470, 90, 278, 1),
(471, 52, 278, 3),
(472, 54, 278, 1),
(473, 89, 278, 3),
(474, 90, 278, 1),
(475, 52, 279, 1),
(476, 52, 280, 2),
(477, 52, 281, 1),
(478, 52, 282, 2),
(479, 52, 283, 1),
(480, 80, 284, 2),
(481, 52, 285, 1),
(482, 52, 286, 2),
(483, 52, 287, 1),
(484, 52, 288, 2),
(485, 52, 289, 2),
(486, 52, 290, 2),
(487, 52, 291, 2),
(488, 52, 292, 2),
(489, 52, 293, 2),
(490, 52, 293, 2),
(491, 54, 294, 2),
(492, 54, 295, 2),
(493, 54, 295, 2),
(494, 54, 296, 2),
(495, 82, 297, 2),
(496, 84, 298, 2),
(497, 84, 299, 2),
(498, 52, 300, 2),
(499, 54, 301, 2),
(500, 82, 302, 2),
(501, 52, 303, 1),
(502, 79, 304, 1),
(503, 79, 305, 1),
(504, 52, 306, 1),
(505, 79, 307, 2),
(506, 54, 308, 2),
(507, 84, 309, 2),
(508, 82, 310, 2),
(509, 52, 311, 2),
(510, 54, 312, 2),
(511, 52, 313, 2),
(512, 52, 314, 1),
(513, 52, 315, 1),
(514, 52, 316, 2),
(515, 52, 317, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `roles`
--

CREATE TABLE `roles` (
  `cod_role` int(10) UNSIGNED NOT NULL,
  `role` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `roles`
--

INSERT INTO `roles` (`cod_role`, `role`) VALUES
(1, 'user'),
(2, 'admin');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `status`
--

CREATE TABLE `status` (
  `id_status` int(11) UNSIGNED NOT NULL,
  `status` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `status`
--

INSERT INTO `status` (`id_status`, `status`) VALUES
(1, 'nuevo'),
(2, 'confirmado'),
(3, 'preparando'),
(4, 'enviando'),
(5, 'cancelado'),
(6, 'entregado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `username` varchar(60) NOT NULL,
  `full_name` varchar(60) NOT NULL,
  `email` varchar(60) NOT NULL,
  `phone_number` int(30) UNSIGNED NOT NULL,
  `address` varchar(60) NOT NULL,
  `password` varchar(30) NOT NULL,
  `cod_role` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `username`, `full_name`, `email`, `phone_number`, `address`, `password`, `cod_role`) VALUES
(45, 'michael_jackson', 'Michael Jackson', 'michaeljackson@gmail.com', 4294967295, 'St. James 1987, Washington', 'ayuwoki', 2),
(48, 'britney_spears', 'Britney Spears', 'britneyspears@gmail.com', 887564573, 'Patrick 1265, Washington D.C.', 'pop', 1),
(50, 'calamardo', 'Calamardo Esponja', 'calamardo@gmail.com', 2345798744, 'Estrella de Mar 345, Atlantico D.F.', 'Bob', 1),
(51, 'picapiedra', 'Pedro Picapiedra', 'picapiedra@gmail.com', 987654321, 'Piedra Vista 111, Piedra Blanda D.F.', 'Vilmaaa', 1),
(52, 'barney', 'Barney Dinosaur', 'barneydinosaur@gmail.com', 768574638, 'Extintion 123, Cretasius D.F.', 'meteorite', 1),
(53, 'frodo', 'Frodo Baggins', 'frodobaggins@gmail.com', 56744983, 'Bagshot Row, Hobbiton, The Shire', '98765', 1),
(54, 'carlotica', 'Carlotica Toro', 'carloticatoro@gmail.com', 346578245, 'North Pole', '45d8893s', 1),
(69, 'blancanieves', 'Blanca Nieves', 'blancanieves@gmail.com', 334567554, 'A Cave, Green Valley 234', 'enanitos', 1),
(81, 'charliepapa', 'Charlie Papa', 'charliepapa@gmail.com', 4294967295, 'Aníbal Troilo 969, CABA', '123456', 1),
(91, 'pedrito', 'Pedro Pérez', 'pedroperez@gmail.com', 444554433, 'Av. La Saltena 445, CABA', '123456', 1),
(92, 'Yugioh', 'Yugin', 'yugioh@gmail.com', 337483929, 'Av. Crosstown 555', 'yugioh', 1),
(95, 'chomsky', 'Chomsky Pérez', 'chomsky@gmail.com', 346578245, 'Walden St. 345, Alabama', '4556yer', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_status` (`id_status`);

--
-- Indices de la tabla `payment_methods`
--
ALTER TABLE `payment_methods`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products_orders`
--
ALTER TABLE `products_orders`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`cod_role`);

--
-- Indices de la tabla `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_status`),
  ADD KEY `id_status` (`id_status`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=318;

--
-- AUTO_INCREMENT de la tabla `payment_methods`
--
ALTER TABLE `payment_methods`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=93;

--
-- AUTO_INCREMENT de la tabla `products_orders`
--
ALTER TABLE `products_orders`
  MODIFY `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=516;

--
-- AUTO_INCREMENT de la tabla `roles`
--
ALTER TABLE `roles`
  MODIFY `cod_role` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `status`
--
ALTER TABLE `status`
  MODIFY `id_status` int(11) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
