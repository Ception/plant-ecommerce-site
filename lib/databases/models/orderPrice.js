'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../database';

const OrderPrice = sequelize.define('OrderPrice', {
    OrderPriceID: { type: DataTypes.STRING(70), primaryKey: true },
    OrderID: { type: DataTypes.STRING(70), allowNull: false },
    TotalPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
  },
  {
    tableName: 'OrderPrice',
    timestamps: false,
  });

export default OrderPrice;
