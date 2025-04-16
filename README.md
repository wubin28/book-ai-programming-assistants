# 《AI编程助手》配套代码

## 使用bolt-cursor-augmentcode创建Promptyoo提示词优化原型

1. 从现有提示词优化工具界面（promptperfect-optimizer、chatgpt-prompt-optimizer）中提取可用的用户界面元素
2. 将提取的界面元素组合成Promptyoo原型界面（PPT）
3. 使用deepseek生成界面的自然语言描述
    1. [prompt-stitch-ui-prototype.md](bolt-cursor-augmentcode/prompts/prompt-stitch-ui-prototype.md)
    2. 93873ed - 2025-04-11 11:42:45 feat: Used deepseek to generate UI interface description based on stitched UI prototype diagram, so as to generate web UI with bolt.new in the future
4. 将自然语言描述调整为符合Promptyoo原型界面需求
5. 基于修改后的描述，使用bolt.new生成Promptyoo前端代码
    1. [prompt-generate-web-ui-by-bolt-new.md](bolt-cursor-augmentcode/prompts/prompt-generate-web-ui-by-bolt-new.md)
    2. 11a8aac - 2025-04-11 11:48:45 feat: generated the Promptyoo web UI using bolt.new
    3. c9f339a - 2025-04-11 20:53:20 fix: commented out 2 example history items - Bin Wu
    4. 1efd9ba - 2025-04-11 22:05:26 refactor: improved the description of Promptyoo - Bin Wu
    5. 10e7cb4 - 2025-04-11 23:10:31 chore: ran the following commands to prettier the code in App.tsx: 1) 'npm install --save-dev prettier'; 2) ' npx prettier --write "src/**/*.{ts,tsx}"' - Bin Wu
6. 使用Cursor构建并存储用于提示词优化的提示词
    1. [prompt-build-prompt-for-optimization.md](bolt-cursor-augmentcode/prompts/prompt-build-prompt-for-optimization.md)
    2. 498b903 - 2025-04-11 23:24:20 feat: generated the prompt for deepseek according to the default answers of the 6 questions - Bin Wu
7. 使用Augment Code开发前端可调用的后端接口代码，用于将提示词通过后端传递给DeepSeek官方API进行优化
    1. [prompt-add-RABPOC.md](bolt-cursor-augmentcode/prompts/prompt-add-RABPOC.md)
    2. ec4a782 - 2025-04-12 23:02:56 feat: added RABPOC in front of the titles of the six input boxes - Bin Wu
    3. [prompt-add-dot-gitignore.md](bolt-cursor-augmentcode/prompts/prompt-add-dot-gitignore.md)
    4. f31a6d4 - 2025-04-13 00:24:00 chore: added .gitignore file to exclude unnecessary files - Bin Wu
    5. [prompts-add-backend.md](bolt-cursor-augmentcode/prompts/prompts-add-backend.md)
    6. de0c11a - 2025-04-13 00:29:49 feat: added backend for DeepSeek API integration and update frontend - Bin Wu
    7. f819fc8 - 2025-04-13 00:44:38 docs: added prompts when using augment code - Bin Wu (HEAD -> main, origin/main)
    8. bf9dc53 - 2025-04-13 10:15:47 docs: added [README.md](README.md) and updated corresponding prompt docs - Bin Wu
8. 运行原型
    1. 克隆代码到本地并进入代码根目录
    ```
    git clone https://github.com/wubin28/book-ai-programming-assistants.git
    cd book-ai-programming-assistants/bolt-cursor-augmentcode
    ```
    2. 进入后端目录backend，创建文件`.env`并提供DeepSeek官方API
    ```
    DEEPSEEK_API_KEY=sk-bxxx
    PORT=3001
    ```
    3. 在一个终端启动后端
    ```shell
    cd backend
    npm install
    npm run dev
    ```
    4. 在另一个终端启动前端
    ```shell
    cd frontend
    npm install
    npm run dev
    ```
    5. 用浏览器访问前端所给出的local网页地址`http://localhost:5173/`

## 使用bolt创建Promptyoo提示词优化原型

1. 从提交10e7cb4复制bolt.new所生成的前端代码
2. 使用bolt.new构建并存储用于提示词优化的提示词
    1. [prompt-build-prompt-for-optimization.md](bolt-cursor-augmentcode/prompts/prompt-build-prompt-for-optimization.md)
    2. dbf8169 - 2025-04-13 15:09:50 feat: generated the prompt for deepseek according to the default answers of the 6 questions - Bin Wu
3. 使用bolt.new开发前端可调用的后端接口代码，用于将提示词通过后端传递给DeepSeek官方API进行优化
    1. [prompt-discuss-deepseek-api-integration-in-English.md](bolt/prompts/prompt-discuss-deepseek-api-integration-in-English.md)
    2. [prompt-discuss-deepseek-api-integration-in-Chinese.md](bolt/prompts/prompt-discuss-deepseek-api-integration-in-Chinese.md)
    3. [prompt-discuss-api-key-security-in-bolt.md](bolt/prompts/prompt-discuss-api-key-security-in-bolt.md)
    4. [prompt-add-backend.md](bolt/prompts/prompt-add-backend.md)
    5. 1afd331 - 2025-04-13 17:56:27 feat: bolt: added backend for DeepSeek API integration and update frontend - Bin Wu
8. 运行原型
    1. 克隆代码到本地并进入代码根目录
    ```
    git clone https://github.com/wubin28/book-ai-programming-assistants.git
    cd book-ai-programming-assistants/bolt
    ```
    2. 进入后端目录frontend/server，创建文件`.env`并提供DeepSeek官方API
    ```
    DEEPSEEK_API_KEY=sk-bxxx
    ```
    3. 在一个终端启动后端
    ```shell
    cd frontend/server
    npm install express cors openai dotenv
    node index.js
    ```
    4. 在另一个终端启动前端
    ```shell
    cd frontend
    npm install
    npm run dev
    ```
    5. 用浏览器访问前端所给出的local网页地址`http://localhost:5173/`
    6. [prompt-discuss-node-vs-npm-run-dev.md](bolt/prompts/prompt-discuss-node-vs-npm-run-dev.md)]

## 使用github copilot和bolt创建Promptyoo提示词优化原型

1. 从现有提示词优化工具界面（promptperfect-optimizer、chatgpt-prompt-optimizer）中提取可用的用户界面元素
2. 将提取的界面元素组合成Promptyoo原型界面（PPT）
3. 使用github copilot生成界面的自然语言描述
    1. [prompt-stitch-ui-prototype.md](github-copilot/prompts/prompt-stitch-ui-prototype.md)
    2. 267b6bc - 2025-04-15 22:19:23 feat: github copilot: used github copilot to generate UI interface description based on stitched UI prototype diagram, so as to generate web UI with github copilot in the future - Bin Wu
4. 将自然语言描述调整为符合Promptyoo原型界面需求
    1. 80a28cd - 2025-04-16 16:40:01 feat: Adapted natural language descriptions to meet Promptyoo prototype interface requirements - Bin Wu
5. 基于修改后的描述，使用bolt.new生成Promptyoo前端代码
    1. 最初尝试使用github copilot利用自然语言描述生成前端代码，但运行时发现界面不是左右分屏，而是上下分屏，且时钟图标过大。请它修复了3次，问题照旧，故改为用bolt.new来生成前端代码
    2. aef40e1 - 2025-04-16 17:13:01 feat: github-copilot-bolt: generated the Promptyoo web UI using bolt.new - Bin Wu
6. 使用github copilot构建并存储用于提示词优化的提示词
7. 使用github copilot开发前端可调用的后端接口代码，用于将提示词通过后端传递给DeepSeek官方API进行优化
8. 运行原型