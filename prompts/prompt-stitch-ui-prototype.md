# Prompt
作为web UI设计专家，请帮我分析我上传的截图，以便我能用你的描述让bolt.new设计web界面。这是一个提示词优化系统的界面。请先描述整体布局（如左侧导航栏和右侧主要内容区），然后详细说明每个区域内的文字、按钮和输入框等具体元素。

# deepseek
### 整体布局分析

该界面采用经典的左右分栏布局，左侧为导航栏，右侧为主要内容区。整体设计简洁，功能分区明确，适合专注于提示词优化的核心功能。

---

### 左侧导航栏
1. **标题**  
   - **文字**："Chat"  
   - **样式**：顶部加粗标题，可能为当前功能模块的名称。  
   - **子标题**：  
     - "Optimize prompts, create content, repeat."（描述性副标题，说明功能用途）  

2. **功能菜单**  
   - **历史记录**（How session - History）  
     - 可能用于查看或管理过去的提示词优化记录。  
   - **提示词优先重复**  
     - 可能是核心功能入口，强调重复优化的重要性。  
   - **关系/工具推荐**  
     - 可能提供相关工具或提示词关系的推荐功能。  

3. **视觉分隔**  
   - 使用水平线（`---`）分隔不同功能区块，增强可读性。  

---

### 右侧主要内容区
1. **标题**  
   - **文字**："ChatGPT Prompt Optimizer"  
   - **副标题**：  
     - "Unleash the full potential of your ChatGPT Prompts..."（强调工具的强大功能）  

2. **输入表单区域**  
   - 采用表格布局（视觉上类似表单），包含以下字段：  
     - **Role**（角色）  
       - 标签："What role you want ChatGPT to play?"  
       - 输入框示例："Recital Scientist"（用户可自定义角色）。  
     - **Task**（任务）  
       - 标签："What task do you want to achieve with this prompt?"  
       - 输入框示例："Build spaceships that can travel faster than light!"（用户可输入具体任务）。  
     - **Current Prompt**（当前提示词）  
       - 标签："Provide us the prompt you are using currently..."  
       - 输入框示例："How to build faster than light travel?"（用户粘贴待优化的提示词）。  

3. **操作按钮区域**  
   - **提示优化选项**（Options Prompt）  
     - 文字说明："Prompt optimizations can take up a minute. Please don’t reload the page."（提示用户等待优化完成）。  
   - **输出区域**（Output）  
     - 标题："Your optimized prompt will be displayed here."  
     - 行动号召："Optimize your prompt now!"（可能是按钮或可点击文本，触发优化操作）。  

---

### 设计建议（供Bolt.new参考）
1. **布局优化**  
   - 保持左右分栏结构，左侧导航宽度可固定（如200px），右侧内容区自适应。  
2. **输入表单**  
   - 使用卡片式设计，为每个输入字段（Role/Task/Prompt）增加边框和标签高亮。  
3. **按钮与交互**  
   - 将"Optimize your prompt now!"设计为醒目按钮（如深色填充+悬停效果）。  
4. **状态提示**  
   - 在优化过程中显示加载动画，避免用户误操作。  

如果需要进一步细化某些组件（如颜色、图标），可补充具体需求！