
import { SidebarProvider } from "@/components/ui/sidebar";
import { Sidebar } from "@/components/Sidebar";
import { PromptForm } from "@/components/PromptForm";

const Index = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar />
        <main className="flex-1 p-8 max-w-4xl mx-auto">
          <PromptForm />
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Index;
