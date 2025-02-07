import { config } from 'dotenv';
config();

export const AppConfig = {
  baseUrl: process.env.REACT_APP_API_URL,
};
