"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"

export function PromptOptimizer() {
  const [role, setRole] = useState("")
  const [audience, setAudience] = useState("")
  const [boundary, setBoundary] = useState("")
  const [purpose, setPurpose] = useState("")
  const [output, setOutput] = useState("")
  const [concern, setConcern] = useState("")
  const [optimizedPrompt, setOptimizedPrompt] = useState("")

  const handleOptimize = () => {
    // In a real app, this would call an API to generate the optimized prompt
    const prompt = `As a ${role || "Prompt Optimization Expert"}, create content for ${
      audience || "AI tool beginners"
    } focusing on ${boundary || "prompt optimization"} to help them ${
      purpose || "find popular prompt optimization tools"
    }. Format the response as ${output || "tool name (official website link)"}. Note: ${
      concern || "AI hallucinations (if not found, please be honest and don't make up information)"
    }.`

    setOptimizedPrompt(prompt)
  }

  return (
    <div className="container mx-auto max-w-4xl py-8 px-4">
      <div className="space-y-2 mb-8">
        <h1 className="text-3xl font-bold">Promptyoo</h1>
        <p className="text-muted-foreground">
          Want high-quality AI responses? I can help you optimize your prompts. Before asking AI a question, simply
          provide brief answers to these 6 sub-questions that help generate high-quality prompts. Then, I'll ask
          DeepSeek to generate an excellent prompt based on your answers. You can then copy this prompt to ask AI.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-4">
          <div className="space-y-2">
            <Label htmlFor="role">R: What role you want AI to play?</Label>
            <Input
              id="role"
              placeholder="Prompt Optimization Expert"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="audience">A: What Audience you want AI to generate content for?</Label>
            <Input
              id="audience"
              placeholder="AI tool beginners"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="boundary">B: What Boundary should AI focus on for this discussion?</Label>
            <Input
              id="boundary"
              placeholder="Prompt optimization"
              value={boundary}
              onChange={(e) => setBoundary(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="purpose">P: What Purpose you want AI to help you achieve?</Label>
            <Input
              id="purpose"
              placeholder="find popular prompt optimization tools"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="output">O: What Output format you want AI to generate?</Label>
            <Input
              id="output"
              placeholder="tool name (official website link)"
              value={output}
              onChange={(e) => setOutput(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="concern">C: What Concern you have about this discussion with AI?</Label>
            <Input
              id="concern"
              placeholder="AI hallucinations (if not found, please be honest and don't make up information)"
              value={concern}
              onChange={(e) => setConcern(e.target.value)}
            />
          </div>
        </div>

        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleOptimize}>
          Optimize Prompt
        </Button>

        <Card className="mt-6 bg-gray-50">
          <CardContent className="p-4">
            <div className="space-y-2">
              <h3 className="font-medium">Optimized Prompt</h3>
              <div className="rounded-md bg-white p-3 border">
                {optimizedPrompt || "Your optimized prompt will be displayed here. Optimize your prompt now!"}
              </div>
              {optimizedPrompt && (
                <Button
                  variant="outline"
                  className="mt-2"
                  onClick={() => {
                    navigator.clipboard.writeText(optimizedPrompt)
                  }}
                >
                  Copy to Clipboard
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
