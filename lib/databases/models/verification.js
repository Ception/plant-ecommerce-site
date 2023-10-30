'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../database'; 

const Verification = sequelize.define('Verification', {
    UserID: { type: DataTypes.STRING(70), primaryKey: true },
    UserToken: { type: DataTypes.STRING(70), allowNull: false },
    UserTokenExpiry: { type: DataTypes.DATE, allowNull: false },
    Verified: { type: DataTypes.TINYINT(1), allowNull: false },
  },
  {
    tableName: 'Verification',
    timestamps: false,
  });

export default Verification;
