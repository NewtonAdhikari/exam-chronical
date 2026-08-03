"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { motion, AnimatePresence } from "framer-motion"
import {
  BookOpen, Briefcase, ChevronDown, FileText, GraduationCap, Home,
  LayoutDashboard, Menu, Moon, Newspaper, PenTool, Search, Sun, X,
  Bell, User, Bookmark, Download, Trophy, Clock, Shield
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem,
  DropdownMenuSeparator, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Jobs", href: "#jobs", icon: Briefcase },
  { label: "Exams", href: "#exams", icon: GraduationCap },
  { label: "Current Affairs", href: "#current-affairs", icon: Newspaper },
  { label: "Mock Tests", href: "#mock-tests", icon: PenTool },
  { label: "Study Material", href: "#study-material", icon: BookOpen },
  { label: "Blog", href: "#blog", icon: FileText },
]

const examCategories = [
  "SSC CGL", "SSC CHSL", "IBPS PO", "SBI PO", "RRB NTPC",
  "UPSC CSE", "CDS", "NDA", "CTET", "State PSC",
]

export function Header() {
  const { theme, setTheme } = useTheme()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [examDropdown, setExamDropdown] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 glass-effect">
      {/* Top bar */}
      <div className="bg-brand-deep-blue text-white">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-between text-xs">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Bell className="h-3 w-3 text-brand-yellow" />
              <span className="text-brand-yellow font-semibold">NEW:</span> SSC CGL 2026 Notification Out!
            </span>
            <span className="hidden md:inline text-blue-200">|</span>
            <span className="hidden md:inline text-blue-100">Last Date: 15 Jul 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="#" className="hover:text-brand-yellow transition-colors">Admit Card</Link>
            <Link href="#" className="hover:text-brand-yellow transition-colors">Results</Link>
            <Link href="#" className="hover:text-brand-yellow transition-colors">Answer Keys</Link>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-9 h-9 rounded-lg brand-gradient flex items-center justify-center">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-primary leading-tight">Exam</span>
              <span className="text-lg font-bold text-brand-red leading-tight -mt-1">Chronicle</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              item.label === "Exams" ? (
                <DropdownMenu key={item.label} onOpenChange={setExamDropdown}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium hover:text-primary">
                      <item.icon className="h-4 w-4" />
                      {item.label}
                      <ChevronDown className={`h-3 w-3 transition-transform ${examDropdown ? "rotate-180" : ""}`} />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="w-64">
                    <div className="p-2">
                      <p className="text-xs font-semibold text-muted-foreground mb-2">POPULAR EXAMS</p>
                      <div className="grid grid-cols-2 gap-1">
                        {examCategories.map((exam) => (
                          <DropdownMenuItem key={exam} asChild className="text-xs cursor-pointer">
                            <Link href={`#exam/${exam.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center gap-1.5">
                              <Shield className="h-3 w-3 text-primary" />
                              {exam}
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </div>
                    </div>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link key={item.label} href={item.href}>
                  <Button variant="ghost" size="sm" className="gap-1 text-sm font-medium hover:text-primary">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              )
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Search */}
            <Button variant="ghost" size="icon" className="hidden sm:flex" onClick={() => setSearchOpen(true)}>
              <Search className="h-4 w-4" />
            </Button>

            {/* Theme toggle */}
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="hidden sm:flex relative">
              <Bell className="h-4 w-4" />
              <Badge className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center text-[10px] bg-brand-red text-white border-0">3</Badge>
            </Button>

            {/* User / Login */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <User className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem asChild><Link href="#" className="flex items-center gap-2"><LayoutDashboard className="h-4 w-4" /> Dashboard</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="#" className="flex items-center gap-2"><Bookmark className="h-4 w-4" /> Bookmarks</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="#" className="flex items-center gap-2"><Download className="h-4 w-4" /> Downloads</Link></DropdownMenuItem>
                <DropdownMenuItem asChild><Link href="#" className="flex items-center gap-2"><Trophy className="h-4 w-4" /> Quiz History</Link></DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild><Link href="#" className="flex items-center gap-2"><Clock className="h-4 w-4" /> Recently Viewed</Link></DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="#" className="hidden sm:block">
              <Button size="sm" className="bg-brand-red hover:bg-red-700 text-white text-xs">
                Login
              </Button>
            </Link>

            {/* Mobile menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  <div className="p-4 border-b brand-gradient">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-white" />
                        <span className="text-lg font-bold text-white">Exam Chronicle</span>
                      </div>
                    </div>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4">
                    <div className="space-y-1">
                      {navItems.map((item) => (
                        <SheetClose asChild key={item.label}>
                          <Link href={item.href} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                            <item.icon className="h-4 w-4 text-primary" />
                            {item.label}
                          </Link>
                        </SheetClose>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <p className="text-xs font-semibold text-muted-foreground mb-2 px-3">POPULAR EXAMS</p>
                      <div className="space-y-1">
                        {examCategories.map((exam) => (
                          <SheetClose asChild key={exam}>
                            <Link href={`#exam/${exam.toLowerCase().replace(/\s+/g, "-")}`} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-muted transition-colors text-sm">
                              <Shield className="h-3.5 w-3.5 text-primary" />
                              {exam}
                            </Link>
                          </SheetClose>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t space-y-1">
                      <SheetClose asChild>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                          <Bookmark className="h-4 w-4" /> Bookmarks
                        </Link>
                      </SheetClose>
                      <SheetClose asChild>
                        <Link href="#" className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                          <Download className="h-4 w-4" /> Downloads
                        </Link>
                      </SheetClose>
                    </div>
                  </nav>
                  <div className="p-4 border-t">
                    <Button className="w-full bg-brand-red hover:bg-red-700 text-white">Login / Register</Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute inset-x-0 top-full z-50 border-b bg-background/95 backdrop-blur-sm p-4 shadow-lg"
          >
            <div className="container mx-auto max-w-2xl">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search jobs, exams, articles, PDFs..."
                  className="pl-10 pr-10 h-11"
                  autoFocus
                />
                <Button variant="ghost" size="icon" className="absolute right-1 top-1/2 -translate-y-1/2 h-8 w-8" onClick={() => { setSearchOpen(false); setSearchQuery("") }}>
                  <X className="h-3 w-3" />
                </Button>
              </div>
              {searchQuery && (
                <div className="mt-3 space-y-1">
                  <p className="text-xs font-medium text-muted-foreground">Quick Results</p>
                  <div className="space-y-1">
                    {["SSC CGL 2026", "IBPS PO Mock Test", "Current Affairs Today"].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase())).map((result) => (
                      <Link key={result} href="#" className="block px-3 py-2 rounded-lg hover:bg-muted text-sm" onClick={() => setSearchOpen(false)}>
                        {result}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
