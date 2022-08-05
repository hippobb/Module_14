const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Yes, It is true.',
    user_id: 2,
    post_id: 1
  },
  {
    comment_text: 'It’s an extension to the Mustache templating language. ',
    user_id: 1,
    post_id: 2
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
