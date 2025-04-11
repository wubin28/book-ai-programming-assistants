import React, { useState } from 'react';
import { PenLine, History } from 'lucide-react';

interface PromptForm {
  role: string;
  audience: string;
  boundary: string;
  purpose: string;
  output: string;
  concern: string;
}

function App() {
  const [optimizedPrompt, setOptimizedPrompt] = useState<string>(
    'Your optimized prompt will be displayed here. Optimize your prompt now!'
  );
  const [form, setForm] = useState<PromptForm>({
    role: 'Prompt Optimization Expert',
    audience: 'AI tool beginners',
    boundary: 'Prompt optimization',
    purpose: 'find popular prompt optimization tools',
    output: 'tool name (official website link)',
    concern: "AI hallucinations (if not found, please be honest and don't make up information)",
  });

  const handleNewSession = () => {
    setForm({
      role: '',
      audience: '',
      boundary: '',
      purpose: '',
      output: '',
      concern: '',
    });
    setOptimizedPrompt('Your optimized prompt will be displayed here. Optimize your prompt now!');
  };

  const handleOptimize = () => {
    const optimizedText = `As a ${form.role}, help me ${form.purpose}. The target audience is ${form.audience}. Focus on ${form.boundary}. Please provide the output in this format: ${form.output}. Note: ${form.concern}`;
    setOptimizedPrompt(optimizedText);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Left Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Chat</h1>
          <p className="text-sm text-gray-600">Optimize prompts to include RABPOC.</p>
        </div>

        <button
          onClick={handleNewSession}
          className="mt-6 flex items-center space-x-2 font-semibold text-gray-700 hover:text-gray-900 transition-colors"
        >
          <PenLine className="w-4 h-4" />
          <span>New session</span>
        </button>

        <div className="mt-8">
          <h2 className="text-sm font-medium text-gray-500 mb-4">
            <History className="w-4 h-4 inline mr-2" />
            History
          </h2>
          <div className="space-y-2">
            {/* Example history items */}
            {/* <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">提示词优化示例</p> */}
            {/* <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">AI写作助手优化</p> */}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto p-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Promptyoo</h1>
            <p className="text-gray-600 mt-2">
              Want high-quality AI responses? I can help you optimize your prompts. Before asking AI
              a question, simply provide brief answers to these 6 sub-questions that help generate
              high-quality prompts. Then, I'll ask DeepSeek to generate an excellent prompt based on
              your answers. You can then copy this prompt to ask AI.
            </p>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <div className="space-y-6">
              {Object.entries(form).map(([key, value]) => (
                <div key={key}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    What {key.charAt(0).toUpperCase() + key.slice(1)}{' '}
                    {key === 'role'
                      ? 'you want AI to play?'
                      : key === 'audience'
                        ? 'you want AI to generate content for?'
                        : key === 'boundary'
                          ? 'should AI focus on for this discussion?'
                          : key === 'purpose'
                            ? 'you want AI to help you achieve?'
                            : key === 'output'
                              ? 'format you want AI to generate?'
                              : 'you have about this discussion with AI?'}
                  </label>
                  <input
                    type="text"
                    value={value}
                    onChange={(e) => setForm((prev) => ({ ...prev, [key]: e.target.value }))}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder={`Enter ${key}...`}
                  />
                </div>
              ))}

              <button
                onClick={handleOptimize}
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                Optimize Prompt
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h2 className="text-lg font-semibold mb-4">Optimized Prompt</h2>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700 whitespace-pre-wrap">{optimizedPrompt}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
