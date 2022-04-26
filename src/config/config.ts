import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../../.env') });

interface EnvVars {
  NODE_ENV: string;
  PORT: number;
  POSTGRES_URL: string;
}

const config: EnvVars = {
  NODE_ENV: process.env.NODE_ENV ?? 'development',
  PORT: Number(process.env.PORT) ?? 3000,
  POSTGRES_URL: process.env.POSTGRES_URL ?? '',
};

export default config;
