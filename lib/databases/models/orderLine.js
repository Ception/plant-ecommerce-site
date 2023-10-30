'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../database';

const OrderLine = sequelize.define('OrderLine', {
    OrderLineID: { type: DataTypes.STRING(70), primaryKey: true },
    OrderID: { type: DataTypes.STRING(70), allowNull: false },
    ProductID: { type: DataTypes.STRING(70), allowNull: false },
    PriceID: { type: DataTypes.STRING(70), allowNull: false },
  },
  {
    tableName: 'OrderLine',
    timestamps: false,
  });

export default OrderLine;
