import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals';
import request from 'supertest';
import { createApp } from '../createApp.js';

describe('API Endpoints', () => {
  let app;
  let server;
  let mockCreate;
  
  beforeEach(() => {
    mockCreate = jest.fn();
    const mockApiClient = {
      chat: {
        completions: {
          create: mockCreate
        }
      }
    };
    
    app = createApp(mockApiClient);
    server = app.listen(3001);
  });
  
  afterEach(done => {
    server.close(done);
  });

  test('POST /api/optimize should return optimized prompt', async () => {
    mockCreate.mockResolvedValueOnce({
      choices: [{
        message: {
          content: 'Optimized test prompt'
        }
      }]
    });
    
    const response = await request(app)
      .post('/api/optimize')
      .send({ prompt: 'Test prompt' });
    
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ result: 'Optimized test prompt' });
    
    expect(mockCreate).toHaveBeenCalledWith({
      messages: [
        { role: "system", content: "You are a helpful assistant specialized in prompt optimization." },
        { role: "user", content: "Test prompt" }
      ],
      model: "deepseek-chat",
      timeout: 30000
    });
  });

  test('POST /api/optimize should handle errors', async () => {
    mockCreate.mockRejectedValueOnce(new Error('API Error'));
    
    const response = await request(app)
      .post('/api/optimize')
      .send({});
    
    expect(response.statusCode).toBe(500);
    expect(response.body).toEqual({ error: 'Failed to get response from DeepSeek' });
  });
});