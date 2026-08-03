"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import {
  BarChart3, BookOpen, Briefcase, ChevronLeft, FileText, GraduationCap,
  LayoutDashboard, LogOut, Menu, Moon, Newspaper, PenTool, Settings,
  Sun, Users, Bell, Download, MessageSquare, Megaphone
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"

const sidebarItems = [
  { label: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { label: "Jobs", href: "/admin/jobs", icon: Briefcase },
  { label: "Exams", href: "/admin/exams", icon: GraduationCap },
  { label: "Blog Posts", href: "/admin/posts", icon: FileText },
  { label: "Current Affairs", href: "/admin/current-affairs", icon: Newspaper },
  { label: "Study Materials", href: "/admin/materials", icon: BookOpen },
  { label: "Mock Tests", href: "/admin/mock-tests", icon: PenTool },
  { label: "Results", href: "/admin/results", icon: BarChart3 },
  { label: "Admit Cards", href: "/admin/admit-cards", icon: Download },
  { label: "Answer Keys", href: "/admin/answer-keys", icon: FileText },
  { label: "Users", href: "/admin/users", icon: Users },
  { label: "Comments", href: "/admin/comments", icon: MessageSquare },
  { label: "Notifications", href: "/admin/notifications", icon: Megaphone },
  { label: "Settings", href: "/admin/settings", icon: Settings },
]

function SidebarContent({ onItemClick }: { onItemClick?: () => void }) {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full">
      {/* Logo */}
      <div className="p-4 border-b">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg brand-gradient flex items-center justify-center">
            <GraduationCap className="h-4 w-4 text-white" />
          </div>
          <div>
            <span className="text-sm font-bold text-primary">Exam</span>
            <span className="text-sm font-bold text-brand-red">Chronicle</span>
            <Badge variant="secondary" className="ml-2 text-[10px]">Admin</Badge>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <ScrollArea className="flex-1 py-2">
        <nav className="px-2 space-y-0.5">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
            return (
              <Link key={item.href} href={item.href} onClick={onItemClick}>
                <div className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isActive ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}>
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </div>
              </Link>
            )
          })}
        </nav>
      </ScrollArea>

      {/* Footer */}
      <div className="p-3 border-t space-y-1">
        <Link href="/" onClick={onItemClick}>
          <div className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
            <ChevronLeft className="h-4 w-4" /> Back to Site
          </div>
        </Link>
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-brand-red hover:bg-red-50 dark:hover:bg-red-950 transition-colors">
          <LogOut className="h-4 w-4" /> Sign Out
        </button>
      </div>
    </div>
  )
}

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [collapsed, setCollapsed] = useState(false)

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Desktop Sidebar */}
      <aside className={`hidden lg:flex flex-col border-r bg-card transition-all duration-200 ${collapsed ? "w-16" : "w-60"}`}>
        <SidebarContent />
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="h-14 border-b bg-card flex items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden lg:flex" onClick={() => setCollapsed(!collapsed)}>
              <Menu className="h-4 w-4" />
            </Button>
            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-60 p-0">
                <SheetClose asChild>
                  <div className="h-full"><SidebarContent /></div>
                </SheetClose>
              </SheetContent>
            </Sheet>
            <h2 className="text-sm font-semibold hidden sm:block">Admin Panel</h2>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-brand-red text-white border-0">5</Badge>
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-xs font-bold text-primary">A</span>
              </div>
              <span className="text-sm font-medium hidden sm:block">Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-4 md:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
