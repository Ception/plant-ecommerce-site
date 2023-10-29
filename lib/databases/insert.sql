
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




-- Product Table for complete testing:
INSERT INTO YourTableName 
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY) 
VALUES 
('Prod4', 'Bundle Product 1', 'Description 4', NULL, 'Indica', 1000, 1000, 21, 2, 'Bundles', 'Bundle Subcat 1', 4, 1, 15),
('Prod5', 'Bundle Product 2', 'Description 5', NULL, 'Sativa', 1001, 1001, 19, 3, 'Bundles', 'Bundle Subcat 2', 5, 1, 25),
('Prod6', 'Bundle Product 3', 'Description 6', NULL, 'Hybrid', 1002, 1002, 23, 4, 'Bundles', 'Bundle Subcat 3', 3, 1, 10);

INSERT INTO product 
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY) 
VALUES 
('Prod4', 'Bundle Product 1', 'Description 4', NULL, 'Indica', 1000, 1000, 21, 2, 'Bundles', 'Bundle Subcat 1', 4, 1, 15),
('Prod5', 'Bundle Product 2', 'Description 5', NULL, 'Sativa', 1001, 1001, 19, 3, 'Bundles', 'Bundle Subcat 2', 5, 1, 25),
('Prod6', 'Bundle Product 3', 'Description 6', NULL, 'Hybrid', 1002, 1002, 23, 4, 'Bundles', 'Bundle Subcat 3', 3, 1, 10);


-- CBD Category
INSERT INTO product 
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY)
VALUES
('Prod7', 'CBD Product 1', 'Description 7', NULL, 'Indica', 1000, 1000, 20, 5, 'CBD', 'Oil', 4, 1, 10),
('Prod8', 'CBD Product 2', 'Description 8', NULL, 'Sativa', 1001, 1001, 18, 6, 'CBD', 'Tincture', 5, 1, 20),
('Prod9', 'CBD Product 3', 'Description 9', NULL, 'Hybrid', 1002, 1002, 22, 7, 'CBD', 'Capsules', 3, 1, 5);

-- Concentrates Category
INSERT INTO product
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY)
VALUES
('Prod10', 'Concentrate Product 1', 'Description 10', NULL, 'Indica', 1000, 1000, 23, 8, 'Concentrates', 'Shatter', 4, 1, 15),
('Prod11', 'Concentrate Product 2', 'Description 11', NULL, 'Sativa', 1001, 1001, 21, 9, 'Concentrates', 'Wax', 5, 1, 25),
('Prod12', 'Concentrate Product 3', 'Description 12', NULL, 'Hybrid', 1002, 1002, 25, 10, 'Concentrates', 'Oil', 3, 1, 10);

-- And so on for other categories...
-- Deals Category
INSERT INTO product 
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY)
VALUES
('Prod13', 'Deal Product 1', 'Description 13', NULL, 'Indica', 1000, 1000, 20, 11, 'Deals', 'Discounted', 4, 1, 10),
('Prod14', 'Deal Product 2', 'Description 14', NULL, 'Sativa', 1001, 1001, 18, 12, 'Deals', 'Clearance', 5, 1, 20),
('Prod15', 'Deal Product 3', 'Description 15', NULL, 'Hybrid', 1002, 1002, 22, 13, 'Deals', 'Bundles', 3, 1, 5);

-- Edibles Category
INSERT INTO product
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY)
VALUES
('Prod16', 'Edible Product 1', 'Description 16', NULL, 'Indica', 1000, 1000, 23, 14, 'Edibles', 'Gummies', 4, 1, 15),
('Prod17', 'Edible Product 2', 'Description 17', NULL, 'Sativa', 1001, 1001, 21, 15, 'Edibles', 'Chocolates', 5, 1, 25),
('Prod18', 'Edible Product 3', 'Description 18', NULL, 'Hybrid', 1002, 1002, 25, 16, 'Edibles', 'Beverages', 3, 1, 10);

-- Merchandise Category
-- INSERT INTO product
-- (ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY)
-- VALUES
-- ('Prod19', 'Merchandise Product 1', 'Description 19', NULL, NULL, NULL, NULL, NULL, NULL, 'Merchandise', 'Apparel', 4, 1, 30),
-- ('Prod20', 'Merchandise Product 2', 'Description 20', NULL, NULL, NULL, NULL, NULL, NULL, 'Merchandise', 'Accessories', 5, 1, 40),
-- ('Prod21', 'Merchandise Product 3', 'Description 21', NULL, NULL, NULL, NULL, NULL, NULL, 'Merchandise', 'Gear', 3, 1, 20);

-- PreRoll Category
INSERT INTO product
(ProductID, Name, Description, ImageID, Strain, Weight, Potency, THC_Levels, CBD_Levels, Category, Subcategory, Rating, Available, QTY)
VALUES
('Prod22', 'PreRoll Product 1', 'Description 22', NULL, 'Indica', 1000, 1000, 20, 17, 'PreRoll', 'Indica PreRoll', 4, 1, 10),
('Prod23', 'PreRoll Product 2', 'Description 23', NULL, 'Sativa', 1001, 1001, 18, 18, 'PreRoll', 'Sativa PreRoll', 5, 1, 20),
('Prod24', 'PreRoll Product 3', 'Description 24', NULL, 'Hybrid', 1002, 1002, 22, 19, 'PreRoll', 'Hybrid PreRoll', 3, 1, 5);

-- Price table for complete testing
-- Prices for Bundle Products
INSERT INTO Price
(PriceID, ProductID, WeightID, Price)
VALUES
('Price4', 'Prod4', 1000, 15.99),
('Price5', 'Prod5', 1001, 17.99),
('Price6', 'Prod6', 1002, 25.00);

-- Prices for CBD Products
INSERT INTO Price
(PriceID, ProductID, WeightID, Price)
VALUES
('Price7', 'Prod7', 1000, 10.99),
('Price8', 'Prod8', 1001, 12.99),
('Price9', 'Prod9', 1002, 20.00);

-- Prices for Concentrate Products
INSERT INTO Price
(PriceID, ProductID, WeightID, Price)
VALUES
('Price10', 'Prod10', 1000, 30.99),
('Price11', 'Prod11', 1001, 32.99),
('Price12', 'Prod12', 1002, 40.00);

-- Prices for Deal Products
INSERT INTO Price
(PriceID, ProductID, WeightID, Price)
VALUES
('Price13', 'Prod13', 1000, 9.99),
('Price14', 'Prod14', 1001, 11.99),
('Price15', 'Prod15', 1002, 19.00);

-- Prices for Edible Products
INSERT INTO Price
(PriceID, ProductID, WeightID, Price)
VALUES
('Price16', 'Prod16', 1000, 5.99),
('Price17', 'Prod17', 1001, 7.99),
('Price18', 'Prod18', 1002, 15.00);

-- Prices for Merchandise Products
-- INSERT INTO Price
-- (PriceID, ProductID, WeightID, Price)
-- VALUES
-- ('Price19', 'Prod19', 1000, 20.99),
-- ('Price20', 'Prod20', 1001, 22.99),
-- ('Price21', 'Prod21', 1002, 30.00);

-- Prices for PreRoll Products
INSERT INTO Price
(PriceID, ProductID, WeightID, Price)
VALUES
('Price22', 'Prod22', 1000, 8.99),
('Price23', 'Prod23', 1001, 10.99),
('Price24', 'Prod24', 1002, 18.00);
