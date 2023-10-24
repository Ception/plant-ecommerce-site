'use strict'

import { DataTypes } from 'sequelize';
import sequelize from '../database'; 

const Potency = sequelize.define('Potency', {
    PotencyID: { type: DataTypes.INTEGER, primaryKey: true },
    Value: { type: DataTypes.TEXT, allowNull: false }
  },
  {
    tableName: 'Potency',
    timestamps: false,
  });

export default Potency;
