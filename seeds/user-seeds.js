const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'rachel',
    password: 'green'
  },
  {
    username: 'ross',
    password: 'geller'
  },
  {
    username: 'monica',
    password: 'geller'
  },
  {
    username: 'chandler',
    password: 'bing'
  },
  {
    username: 'joey',
    password: 'tribiani'
  },
  {
    username: 'phoebe',
    password: 'buffet'
  },
  {
    username: 'gunther',
    password: 'coffee'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
