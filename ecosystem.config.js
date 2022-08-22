/* eslint-disable */

const PROJECT_NAME = 'cipar';
// Target server hostname or IP address
const LOCAL_HOST = 'localhost';
const TARGET_SERVER_HOST = LOCAL_HOST;
// Target server username
const TARGET_SERVER_USER = 'gitlab-runner';
// Target server application path
const TARGET_SERVER_APP_PATH = `/srv/www/${PROJECT_NAME}`;
const TARGET_DEMO_SERVER_APP_PATH = `/home/cacdi/node/${PROJECT_NAME}`;
// Your repository
const REPO = 'git@git.cacdi.com:cht/council-of-indigenous-peoples-ar-tour/web.git';

module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    // First application
    {
      name: PROJECT_NAME,
      script: 'yarn',
      args: 'start -p 8801',
      // interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development',
        PORT: 8808
      },
      env_uat: {
        NODE_ENV: 'production',
        PORT: 8804
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 8801
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: TARGET_SERVER_USER,
      host: TARGET_SERVER_HOST,
      ref: 'origin/master',
      repo: REPO,
      path: TARGET_SERVER_APP_PATH,
      'post-deploy': 'git pull origin master && yarn install && yarn build && pm2 startOrRestart ecosystem.config.js --env production'
    },
    development: {
      user: TARGET_SERVER_USER,
      host: TARGET_SERVER_HOST,
      ref: 'origin/demo',
      repo: REPO,
      path: TARGET_DEMO_SERVER_APP_PATH,
      'post-deploy': 'git pull origin demo && yarn install && yarn build && pm2 startOrRestart ecosystem.dev.config.js --env development',
      env: {
        NODE_ENV: 'development'
      }
    }
  }
};
