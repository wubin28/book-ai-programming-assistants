import express from 'express';
import cors from 'cors';

export function createApp(apiClient) {
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  
  app.post('/api/optimize', async (req, res) => {
    try {
      const { prompt } = req.body;
      
      const completion = await apiClient.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant specialized in prompt optimization." },
          { role: "user", content: prompt }
        ],
        model: "deepseek-chat",
        timeout: 30000
      });
  
      res.json({ result: completion.choices[0].message.content });
    } catch (error) {
      console.error('Error calling DeepSeek API:', error);
      res.status(500).json({ error: 'Failed to get response from DeepSeek' });
    }
  });
  
  return app;
}