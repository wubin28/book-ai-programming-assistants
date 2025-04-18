import { useState } from "react";
import { PenLine, Clock } from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    role: "Prompt Optimization Expert",
    audience: "AI tool beginners",
    boundary: "Prompt optimization",
    purpose: "find popular prompt optimization tools",
    output: "tool name (official website link)",
    concern:
      "AI hallucinations (if not found, please be honest and don't make up information)",
  });

  const [optimizedPrompt, setOptimizedPrompt] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleOptimize = async () => {
    const promptTemplate = `As a prompt engineering expert, please generate an English prompt based on the answers to the 6 questions below, targeting AI beginners. The prompt must incorporate the content from all 6 answers to help formulate high-quality questions for AI. Please provide only the prompt itself, without any additional content.

**What Role you want AI to play? ${formData.role}.**

**What Audience you want AI to generate content for? ${formData.audience}.** 

**What Boundary should AI focus on for this discussion? ${formData.boundary}.**

**What Purpose you want AI to help you achieve? ${formData.purpose}.** 

**What Output format you want AI to generate? ${formData.output}.**

**What Concern you have about this discussion with AI? ${formData.concern}.**`;

    setOptimizedPrompt("");
    setError("");
    setIsLoading(true);

    try {
      const timeoutId = setTimeout(() => {
        setError("DeepSeek没有响应");
        setIsLoading(false);
      }, 30000);

      const response = await fetch("http://localhost:3000/api/optimize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: promptTemplate }),
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error("Failed to optimize prompt");
      }

      const data = await response.json();
      setOptimizedPrompt(data.result);
    } catch (err) {
      setError("Failed to get response from DeepSeek");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">Chat</h1>
          <p className="text-sm text-gray-600">
            Optimize prompts to include RABPOC.
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 bg-black text-white py-2 px-4 rounded-lg mb-8 hover:bg-gray-800 transition-colors">
          <PenLine size={18} />
          <span>New session</span>
        </button>

        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} />
            <span>History</span>
          </div>

          {/* <nav className="space-y-2">
            <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              提示词优化要素
              <ChevronRight size={16} />
            </a>
            <a href="#" className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-100 text-gray-700">
              免费AI工具推荐
              <ChevronRight size={16} />
            </a>
            </nav> */}
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Promptyoo</h1>
          <p className="text-gray-600 leading-relaxed">
            Want high-quality AI responses? I can help you optimize your
            prompts. Before asking AI a question, simply provide brief answers
            to these 6 sub-questions that help generate high-quality prompts.
            Then, I'll ask DeepSeek to generate an excellent prompt based on
            your answers. You can then copy this prompt to ask AI.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              R: What role you want AI to play?
            </label>
            <input
              type="text"
              placeholder="e.g., Prompt Optimization Expert"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.role}
              onChange={(e) =>
                setFormData({ ...formData, role: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              A: What Audience you want AI to generate content for?
            </label>
            <input
              type="text"
              placeholder="e.g., AI tool beginners"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.audience}
              onChange={(e) =>
                setFormData({ ...formData, audience: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              B: What Boundary should AI focus on for this discussion?
            </label>
            <input
              type="text"
              placeholder="e.g., Prompt optimization"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.boundary}
              onChange={(e) =>
                setFormData({ ...formData, boundary: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              P: What Purpose you want AI to help you achieve?
            </label>
            <input
              type="text"
              placeholder="e.g., find popular prompt optimization tools"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              O: What Output format you want AI to generate?
            </label>
            <input
              type="text"
              placeholder="e.g., tool name (official website link)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.output}
              onChange={(e) =>
                setFormData({ ...formData, output: e.target.value })
              }
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              C: What Concern you have about this discussion with AI?
            </label>
            <input
              type="text"
              placeholder="e.g., AI hallucinations (if not found, please be honest and don't make up information)"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={formData.concern}
              onChange={(e) =>
                setFormData({ ...formData, concern: e.target.value })
              }
            />
          </div>

          {/* Add preview section */}
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-medium mb-2">Preview Template</h3>
            <p className="text-gray-500 italic whitespace-pre-wrap">
              {`As a prompt engineering expert, please generate an English prompt based on the answers to the 6 questions below, targeting AI beginners. The prompt must incorporate the content from all 6 answers to help formulate high-quality questions for AI. Please provide only the prompt itself, without any additional content.

**What Role you want AI to play? ${formData.role}.**

**What Audience you want AI to generate content for? ${formData.audience}.** 

**What Boundary should AI focus on for this discussion? ${formData.boundary}.**

**What Purpose you want AI to help you achieve? ${formData.purpose}.** 

**What Output format you want AI to generate? ${formData.output}.**

**What Concern you have about this discussion with AI? ${formData.concern}.**`}
            </p>
          </div>

          <button
            onClick={handleOptimize}
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:bg-blue-400"
            disabled={isLoading}
          >
            {isLoading ? "Optimizing..." : "Optimize Prompt"}
          </button>

          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="font-medium mb-2">Optimized Prompt</h3>
            {error ? (
              <p className="text-red-600">{error}</p>
            ) : (
              <p className="text-gray-600 whitespace-pre-wrap">
                {optimizedPrompt || "Your optimized prompt will appear here"}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
