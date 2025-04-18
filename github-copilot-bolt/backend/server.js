import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import { createApp } from './createApp.js';

dotenv.config();

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY
});

const port = 3000;
const app = createApp(openai);

const server = app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

export { app, server };