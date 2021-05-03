const User = require('./User');
const Blog = require('./Blog');
const Communication = require('./Communication');

User.hasMany(Blog, {
  foreignKey: 'user_id',
});

User.hasMany(Communication, {
  foreignKey: 'user_id',
});

Blog.hasMany(User, {
  foreignKey: 'user_id',
});

Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

Communication.belongsTo(User, {
  foreignKey: 'user_id'
});

Communication.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog, Communication };