const { Blog } = require('../models');

const blogdata = [
  {
    title: 'JavaScript is awesome',
    post_date: 'April 30, 2021 09:41:32',
    blog_content: 'It is neat that there are so many different things that you can with JavaScript!',
    
  },
  {
    title: 'Crypto Currency confusion',
    post_date: 'May 02, 2021 06:04:00',
    blog_content: 'can someone explain how Crypto Currency works?',
    
  },
];

const seedBlog = () => Blog.bulkCreate(blogdata);

module.exports = seedBlog;