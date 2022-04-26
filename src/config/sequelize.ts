import { Sequelize } from 'sequelize';

import config from './config';

const db = new Sequelize(config.POSTGRES_URL, {
  query: {
    raw: true,
  },
});

export default db;
