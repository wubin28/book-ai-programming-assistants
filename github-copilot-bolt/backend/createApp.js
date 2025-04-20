import express from 'express';
import cors from 'cors';

export function createApp(apiClient) {
  const app = express();
  
  app.use(cors());
  app.use(express.json());
  
  app.post('/api/optimize', async (req, res) => {
    console.log('Received optimization request:', {
      promptLength: req.body.prompt?.length,
      timestamp: new Date().toISOString()
    });

    try {
      const { prompt } = req.body;
      
      res.setHeader('Content-Type', 'text/event-stream');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Connection', 'keep-alive');

      console.log('Calling DeepSeek API...');
      const completion = await apiClient.chat.completions.create({
        messages: [
          { role: "system", content: "You are a helpful assistant specialized in prompt optimization." },
          { role: "user", content: prompt }
        ],
        model: "deepseek-chat",
        stream: true,
        timeout: 30000
      });

      console.log('Started receiving stream from DeepSeek');
      for await (const chunk of completion) {
        const content = chunk.choices[0]?.delta?.content || '';
        if (content) {
          console.log('Sending chunk:', content);
          res.write(`data: ${JSON.stringify({ content })}\n\n`);
        }
      }
      
      console.log('Stream completed successfully');
      res.end();
    } catch (error) {
      console.error('Backend Error Details:', {
        name: error.name,
        message: error.message,
        status: error.status,
        stack: error.stack,
        raw: error
      });
      res.status(500).json({ 
        error: 'Failed to get response from DeepSeek',
        details: error.message,
        name: error.name,
        status: error.status 
      });
    }
  });
  
  return app;
}

const handleOptimize = async () => {
  const promptTemplate = `As a prompt engineering expert...`; // 保持原有的模板

  setOptimizedPrompt("");
  setError("");
  setIsLoading(true);

  try {
    const timeoutId = setTimeout(() => {
      setError("DeepSeek没有响应");
      setIsLoading(false);
    }, 30000);

    const response = await fetch("http://localhost:3000/api/optimize", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ prompt: promptTemplate }),
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Failed to optimize prompt");
    }

    // 处理流式响应
    const reader = response.body?.getReader();
    const decoder = new TextDecoder();

    if (!reader) {
      throw new Error("Failed to read response");
    }

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      const chunk = decoder.decode(value);
      const lines = chunk.split('\n');

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          try {
            const data = JSON.parse(line.slice(6));
            setOptimizedPrompt(prev => prev + data.content);
          } catch (e) {
            console.error('Error parsing SSE data:', e);
          }
        }
      }
    }
  } catch (err) {
    setError("Failed to get response from DeepSeek");
  } finally {
    setIsLoading(false);
  }
};