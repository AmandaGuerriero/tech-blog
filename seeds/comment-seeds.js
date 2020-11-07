const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This one was so very funny',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'This one was so very funny 2',
    user_id: 2,
    post_id: 3
  },
  {
    comment_text: 'This one was so very funny 3',
    user_id: 4,
    post_id: 5
  },
  {
    comment_text: 'This one was so very funny 4',
    user_id: 5,
    post_id: 6
  },
  {
    comment_text: 'This one was so very funny 5',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This one was so very funny 6',
    user_id: 1,
    post_id: 2
  },
  {
    comment_text: 'This one was so very funny 7',
    user_id: 3,
    post_id: 4
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
