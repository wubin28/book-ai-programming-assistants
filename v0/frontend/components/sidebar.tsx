"use client"

import { Clock, PenLine } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sidebar as SidebarComponent,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function Sidebar() {
  return (
    <SidebarComponent className="border-r">
      <SidebarHeader className="p-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold">Chat</h2>
          <p className="text-sm text-muted-foreground">Optimize prompts to include RABPOC.</p>
        </div>
        <Button className="mt-4 w-full bg-black text-white hover:bg-black/90">
          <PenLine className="mr-2 h-4 w-4" />
          New session
        </Button>
      </SidebarHeader>
      <SidebarContent>
        <div className="px-4 py-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            History
          </div>
          <SidebarMenu className="mt-2">
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>提示词优化要素</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton>
                <span>免费AI工具推荐</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </div>
      </SidebarContent>
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">© 2025 Promptyoo</div>
      </SidebarFooter>
    </SidebarComponent>
  )
}
