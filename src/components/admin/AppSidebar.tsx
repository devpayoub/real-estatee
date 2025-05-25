
import { FileText, BookOpen, Edit, Plus, Trash2 } from "lucide-react";
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
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      title: "View Blog",
      icon: BookOpen,
      url: "/admin/dashboard",
      subItems: [
        { title: "Add Post", icon: Plus, url: "/admin/dashboard?action=add" },
        { title: "Edit Posts", icon: Edit, url: "/admin/dashboard?action=edit" },
        { title: "Delete Posts", icon: Trash2, url: "/admin/dashboard?action=delete" },
      ],
    },
    {
      title: "View Article",
      icon: FileText,
      url: "/admin/articles",
      subItems: [
        { title: "Add Article", icon: Plus, url: "/admin/articles?action=add" },
        { title: "Edit Articles", icon: Edit, url: "/admin/articles?action=edit" },
        { title: "Delete Articles", icon: Trash2, url: "/admin/articles?action=delete" },
      ],
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
                  <SidebarMenuSub>
                    {item.subItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.title}>
                        <SidebarMenuSubButton asChild>
                          <Link to={subItem.url}>
                            <subItem.icon />
                            <span>{subItem.title}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
