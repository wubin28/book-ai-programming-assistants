import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Initialize OpenAI client
console.log('Using DeepSeek API Key:', process.env.DEEPSEEK_API_KEY ? `${process.env.DEEPSEEK_API_KEY.substring(0, 5)}...` : 'Not set');

const openai = new OpenAI({
  baseURL: 'https://api.deepseek.com',
  apiKey: process.env.DEEPSEEK_API_KEY
});

// API endpoint to optimize prompt
app.post('/api/optimize-prompt', async (req, res) => {
  try {
    console.log('Received request body:', req.body);
    const { template } = req.body;

    if (!template) {
      console.log('Template is missing in the request');
      return res.status(400).json({ error: 'Template is required' });
    }

    console.log('Sending request to DeepSeek API with template length:', template.length);
    console.log('Template preview:', template.substring(0, 100) + '...');

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: template }
      ],
      model: "deepseek-chat",
      timeout: 30000 // 30 seconds timeout
    });

    console.log('Received response from DeepSeek API');
    console.log('Response preview:', completion.choices[0].message.content.substring(0, 100) + '...');

    res.json({
      optimizedPrompt: completion.choices[0].message.content
    });
  } catch (error) {
    console.error('Error optimizing prompt:', error);

    // Send a more detailed error response
    const statusCode = error.status || 500;
    const errorResponse = {
      error: 'Failed to optimize prompt',
      message: error.message,
      details: error.error || {}
    };

    console.error('Sending error response:', errorResponse);
    res.status(statusCode).json(errorResponse);
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`API endpoint available at http://localhost:${port}/api/optimize-prompt`);
  console.log('Ready to receive requests from the frontend');
});
