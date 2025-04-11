# Prompt
请以2025年最热门的web开发前端框架和相关技术栈的最佳实践，按照下面的描述生成一个AI提示词优化的web app的UI界面：
### 整体布局分析

该界面采用经典的左右分栏布局，左侧为导航栏，右侧为提示词优化区。整体设计简洁，功能分区明确，适合专注于提示词优化的核心功能。

---

### 左侧导航栏
1. **标题**  
   - **文字**："Chat"  
   - **样式**：顶部加粗标题，为当前功能模块的名称。
   - **子标题**：  
     - "Optimize prompts to include RABPOC."（描述性副标题，说明功能用途）  

2. **New Session按钮**  
   - **文字**："New session"  
   - **样式**：加粗，且左侧有一个编辑图标（一支笔在一页纸上书写）
   - **功能**：  
     - 点击该链接后，右侧提示词优化区各个输入框内容清空

3. **历史记录**  
   - **文字**："History"  
   - **样式**：灰色字体 
   - **功能**：  
     - 按时间从新到旧，在History下方列出以往提示词优化对话的中文标题

4. **视觉分隔**  
   - 使用空行分隔不同功能区块，增强可读性。  

---

### 右侧提示词优化区
1. **标题**  
   - **文字**："Promptyoo"（本提示词优化web app的名称）
   - **样式**：加粗
   - **副标题**：  
     - "I can generate and optimize prompts to include 6 elements 'RABPOC'"（强调工具的强大功能）  

2. **提示词优化输入表单区域**  
   - 采用表格布局（视觉上类似表单，每个输入框和整个表单区域最外层都用灰色细实线画出边界），包含以下单行输入框字段：  
     - **Role**（角色）  
       - 标签："What role you want AI to play?"  
       - 输入框示例："Prompt Optimization Expert"（用户可自定义角色）。  
     - **Audience**（受众）  
       - 标签："What target audience you want AI to generate content for?"  
       - 输入框示例："AI tool beginners"（用户可自定义受众）。  
     - **Boundary**（边界）  
       - 标签："What knowledge boundaries should AI focus on for this discussion?"  
       - 输入框示例："Prompt optimization"（用户可自定义知识边界）。  
     - **Purpose**（目的）  
       - 标签："What purpose you want AI to help you achieve?"  
       - 输入框示例："find popular prompt optimization tools"（用户可自定义目的）。  
     - **Output**（输出）  
       - 标签："What output format you want AI to generate?"  
       - 输入框示例："tool name (official website link)"（用户可自定义输出格式）。  
     - **Concern**（担心）  
       - 标签："What concerns you have about this discussion with AI?"  
       - 输入框示例："AI hallucinations (if not found, please be honest and don't make up information)"（用户可自定义担心）。  
   - **Optimize Prompt**（提示优化按钮）  

3. **Output**（提示词优化输出区域）  
     - 输出区域初始化提示："Your optimized prompt will be displayed here. Optimize your prompt now!"（一旦点击Optimize Prompt按钮，输出区域内容将替换为优化后的提示词）。  

---

### 设计建议（供Bolt.new参考）
1. **布局优化**  
   - 保持左右分栏结构，左侧导航宽度可固定（如200px），右侧内容区自适应。  
2. **输入表单**  
   - 使用卡片式设计，为每个输入字段（Role/Audience/Boundary/Purpose/Output/Concern）增加边框和标签高亮。  
3. **按钮与交互**  
   - 将"Optimize Prompt"设计为醒目按钮（如深色填充+悬停效果）。  
   - 将"New session"设计为白底无边框按钮（只是New session字体加粗即可）。  
4. **图标**  
   - New session按钮左侧有一个编辑图标（一支笔在一页纸上书写）
5. **状态提示**  
   - 在优化过程中显示加载动画，避免用户误操作。  

# bolt.new 的UI设计
project-bolt-sb1-59ezvdhh.zip

I'll help you create a modern, professional UI for the prompt optimization web app using React and Tailwind CSS. I'll implement the layout and functionality you described using best practices from 2025.

**Create Prompt Optimization Web App UI**

- Create initial files
- Install dependencies
    
    `npm install`
    
- Update`src/App.tsx`
- Start application
    
    `npm run dev`
    

I've created a modern and professional UI for the prompt optimization web app with the following features:

1. **Left Sidebar**
    - Clean navigation with "Chat" title and description
    - New session button with PenLine icon
    - History section with example items
2. **Main Content**
    - Promptyoo title with description
    - Form section with 6 RABPOC elements (Role, Audience, Boundary, Purpose, Output, Concern)
    - Each input field has a clear label and placeholder
    - Optimize Prompt button with modern styling
    - Output section showing the optimized prompt
3. **Styling**
    - Modern color scheme with clean whites and grays
    - Consistent spacing and typography
    - Responsive layout
    - Hover effects and transitions
    - Clear visual hierarchy
4. **Functionality**
    - New session button clears all inputs
    - Optimize button generates a formatted prompt
    - Form state management using React hooks
    - Clean component structure

The app is now running and ready to use. You can interact with the form, create new sessions, and generate optimized prompts.