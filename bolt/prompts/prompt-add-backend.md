# Task

请创建一个Node.js后端应用，允许目前的React前端应用调用该后端，并通过后端向DeepSeek官方API发送请求。调用DeepSeek API的Node.js示例代码见后文。同时，请修改前端代码实现以下功能：当用户点击"Optimize Prompt"按钮时，前端将App.tsx文件formattedPrompt变量所保存的内容通过Node.js后端发送给DeepSeek。发送前，清空UI右侧最下方"Optimized Prompt"下的所有内容。收到DeepSeek回复后，将回复内容显示在"Optimized Prompt"下方。如果DeepSeek长时间未响应，则在"Optimized Prompt"下方显示"DeepSeek没有响应"。我的deepseek api key是“sk-bxxx”。请帮我加到代码里。下面是调用DeepSeek API的Node.js示例代码：

```
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