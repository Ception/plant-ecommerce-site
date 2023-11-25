'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Orders = sequelize.define('Orders', {
    OrderID: { type: DataTypes.STRING(70), primaryKey: true },
    UserID: { type: DataTypes.STRING(70), allowNull: false },
    DatePlaced: { type: DataTypes.DATE, allowNull: false },
    DatePayed: { type: DataTypes.DATE },
    Verified: { type: DataTypes.TINYINT(1) },
  },
  {
    tableName: 'Orders',
    timestamps: false,
  });

export default Orders;
