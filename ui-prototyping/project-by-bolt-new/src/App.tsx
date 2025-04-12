import React, { useState } from 'react';
import { PenLine, History, Loader2 } from 'lucide-react';

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
  const [promptTemplate, setPromptTemplate] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState<PromptForm>({
    role: 'Prompt Optimization Expert',
    audience: 'AI tool beginners',
    boundary: 'Prompt optimization',
    purpose: 'find popular prompt optimization tools',
    output: 'tool name (official website link)',
    concern: "AI hallucinations (if not found, please be honest and don't make up information)",
  });

  // Backend API URL
  const API_URL = 'http://localhost:3001/api/optimize-prompt';

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
    setPromptTemplate('');
    setError(null);
  };

  const handleOptimize = async () => {
    // Create the template
    const template = `As a prompt engineering expert, please generate an English prompt based on the answers to the 6 questions below, targeting AI beginners. The prompt must incorporate the content from all 6 answers to help formulate high-quality questions for AI. Please provide only the prompt itself, without any additional content.

**R: What Role you want AI to play? ${form.role}.**

**A: What Audience you want AI to generate content for? ${form.audience}.**

**B: What Boundary should AI focus on for this discussion? ${form.boundary}.**

**P: What Purpose you want AI to help you achieve? ${form.purpose}.**

**O: What Output format you want AI to generate? ${form.output}.**

**C: What Concern you have about this discussion with AI? ${form.concern}.**`;

    setPromptTemplate(template);

    // Clear the optimized prompt and set loading state
    setOptimizedPrompt('Loading...');
    setIsLoading(true);
    setError(null);

    try {
      // Set up a timeout for the API request
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('DeepSeek没有响应')), 30000); // 30 seconds timeout
      });

      // Make the API request
      console.log('Sending request to:', API_URL);
      const requestBody = { template };
      console.log('Request body:', requestBody);

      const fetchPromise = fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      // Race between the fetch and the timeout
      const response = await Promise.race([fetchPromise, timeoutPromise]) as Response;

      if (!response.ok) {
        const errorText = await response.text();
        console.error('API error response:', response.status, response.statusText, errorText);
        throw new Error(`Error: ${response.status} ${response.statusText}\n${errorText}`);
      }

      const data = await response.json();
      console.log('API success response:', data);
      setOptimizedPrompt(data.optimizedPrompt);
    } catch (err) {
      console.error('Error optimizing prompt:', err);
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      setOptimizedPrompt('Error: ' + (err instanceof Error ? err.message : 'An unknown error occurred'));
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
                    {key === 'role'
                      ? 'R: What Role you want AI to play?'
                      : key === 'audience'
                        ? 'A: What Audience you want AI to generate content for?'
                        : key === 'boundary'
                          ? 'B: What Boundary should AI focus on for this discussion?'
                          : key === 'purpose'
                            ? 'P: What Purpose you want AI to help you achieve?'
                            : key === 'output'
                              ? 'O: What Output format you want AI to generate?'
                              : 'C: What Concern you have about this discussion with AI?'}
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
                className={`w-full py-3 px-6 rounded-md font-medium transition-colors flex items-center justify-center ${isLoading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Optimizing...
                  </>
                ) : (
                  'Optimize Prompt'
                )}
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">Optimized Prompt</h2>
              {isLoading && (
                <div className="flex items-center text-blue-600">
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  <span>Processing...</span>
                </div>
              )}
            </div>
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 border border-red-200">
                {error}
              </div>
            )}
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
