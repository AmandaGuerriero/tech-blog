const { Post } = require('../models');

const postdata = [
  {
    title: 'The One with the Sonogram at the End',
    post_url: 'https://en.wikipedia.org/wiki/The_One_with_the_Sonogram_at_the_End',
    user_id: 1
  },
  {
    title: 'The One with the Thumb',
    post_url: 'https://en.wikipedia.org/wiki/The_One_with_the_Thumb',
    user_id: 2
  },
  {
    title: 'The One with George Stephanopoulos',
    post_url: 'https://en.wikipedia.org/wiki/The_One_with_George_Stephanopoulos',
    user_id: 3
  },
  {
    title: 'The One with the Blackout',
    post_url: 'https://en.wikipedia.org/wiki/The_One_with_the_Blackout',
    user_id: 4
  },
  {
    title: 'The One with the Monkey',
    post_url: 'https://en.wikipedia.org/wiki/The_One_with_the_Monkey',
    user_id: 5
  },
  {
    title: 'The One Where the Monkey Gets Away',
    post_url: 'https://en.wikipedia.org/wiki/The_One_Where_the_Monkey_Gets_Away',
    user_id: 6
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
