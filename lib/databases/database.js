'use strict'

const { Sequelize } = require('sequelize');

const database = process.env.DATABASE_NAME;
const username = process.env.DATABASE_USERNAME;
const password = process.env.DATABASE_PASSWORD;

const sequelize = new Sequelize(database, username, password, {
  dialect: 'mariadb',
  logging: console.log 
});

sequelize.authenticate()
  .then(() => console.log('Connection established'))
  .catch(err => console.error('Connection failed', err));

export default sequelize;

 