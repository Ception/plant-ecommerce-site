'use strict'

import { DataTypes } from 'sequelize';
import sequelize from '../database'; 

const Product = sequelize.define('Product', {
  ProductID: { type: DataTypes.STRING(50), primaryKey: true },
  Name: { type: DataTypes.STRING(30) },
  Description: { type: DataTypes.TEXT, allowNull: false },
  ImageID: { type: DataTypes.STRING(50) },
  Strain: { type: DataTypes.STRING(50), allowNull: false },
  Weight: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Weight', key: 'WeightID' } },
  Potency: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Potency', key: 'PotencyID' } },
  THC_Levels: { type: DataTypes.INTEGER, allowNull: false },
  CBD_Levels: { type: DataTypes.INTEGER, allowNull: false },
  Category: { type: DataTypes.STRING(50), allowNull: false },
  Subcategory: { type: DataTypes.STRING(50), allowNull: false },
  Rating: { type: DataTypes.INTEGER, allowNull: false },
  Available: { type: DataTypes.TINYINT(1), allowNull: false },
  QTY: { type: DataTypes.INTEGER, allowNull: false }
},
{
  tableName: 'Product',
  timestamps: false,
});

export default Product;
