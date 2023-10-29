
-- Dumping database structure for pixel
DROP DATABASE IF EXISTS `weed`;
CREATE DATABASE IF NOT EXISTS `weed` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci */ COMMENT 'database for weed project';
USE `weed`;

-- Products Weight
DROP TABLE IF EXISTS `Weight`;
CREATE TABLE IF NOT EXISTS `Weight` (
    `WeightID` INT PRIMARY KEY,
    `Value` TEXT NOT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Products Potency
DROP TABLE IF EXISTS `Potency`;
CREATE TABLE IF NOT EXISTS `Potency` (
    `PotencyID` INT PRIMARY KEY,
    `Value` TEXT NOT NULL,
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Table to excel products
DROP TABLE IF EXISTS `Product`;
CREATE TABLE IF NOT EXISTS `Product` (
    `ProductID` VARCHAR(50) PRIMARY KEY,
    `Name` VARCHAR(30) DEFAULT NULL,
    `Description` TEXT NOT NULL,
    `ImageID` VARCHAR(50) DEFAULT NULL,
    `Strain` VARCHAR(50) NOT NULL,
    `Weight` INT NOT NULL,
    `Potency` INT NOT NULL,
    `THC_Levels` INT NOT NULL,
    `CBD_Levels` INT NOT NULL,
    `Category` VARCHAR(50) NOT NULL,
    `Subcategory` VARCHAR(50) NOT NULL,
    `Rating` INT NOT NULL,
    `Available` TINYINT(1) NOT NULL,
    `QTY` INT NOT NULL,
    CONSTRAINT WeightFK FOREIGN KEY (Weight) REFERENCES Weight(WeightID),
    CONSTRAINT PotencyFK FOREIGN KEY (Potency) REFERENCES Potency(PotencyID),
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Products Price
DROP TABLE IF EXISTS `Price`;
CREATE TABLE IF NOT EXISTS `Price` (
    `PriceID` VARCHAR(50) PRIMARY KEY,
    `ProductID` VARCHAR(50),
    `WeightID` INT,
    `Price` DECIMAL(10, 2) NOT NULL,
    CONSTRAINT ProductIDFK FOREIGN KEY (ProductID) REFERENCES Product(ProductID),
    CONSTRAINT WeightIDFK FOREIGN KEY (WeightID) REFERENCES Weight(WeightID),
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Users Table
DROP TABLE IF EXISTS `Users`;
CREATE TABLE IF NOT EXISTS `Users` (
    `UserID` VARCHAR(50) PRIMARY KEY,
    `UserName` VARCHAR(20),
    `UserEmail` VARCHAR(50),
    `DOB` DATE NOT NULL,
    `UserPassword` VARCHAR(50) NOT NULL,
    `Verified` TINYINT(1),
    `ResetToken` VARCHAR(50),
    `ResetTokenExpiry` DATE,
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;
