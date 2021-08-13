/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path');
// require('dotenv').config();

module.exports = {
  // env: {
  //   API_BASE_URL: process.env.API_BASE_URL,
  //   CMS_BASE_URL: process.env.CMS_BASE_URL,
  //   CMS_KEY: process.env.CMS_KEY,
  // },
  images: {
    domains: [
      'images.microcms-assets.io',
      'qiita-user-contents.imgix.net',
      'staging-qiita-user-contents.imgix.net',
      'assets.st-note.com',
    ],
  },
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      src: path.join(__dirname, 'src/'),
    };
    return config;
  },
};
