import { FileText, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      title: "View Blog",
      icon: BookOpen,
      url: "/admin/dashboard",
    },
    {
      title: "View Propriétés",
      icon: FileText,
      url: "/admin/articles",
    },
    {
      title: "View Evaluations Form",
      icon: FileText,
      url: "/admin/evaluation-form",
    },
    {
      title: "View Alerte Immobilière",
      icon: FileText,
      url: "/admin/alert-form",
    },
    {
      title: "View Contact Mails",
      icon: FileText,
      url: "/admin/contact-mails",
    },


  ];

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Dashboard</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
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
    </Sidebar>
  );
}