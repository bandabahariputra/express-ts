import App from './app';
import db from './config/sequelize';

const app = new App(3001);

db.authenticate()
  .then(() => {
    app.listen();
  })
  .catch((err: any) => console.log(err));
