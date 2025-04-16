import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

dotenv.config();  // 直接从当前目录读取 .env

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY
});

app.post('/api/optimize', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant specialized in prompt optimization." },
        { role: "user", content: prompt }
      ],
      model: "deepseek-chat",
      timeout: 30000 // 30 seconds timeout
    });

    res.json({ result: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error calling DeepSeek API:', error);
    res.status(500).json({ error: 'Failed to get response from DeepSeek' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});