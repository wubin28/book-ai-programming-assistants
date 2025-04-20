@workspace /explain 请阅读frontend和backend文件夹下的代码 #codebase ，然后告我该如何实现流式输出，即当我点击Optimize Prompt后，Optimized Prompt下方的经过deepseek优化后的提示词，不是等到最后才一下给出的，而是一点一点给出的。为了实现这一点，我要修改backend和frontend的哪些代码？如何修改？

@workspace /fix 我照做，但在点击Optimize Prompt按钮后，看到“Failed to get response from DeepSeek”。请告我该如何看更详细的出错信息。

@workspace /fix 照做，现在好些了，能在web UI看到“Failed to get response from DeepSeek: Unexpected token 'd', "data: {"co"... is not valid JSON”，比刚才详细了一些。请修改代码，让这些详细的出错信息，能输出到运行backend和frontend的终端里，以便我能更完整地看出错信息。