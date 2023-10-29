'use strict';

import { DataTypes } from 'sequelize';
import sequelize from '../database';

const Users = sequelize.define('Users', {
    UserID: { type: DataTypes.STRING(50), primaryKey: true },
    UserName: { type: DataTypes.STRING(20) },
    UserEmail: { type: DataTypes.STRING(50) },
    DOB: { type: DataTypes.DATE, allowNull: false },
    UserPassword: { type: DataTypes.STRING(50), allowNull: false },
    Verified: { type: DataTypes.TINYINT(1) },
    ResetToken: { type: DataTypes.STRING(50) },
    ResetTokenExpiry: { type: DataTypes.DATE }
  },
  {
    tableName: 'Users',
    timestamps: false,
  });

export default Users;
