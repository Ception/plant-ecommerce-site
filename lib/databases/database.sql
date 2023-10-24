
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


-- Inserted Data for Testing
INSERT INTO Weight (WeightID, Value) VALUES
(1000, '1g'),
(1001, '1g, 3.5gs'),
(1002, '1g, 7gs');

INSERT INTO Potency (PotencyID, Value) VALUES
(1000, 'AAA'),
(1001, 'AAA+'),
(1002, 'AAAA');

INSERT INTO Product (ProductID, Name, Description, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY) VALUES
('Prod1', 'Product 1', 'Description 1', 'Indica', 1000, 1000, 20, 1, 'Flower', 'Indica', 4, 1, 10),
('Prod2', 'Product 2', 'Description 2', 'Sativa', 1001, 1001, 18, 2, 'Flower', 'Sativa', 5, 1, 20),
('Prod3', 'Product 3', 'Description 3', 'Hybrid', 1002, 1002, 22, 3, 'Concentrate', 'Wax', 3, 1, 5);

INSERT INTO Price (PriceID, ProductID, WeightID, Price) VALUES
('Price1', 'Prod1', 1000, 10.99),
('Price2', 'Prod2', 1001, 12.99),
('Price3', 'Prod3', 1002, 20.00);
