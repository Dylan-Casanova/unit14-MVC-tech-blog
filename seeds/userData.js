const { User } = require('../models');

const userdata = [
  {
    username: 'Lala',
    email: 'lala@me.com',
    password: 'password123',
    
  },
  {
    username: 'Lale',
    email: 'lale@me.com',
    password: 'password1234',
    
  },
  {
    username: 'Lali',
    email: 'lali@me.com',
    password: 'Lamelamb12',
    
  },
  {
    username: 'Lalo',
    email: 'lalo@me.com',
    password: 'electricthunder007',
    
  },
];

const seedUser = () => User.bulkCreate(userdata);

module.exports = seedUser;