'use strict'

import { DataTypes } from 'sequelize';
import sequelize from '../database'; 

const Price = sequelize.define('Price', {
    PriceID: { type: DataTypes.STRING(50), primaryKey: true },
    ProductID: { type: DataTypes.STRING(50), allowNull: false, references: { model: 'Product', key: 'ProductID' } },
    WeightID: { type: DataTypes.INTEGER, allowNull: false, references: { model: 'Weight', key: 'WeightID' } },
    Price: { type: DataTypes.DECIMAL(10, 2), allowNull: false }
  },
  {
    tableName: 'Price',
    timestamps: false,
  });

export default Price;
