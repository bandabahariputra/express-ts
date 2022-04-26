import { DataTypes, Model } from 'sequelize';

import sequelize from '../config/sequelize';

interface UserAttributes {
  id: string;
  name: string;
  email: string;
  password?: string;
}

class User extends Model<UserAttributes> implements UserAttributes {
  declare id: string;
  declare name: string;
  declare email: string;
  declare password?: string;
}

User.init(
  {
    id: {
      field: '_id',
      type: DataTypes.STRING,
      primaryKey: true,
    },
    name: {
      field: 'first_name',
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
  },
);

export default User;
