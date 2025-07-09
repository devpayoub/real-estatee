
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboard, FileText, Building2 } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const items = [
  {
    title: "Tableau de Bord",
    url: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Articles Blog",
    url: "/admin/dashboard",
    icon: FileText,
  },
  {
    title: "Propriétés",
    url: "/admin/properties",
    icon: Building2,
  },
]

export function AppSidebar() {
  const location = useLocation()

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Administration</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <Link to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4 text-sm text-gray-500">
          Admin Panel v1.0
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
