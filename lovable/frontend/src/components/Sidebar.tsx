
import { Pen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sidebar as SidebarContainer,
  SidebarContent,
  SidebarHeader,
} from "@/components/ui/sidebar";

export const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader className="p-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">Chat</h2>
          <p className="text-sm text-muted-foreground">
            Optimize prompts to include RABPOC.
          </p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-4 py-2">
          <Button variant="default" className="w-full justify-start gap-2">
            <Pen className="h-4 w-4" />
            New session
          </Button>
        </div>
        <div className="px-6 py-4">
          <div className="flex items-center gap-2 text-muted-foreground mb-3">
            <Clock className="h-4 w-4" />
            <span className="text-sm font-medium">History</span>
          </div>
          <nav className="space-y-2">
            <a href="#" className="block text-sm hover:text-primary transition-colors">
              提示词优化要素
            </a>
            <a href="#" className="block text-sm hover:text-primary transition-colors">
              免费AI工具推荐
            </a>
          </nav>
        </div>
      </SidebarContent>
    </SidebarContainer>
  );
};
