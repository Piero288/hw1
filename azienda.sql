-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Creato il: Mag 24, 2021 alle 17:27
-- Versione del server: 10.4.18-MariaDB
-- Versione PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `azienda`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `acquista`
--

CREATE TABLE `acquista` (
  `cod_acquisto` varchar(20) NOT NULL,
  `username` varchar(20) DEFAULT NULL,
  `nome_prodotto` varchar(20) DEFAULT NULL,
  `quantita` int(11) DEFAULT NULL,
  `prezzo` int(11) DEFAULT NULL,
  `cellulare` varchar(10) DEFAULT NULL,
  `citta` varchar(30) DEFAULT NULL,
  `indirizzo` varchar(50) DEFAULT NULL,
  `data_di_acquisto` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `acquista`
--

INSERT INTO `acquista` (`cod_acquisto`, `username`, `nome_prodotto`, `quantita`, `prezzo`, `cellulare`, `citta`, `indirizzo`, `data_di_acquisto`) VALUES
('60abc4d1d75b4', 'provawp', 'Ionico', 1, 35, '3387569852', 'Catania', 'Via Santa Sofia, 6', '2021-05-24'),
('60abc57c84f8f', 'piero288', 'Creme', 3, 39, '3299965478', 'Enna', 'Via Eredia, 88', '2021-05-24');

--
-- Trigger `acquista`
--
DELIMITER $$
CREATE TRIGGER `AggiornaQuantita` AFTER INSERT ON `acquista` FOR EACH ROW begin
update prodotto set quantita=quantita-new.quantita where nome=new.nome_prodotto;
end
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `CheckProdotto` BEFORE INSERT ON `acquista` FOR EACH ROW begin
declare msg varchar(255);
set msg=concat("Prodotto finito!");
if((select quantita from prodotto where nome=new.nome_prodotto)=0)
then signal sqlstate "45000" set message_text = msg;
end if;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Struttura della tabella `carrello`
--

CREATE TABLE `carrello` (
  `username` varchar(20) NOT NULL,
  `nome_prodotto` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `carrello`
--

INSERT INTO `carrello` (`username`, `nome_prodotto`) VALUES
('piero288', 'Rocca'),
('piero288', 'Rosoli'),
('provawp', 'Murika'),
('provawp', 'Oromoro');

-- --------------------------------------------------------

--
-- Struttura della tabella `prodotto`
--

CREATE TABLE `prodotto` (
  `nome` varchar(30) NOT NULL,
  `prezzo` int(11) DEFAULT NULL,
  `quantita` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `prodotto`
--

INSERT INTO `prodotto` (`nome`, `prezzo`, `quantita`) VALUES
('Creme', 13, 47),
('Ionico', 35, 49),
('Murika', 18, 50),
('Oromoro', 28, 50),
('Rocca', 12, 50),
('Rosoli', 10, 50);

-- --------------------------------------------------------

--
-- Struttura della tabella `utente`
--

CREATE TABLE `utente` (
  `username` varchar(20) NOT NULL,
  `nome` varchar(20) DEFAULT NULL,
  `cognome` varchar(20) DEFAULT NULL,
  `email` varchar(30) DEFAULT NULL,
  `password` varchar(80) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dump dei dati per la tabella `utente`
--

INSERT INTO `utente` (`username`, `nome`, `cognome`, `email`, `password`) VALUES
('piero288', 'Piero', 'Galata', 'pierogalata@hotmail.it', '$2y$10$ruG.WMidNTIpj5VAN2Uqg.OULhDfgtNHqOmtMbZqD2IUmLMmcLeka'),
('provawp', 'Prova', 'Prova', 'prova@hotmail.it', '$2y$10$PF5w02xMJSF6MOUliDtrOOenm6on2kq86/DABhHTboc78QkoWTJgq');
/* pier288 password = abcd12345 ; provawp password = provahw1 */

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `acquista`
--
ALTER TABLE `acquista`
  ADD PRIMARY KEY (`cod_acquisto`),
  ADD KEY `idx_username` (`username`),
  ADD KEY `idx_nome_prodotto` (`nome_prodotto`);

--
-- Indici per le tabelle `carrello`
--
ALTER TABLE `carrello`
  ADD PRIMARY KEY (`username`,`nome_prodotto`),
  ADD KEY `idx_username` (`username`),
  ADD KEY `idx_nome_prodotto` (`nome_prodotto`);

--
-- Indici per le tabelle `prodotto`
--
ALTER TABLE `prodotto`
  ADD PRIMARY KEY (`nome`);

--
-- Indici per le tabelle `utente`
--
ALTER TABLE `utente`
  ADD PRIMARY KEY (`username`);

--
-- Limiti per le tabelle scaricate
--

--
-- Limiti per la tabella `acquista`
--
ALTER TABLE `acquista`
  ADD CONSTRAINT `acquista_ibfk_1` FOREIGN KEY (`username`) REFERENCES `utente` (`username`) ON UPDATE CASCADE,
  ADD CONSTRAINT `acquista_ibfk_2` FOREIGN KEY (`nome_prodotto`) REFERENCES `prodotto` (`nome`) ON UPDATE CASCADE;

--
-- Limiti per la tabella `carrello`
--
ALTER TABLE `carrello`
  ADD CONSTRAINT `carrello_ibfk_1` FOREIGN KEY (`username`) REFERENCES `utente` (`username`) ON UPDATE CASCADE,
  ADD CONSTRAINT `carrello_ibfk_2` FOREIGN KEY (`nome_prodotto`) REFERENCES `prodotto` (`nome`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
