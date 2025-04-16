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
  const [isLoading, setIsLoading] = useState(false);
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

  const handleOptimize = async () => {
    const formattedPrompt = `As a prompt engineering expert, please generate an English prompt based on the answers to the 6 questions below, targeting AI beginners. The prompt must incorporate the content from all 6 answers to help formulate high-quality questions for AI. Please provide only the prompt itself, without any additional content.

What Role you want AI to play? ${form.role}.

What Audience you want AI to generate content for? ${form.audience}.

What Boundary should AI focus on for this discussion? ${form.boundary}.

What Purpose you want AI to help you achieve? ${form.purpose}.

What Output format you want AI to generate? ${form.output}.

What Concern you have about this discussion with AI? ${form.concern}.`;

    setOptimizedPrompt('Waiting for DeepSeek response...');
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/optimize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: formattedPrompt }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      setOptimizedPrompt(data.response);
    } catch (error) {
      setOptimizedPrompt('DeepSeek没有响应');
    } finally {
      setIsLoading(false);
    }
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
            <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">
              提示词优化示例
            </p>
            <p className="text-sm text-gray-600 cursor-pointer hover:text-gray-900">
              AI写作助手优化
            </p>
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
                disabled={isLoading}
                className={`w-full ${
                  isLoading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
                } text-white py-3 px-6 rounded-md font-medium transition-colors`}
              >
                {isLoading ? 'Optimizing...' : 'Optimize Prompt'}
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
