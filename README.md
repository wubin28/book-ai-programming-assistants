# 《AI编程助手》配套代码

## 使用bolt-cursor-augmentcode创建Promptyoo提示词优化原型

1. 从现有提示词优化工具界面（promptperfect-optimizer、chatgpt-prompt-optimizer）中提取可用的用户界面元素
2. 将提取的界面元素组合成Promptyoo原型界面（PPT）
3. 使用AI（deepseek）生成界面的自然语言描述
    1. [prompt-stitch-ui-prototype.md](prompts/prompt-stitch-ui-prototype.md)
    2. 93873ed - 2025-04-11 11:42:45 feat: Used deepseek to generate UI interface description based on stitched UI prototype diagram, so as to generate web UI with bolt.new in the future
4. 将自然语言描述调整为符合Promptyoo原型界面需求
5. 基于修改后的描述，使用AI（bolt.new）生成Promptyoo前端代码
    1. [prompt-generate-web-ui-by-bolt-new.md](prompts/prompt-generate-web-ui-by-bolt-new.md)
    2. 11a8aac - 2025-04-11 11:48:45 feat: generated the Promptyoo web UI using bolt.new
    3. c9f339a - 2025-04-11 20:53:20 fix: commented out 2 example history items - Bin Wu
    4. 1efd9ba - 2025-04-11 22:05:26 refactor: improved the description of Promptyoo - Bin Wu
    5. 10e7cb4 - 2025-04-11 23:10:31 chore: ran the following commands to prettier the code in App.tsx: 1) 'npm install --save-dev prettier'; 2) ' npx prettier --write "src/**/*.{ts,tsx}"' - Bin Wu
6. 使用AI（Cursor）构建并存储用于提示词优化的提示词
    1. [prompt-build-prompt-for-optimization.md](prompts/prompt-build-prompt-for-optimization.md)
    2. 498b903 - 2025-04-11 23:24:20 feat: generated the prompt for deepseek according to the default answers of the 6 questions - Bin Wu
7. 使用AI（Augment Code）开发前端可调用的后端接口代码，用于将提示词通过后端传递给DeepSeek官方API进行优化
    1. [prompt-add-RABPOC.md](prompts/prompt-add-RABPOC.md)
    2. ec4a782 - 2025-04-12 23:02:56 feat: added RABPOC in front of the titles of the six input boxes - Bin Wu
    3. [prompt-add-dot-gitignore.md](prompts/prompt-add-dot-gitignore.md)
    4. f31a6d4 - 2025-04-13 00:24:00 chore: added .gitignore file to exclude unnecessary files - Bin Wu
    5. de0c11a - 2025-04-13 00:29:49 feat: added backend for DeepSeek API integration and update frontend - Bin Wu
    6. f819fc8 - 2025-04-13 00:44:38 docs: added prompts when using augment code - Bin Wu (HEAD -> main, origin/main)
    7. bf9dc53 - 2025-04-13 10:15:47 docs: added [README.md](README.md) and updated corresponding prompt docs - Bin Wu

