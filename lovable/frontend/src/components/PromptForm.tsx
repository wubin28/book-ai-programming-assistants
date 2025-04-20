
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";

export const PromptForm = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">Promptyoo</h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Want high-quality AI responses? I can help you optimize your prompts. Before asking AI a question, 
          simply provide brief answers to these 6 sub-questions that help generate high-quality prompts. 
          Then, I'll ask DeepSeek to generate an excellent prompt based on your answers. You can then copy 
          this prompt to ask AI.
        </p>
      </div>

      <form className="space-y-6">
        <div className="space-y-4">
          <div className="grid gap-3">
            <Label htmlFor="role">R: What role you want AI to play?</Label>
            <Input id="role" placeholder="e.g., Prompt Optimization Expert" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="audience">A: What Audience you want AI to generate content for?</Label>
            <Input id="audience" placeholder="e.g., AI tool beginners" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="boundary">B: What Boundary should AI focus on for this discussion?</Label>
            <Input id="boundary" placeholder="e.g., Prompt optimization" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="purpose">P: What Purpose you want AI to help you achieve?</Label>
            <Input id="purpose" placeholder="e.g., find popular prompt optimization tools" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="output">O: What Output format you want AI to generate?</Label>
            <Input id="output" placeholder="e.g., tool name (official website link)" />
          </div>

          <div className="grid gap-3">
            <Label htmlFor="concern">C: What Concern you have about this discussion with AI?</Label>
            <Input 
              id="concern" 
              placeholder="e.g., AI hallucinations (if not found, please be honest and don't make up information)" 
            />
          </div>
        </div>

        <Button type="submit" className="w-full">Optimize Prompt</Button>

        <Card className="p-4 bg-muted">
          <Label>Optimized Prompt</Label>
          <p className="text-sm text-muted-foreground mt-2">
            Your optimized prompt will be displayed here. Optimize your prompt now!
          </p>
        </Card>
      </form>
    </div>
  );
};
