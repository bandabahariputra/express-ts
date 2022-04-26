import { Sequelize } from 'sequelize';

const db = new Sequelize(
  'postgresql://postgres:postgres@localhost:5432/vokraf',
  {
    query: {
      raw: true,
    },
  },
);

export default db;
