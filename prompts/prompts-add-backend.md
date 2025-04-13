# prompt 1

在book-ai-programming-assistants/nodejs-backend目录下创建一个Node.js后端应用，允许book-ai-programming-assistants/ui-prototyping目录下的React前端应用调用该后端，并通过后端向DeepSeek官方API发送请求。调用DeepSeek API的Node.js示例代码见后文。同时，请修改前端代码实现以下功能：当用户点击"Optimize Prompt"按钮时，前端将App.tsx文件第41行的template变量内容通过Node.js后端发送给DeepSeek。发送前，清空UI右侧最下方"Optimized Prompt"下的所有内容。收到DeepSeek回复后，将回复内容显示在"Optimized Prompt"下方。如果DeepSeek长时间未响应，则在"Optimized Prompt"下方显示"DeepSeek没有响应"。下面是调用DeepSeek API的Node.js示例代码：
```jsx
// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com',
        apiKey: '<DeepSeek API Key>'
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();
```

# prompt 2

当后端运行起来后，我在另一个terminal里运行前端，并点击Optimize Prompt，结果发现运行后端的terminal里出现以下错误：
```shell
Error optimizing prompt: AuthenticationError: 401 Authentication Fails, Your api key: ****Key> is invalidat APIError.generate (file:///Users/binwu/OOR-local/katas/book-ai-programming-assistants/nodejs-backend/node_modules/openai/error.mjs:44:20)at OpenAI.makeStatusError (file:///Users/binwu/OOR-local/katas/book-ai-programming-assistants/nodejs-backend/node_modules/openai/core.mjs:295:25)at OpenAI.makeRequest (file:///Users/binwu/OOR-local/katas/book-ai-programming-assistants/nodejs-backend/node_modules/openai/core.mjs:339:30)at process.processTicksAndRejections (node:internal/process/task_queues:95:5)at async file:///Users/binwu/OOR-local/katas/book-ai-programming-assistants/nodejs-backend/server.js:31:24 {status: 401,headers: {'access-control-allow-credentials': 'true',connection: 'keep-alive','content-length': '153','content-type': 'application/json',date: 'Sat, 12 Apr 2025 16:06:34 GMT',server: 'elb','set-cookie': 'HWWAFSESID=fed3b2d70f7c01ed1a2; path=/, HWWAFSESTIME=1744473992231; path=/','strict-transport-security': 'max-age=31536000; includeSubDomains; preload',vary: 'origin, access-control-request-method, access-control-request-headers','x-content-type-options': 'nosniff','x-ds-trace-id': 'e9c356d1653db69bbe2ab1ceab1313c5'},request_id: undefined,error: {message: 'Authentication Fails, Your api key: ****Key> is invalid',type: 'authentication_error',param: null,code: 'invalid_request_error'},code: 'invalid_request_error',param: null,type: 'authentication_error'}
```
我的deepseek api key是“sk-bxxx”。请帮我加到代码里。
