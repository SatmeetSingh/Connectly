import { config } from 'dotenv';
config();

const AppConfig = {
  baseUrl: process.env.REACT_APP_API_URL,
};
