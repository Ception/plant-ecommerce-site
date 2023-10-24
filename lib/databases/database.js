'use strict'

import { Sequelize } from 'sequelize';

// const CONNECTION_INFO = {
//     host: "localhost", 
//     user: "root", 
//     password: "root", 
//     database: "weed",
//     connectionLimit: 10,
//     acquireTimeout: 20000
//  }; 

const database = 'weed';
const username = 'root';
const password = 'root';

const sequelize = new Sequelize('weed', 'root', 'root', {
  host: 'localhost',
  dialect: 'mariadb',
  logging: console.log // Add this line for debug logging
});

sequelize.authenticate()
  .then(() => console.log('Connection established'))
  .catch(err => console.error('Connection failed', err));

export default sequelize;


 