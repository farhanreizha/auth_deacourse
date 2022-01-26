-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 23 Jan 2022 pada 14.18
-- Versi server: 10.4.21-MariaDB
-- Versi PHP: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `test`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `token` int(8) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `token`, `created_at`) VALUES
(46, 'afrizaldea', '$2b$10$srT7CiK0PePv3uNJg6sbYe5xTxew9r4IHsf6kOc1siLkGrYWVxlYe', 341780, '2022-01-23 03:30:01'),
(47, 'ddn', '$2b$10$qYfpwGapOGyuaqGEwteIFOiN1h3.KsFnKnfDQD3ycU4rX7pkFrKhe', 733812, '2022-01-23 03:30:23'),
(48, 'jajang', '$2b$10$2FcqGtw8GNXksnBCPF4Pgem7fFjQayW4mC0q5y4ocCxoFztXu6E2.', 581921, '2022-01-23 04:03:54'),
(49, 'hore', '$2b$10$6nGoip/gm2SH12kGTMHfYuEpJlxe3ls0.qIkcKLC0dgMsaHweUbgy', 786573, '2022-01-23 04:09:28'),
(50, 'jajan', '$2b$10$9oVgwBG4mENcYAH9XMQyIuAzHzNtOGQy.l0LsVMi1JKoNa8GQ1l8q', 175926, '2022-01-23 04:12:57'),
(51, 'mantapbor', '$2b$10$ZlVcrpfSVjpiPFLmKoeoZuEkajVin0TY.rzE2EgpP2mbbj15TChv6', 633860, '2022-01-23 04:13:17'),
(52, 'kumang', '$2b$10$oSQGFpj3ft43Xvi1gG9DKuRMOcGyZ7ovXVIjmZFO4cWnOYAsZ0Iou', 979935, '2022-01-23 04:14:16');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users_detail`
--

CREATE TABLE `users_detail` (
  `user_detail_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `fullname` varchar(255) DEFAULT NULL,
  `phone` int(16) DEFAULT NULL,
  `note` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data untuk tabel `users_detail`
--

INSERT INTO `users_detail` (`user_detail_id`, `user_id`, `fullname`, `phone`, `note`) VALUES
(53, 46, 'dea afrizal', 123123, '123'),
(54, 47, 'deden aja', 123, '123'),
(55, 48, 'jajang nurwahid', 123123123, 'oke mantap'),
(56, 49, 'hore hore', 123123123, '123123123'),
(57, 50, 'jajan terus', 1234567, '123123'),
(58, 51, 'mantap bor', 123123, '12312312'),
(59, 52, 'kumang jo', 123123, '123123');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `token` (`token`);

--
-- Indeks untuk tabel `users_detail`
--
ALTER TABLE `users_detail`
  ADD PRIMARY KEY (`user_detail_id`),
  ADD UNIQUE KEY `user_id` (`user_id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT untuk tabel `users_detail`
--
ALTER TABLE `users_detail`
  MODIFY `user_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=60;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
