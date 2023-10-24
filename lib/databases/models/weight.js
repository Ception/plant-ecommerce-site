'use strict'

import { DataTypes } from 'sequelize';
import sequelize from '../database'; 

const Weight = sequelize.define('Weight', {
    WeightID: { type: DataTypes.INTEGER, primaryKey: true },
    Value: { type: DataTypes.TEXT, allowNull: false }
  },
  {
    tableName: 'Weight',
    timestamps: false,
  });

export default Weight;
