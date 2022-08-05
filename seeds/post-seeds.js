const { Post } = require('../models');

const postdata = [
  {
    title: 'Why MVC is so important',
    post_content: 'MVC allows developers to maintain a true separation of concerns, devising their code between the Model layer for data, the view layer for design, an the Controller layer for application logic.',
    user_id: 1
  },
  {
    title: 'Handlebars',
    post_content: 'Handlebars.js (Links to an external site.) is a logicless templating language that keeps the View and the code separate and compiles templates into JavaScript functions.',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
