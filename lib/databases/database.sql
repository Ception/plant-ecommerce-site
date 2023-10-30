
-- Dumping database structure for pixel
DROP DATABASE IF EXISTS `weed`;
CREATE DATABASE IF NOT EXISTS `weed` /*!40100 DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci */ COMMENT 'database for weed project';
USE `weed`;

-- Products Weight
CREATE TABLE IF NOT EXISTS `Weight` (
    `WeightID` INT PRIMARY KEY,
    `Value` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Products Potency
CREATE TABLE IF NOT EXISTS `Potency` (
    `PotencyID` INT PRIMARY KEY,
    `Value` TEXT NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Users Table
CREATE TABLE IF NOT EXISTS `Users` (
    `UserID` VARCHAR(70) PRIMARY KEY,
    `UserName` VARCHAR(20),
    `UserEmail` VARCHAR(50),
    `DOB` DATE NOT NULL,
    `UserPassword` VARCHAR(70) NOT NULL,
    `Verified` TINYINT(1),
    `ResetToken` VARCHAR(50),
    `ResetTokenExpiry` DATE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Product Table
CREATE TABLE IF NOT EXISTS `Product` (
    `ProductID` VARCHAR(70) PRIMARY KEY,
    `Name` VARCHAR(50) DEFAULT NULL,
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
    CONSTRAINT `WeightFK` FOREIGN KEY (`Weight`) REFERENCES `Weight`(`WeightID`),
    CONSTRAINT `PotencyFK` FOREIGN KEY (`Potency`) REFERENCES `Potency`(`PotencyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Products Price
CREATE TABLE IF NOT EXISTS `Price` (
    `PriceID` VARCHAR(70) PRIMARY KEY,
    `ProductID` VARCHAR(70) NOT NULL,
    `WeightID` INT NOT NULL,
    `Price` DECIMAL(10, 2) NOT NULL,
    CONSTRAINT `ProductIDFK` FOREIGN KEY (`ProductID`) REFERENCES `Product`(`ProductID`),
    CONSTRAINT `WeightIDFK` FOREIGN KEY (`WeightID`) REFERENCES `Weight`(`WeightID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Verification Table
CREATE TABLE IF NOT EXISTS `Verification` (
    `UserID` VARCHAR(70) PRIMARY KEY,
    `UserToken` VARCHAR(70),
    `UserTokenExpiry` DATE,
    `Verified` TINYINT(1) NOT NULL,
    CONSTRAINT `UserIDFK` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- Orders Table
CREATE TABLE IF NOT EXISTS `Orders` (
    `OrderID` VARCHAR(70) PRIMARY KEY,
    `UserID` VARCHAR(70) NOT NULL,
    `DatePlaced` DATE NOT NULL,
    `DatePayed` DATE,
    `Verified` TINYINT(1),
    CONSTRAINT `UserIDFK_Orders` FOREIGN KEY (`UserID`) REFERENCES `Users`(`UserID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

-- OrderLine Table
CREATE TABLE IF NOT EXISTS `OrderLine` (
    `OrderLineID` VARCHAR(70) PRIMARY KEY,
    `OrderID` VARCHAR(70) NOT NULL,
    `ProductID` VARCHAR(70) NOT NULL,
    `PriceID` VARCHAR(70) NOT NULL,
    CONSTRAINT `OrderIDFK_OrderLine` FOREIGN KEY (`OrderID`) REFERENCES `Orders`(`OrderID`),
    CONSTRAINT `ProductIDFK_OrderLine` FOREIGN KEY (`ProductID`) REFERENCES `Product`(`ProductID`),
    CONSTRAINT `PriceIDFK_OrderLine` FOREIGN KEY (`PriceID`) REFERENCES `Price`(`PriceID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_general_ci;

