-- MariaDB dump 10.19  Distrib 10.11.2-MariaDB, for osx10.18 (x86_64)
--
-- Host: 127.0.0.1    Database: cms
-- ------------------------------------------------------
-- Server version	10.11.2-MariaDB-1:10.11.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `category` varchar(100) NOT NULL,
  `description` longtext DEFAULT NULL,
  `createdBy` int(10) unsigned DEFAULT NULL,
  `createdAt` int(10) DEFAULT unix_timestamp(),
  `updatedAt` int(10) DEFAULT unix_timestamp(),
  PRIMARY KEY (`id`),
  KEY `createdBy` (`createdBy`),
  CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`createdBy`) REFERENCES `users` (`idx`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES
(1,'test','tsetset',5,1683265674,1683265674),
(2,'sdscwe','sDcs',5,1683266039,1683266039),
(7,'update test again','werwer',5,1683266700,1683266700),
(8,'test','\r\nId voluptate natus qui officiis veniam vel sequi voluptatibus ut voluptas voluptatem eos expedita sequi ea commodi provident At voluptatum iure. Vel omnis aspernatur sit quod tenetur aut neque voluptas ea quaerat sunt.\r\n\r\nQui omnis debitis qui minima quasi ut aliquam quibusdam eos eveniet aspernatur est nesciunt velit aut iusto galisum? Rem tempore dolore ut minima voluptas est error beatae qui reiciendis voluptatem qui itaque nulla est accusantium rerum.\r\n\r\nAt tenetur iure id voluptate velit aut ipsum esse et minus dolor! Et temporibus earum ab galisum ratione eos dolore odit hic ullam recusandae sit dicta quas At nisi numquam qui officiis omnis. Ex molestias beatae et error incidunt sit commodi voluptas qui quisquam excepturi est autem dolore eum voluptatem maiores.',5,1683269210,1683269210),
(9,'asda','asd',5,1683269219,1683269219),
(10,'Hello','TESTETST',5,1683274701,1683274701);
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-05 16:33:42
