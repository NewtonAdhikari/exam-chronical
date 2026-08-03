"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight, Bell, BookOpen, Briefcase, Calendar, ChevronRight, Clock,
  Download, FileText, GraduationCap, Heart, MapPin, Megaphone,
  Newspaper, PenTool, Play, Rocket, Search, Shield, Star, Target,
  Trophy, TrendingUp, Users, Zap, CheckCircle2, AlertTriangle,
  Award, Brain, ClipboardList, Globe, Headphones, Lightbulb, Timer
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface HomePageProps {
  data: {
    jobs: any[]
    exams: any[]
    currentAffairs: any[]
    studyMaterials: any[]
    mockTests: any[]
    results: any[]
    admitCards: any[]
    answerKeys: any[]
    posts: any[]
    examCategories: any[]
    jobCategories: any[]
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
}

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
}

export function HomePage({ data }: HomePageProps) {
  const { jobs, exams, currentAffairs, studyMaterials, mockTests, results, admitCards, answerKeys, posts, examCategories, jobCategories } = data

  const popularExams = [
    { name: "SSC CGL", icon: Shield, color: "bg-blue-500", count: "1.2L+" },
    { name: "IBPS PO", icon: Briefcase, color: "bg-emerald-500", count: "45K+" },
    { name: "UPSC CSE", icon: GraduationCap, color: "bg-purple-500", count: "10K+" },
    { name: "RRB NTPC", icon: Target, color: "bg-orange-500", count: "35K+" },
    { name: "CDS", icon: Shield, color: "bg-red-500", count: "8K+" },
    { name: "CTET", icon: BookOpen, color: "bg-teal-500", count: "15K+" },
    { name: "SBI PO", icon: Briefcase, color: "bg-indigo-500", count: "20K+" },
    { name: "SSC CHSL", icon: FileText, color: "bg-pink-500", count: "90K+" },
  ]

  const testimonials = [
    { name: "Priya Singh", exam: "SSC CGL 2025", score: "Selected", text: "Exam Chronicle\'s mock tests and current affairs section were instrumental in my selection. The quality of questions matches the actual exam pattern perfectly.", avatar: "PS" },
    { name: "Amit Kumar", exam: "IBPS PO 2025", score: "Selected", text: "The study materials are comprehensive and well-organized. I cleared IBPS PO in my first attempt thanks to the systematic preparation approach here.", avatar: "AK" },
    { name: "Sneha Patel", exam: "UPSC CSE 2025", score: "AIR 156", text: "Current affairs coverage is exceptional. The daily and weekly compilations saved hours of preparation time. Highly recommended for serious aspirants.", avatar: "SP" },
  ]

  const faqs = [
    { q: "Is Exam Chronicle free to use?", a: "Yes, most of our content including job notifications, current affairs, and basic mock tests are completely free. Premium mock tests and advanced features are available with a subscription." },
    { q: "How often is current affairs updated?", a: "Current affairs are updated daily with important national and international events. We also provide weekly and monthly compilations for comprehensive revision." },
    { q: "Are mock tests similar to actual exams?", a: "Our mock tests are designed by experienced faculty and closely follow the latest exam patterns, difficulty levels, and marking schemes of actual examinations." },
    { q: "Can I download study materials for offline use?", a: "Yes, most study materials including PDFs, notes, and previous year papers can be downloaded for offline study. You can access them from your dashboard anytime." },
    { q: "How do I track my preparation progress?", a: "Your dashboard provides detailed analytics including test scores, time spent, accuracy trends, and subject-wise performance to help you track and optimize your preparation." },
  ]

  const stats = [
    { label: "Govt Jobs", value: "50,000+", icon: Briefcase },
    { label: "Mock Tests", value: "10,000+", icon: PenTool },
    { label: "Study Material", value: "25,000+", icon: BookOpen },
    { label: "Active Users", value: "5L+", icon: Users },
  ]

  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden brand-gradient-hero">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50" />
        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <motion.div className="max-w-4xl mx-auto text-center" {...fadeUp}>
            <Badge className="bg-brand-yellow text-brand-deep-blue font-semibold mb-4 text-sm px-4 py-1">
              <Zap className="h-3.5 w-3.5 mr-1" /> India&apos;s #1 Govt Exam Platform
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
              Your Gateway to{" "}
              <span className="text-brand-yellow">Government</span>{" "}
              Exam Success
            </h1>
            <p className="text-base md:text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Get latest job notifications, prepare with mock tests, stay updated with current affairs, and access free study materials — all in one place.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search jobs, exams, study material..."
                className="pl-12 pr-32 h-14 text-base rounded-xl border-0 shadow-lg"
              />
              <Button className="absolute right-2 top-1/2 -translate-y-1/2 h-10 rounded-lg bg-brand-red hover:bg-red-700 text-white font-semibold">
                Search
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-3 rounded-xl bg-white/10 backdrop-blur-sm">
                  <stat.icon className="h-5 w-5 text-brand-yellow mx-auto mb-1" />
                  <p className="text-xl md:text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-xs text-blue-200">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 60L48 55C96 50 192 40 288 35C384 30 480 30 576 33.3C672 36.7 768 43.3 864 45C960 46.7 1056 43.3 1152 38.3C1248 33.3 1344 26.7 1392 23.3L1440 20V60H0Z" fill="hsl(var(--background))" />
          </svg>
        </div>
      </section>

      {/* Latest Notifications Ticker */}
      <section className="container mx-auto px-4 -mt-2 mb-8">
        <div className="bg-brand-red/10 border border-brand-red/20 rounded-xl p-3 flex items-center gap-3 overflow-hidden">
          <Badge className="bg-brand-red text-white shrink-0 animate-pulse">
            <Bell className="h-3 w-3 mr-1" /> LIVE
          </Badge>
          <div className="overflow-hidden whitespace-nowrap flex-1">
            <motion.div
              animate={{ x: [0, -1000] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="inline-flex gap-8"
            >
              {[
                "🔴 SSC CGL 2026 Notification Released - 14,582 Vacancies",
                "🟡 IBPS PO 2026 Registration Open - Apply Before 1 Aug",
                "🔴 UP Police Constable 2026 - 60,244 Posts",
                "🟡 RRB NTPC CBT-2 Admit Card Released",
              ].map((text, i) => (
                <span key={i} className="text-sm font-medium text-foreground">{text}</span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Popular Exams Grid */}
      <section className="container mx-auto px-4 mb-12">
        <motion.div {...fadeUp}>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">Popular Exams</h2>
              <p className="text-muted-foreground text-sm">Prepare for top government examinations</p>
            </div>
            <Link href="#exams">
              <Button variant="ghost" size="sm" className="text-primary">View All <ChevronRight className="h-4 w-4" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
            {popularExams.map((exam) => (
              <Link key={exam.name} href={`#exam/${exam.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <motion.div whileHover={{ y: -4 }} className="flex flex-col items-center p-4 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all cursor-pointer group">
                  <div className={`w-10 h-10 rounded-lg ${exam.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform`}>
                    <exam.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-center">{exam.name}</span>
                  <span className="text-xs text-muted-foreground">{exam.count} applied</span>
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Latest Government Jobs */}
      <section id="jobs" className="container mx-auto px-4 mb-12">
        <motion.div {...fadeUp}>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold">Latest Government Jobs</h2>
                <p className="text-muted-foreground text-sm">Newly released notifications & vacancies</p>
              </div>
            </div>
            <Link href="#">
              <Button variant="outline" size="sm">View All Jobs <ArrowRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {jobs.map((job: any) => (
              <motion.div key={job.id} whileHover={{ y: -2 }}>
                <Card className="h-full hover:shadow-lg transition-shadow border-l-4 border-l-primary group">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between gap-2">
                      <CardTitle className="text-sm font-semibold line-clamp-2 group-hover:text-primary transition-colors">
                        {job.title}
                      </CardTitle>
                      <div className="flex gap-1 shrink-0">
                        {job.isUrgent && <Badge className="bg-brand-red text-white text-[10px] shrink-0">URGENT</Badge>}
                        {job.isFeatured && <Badge className="bg-brand-yellow text-brand-deep-blue text-[10px] shrink-0">NEW</Badge>}
                      </div>
                    </div>
                    <CardDescription className="text-xs">{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-1.5 text-xs text-muted-foreground">
                      {job.vacancies && (
                        <div className="flex items-center gap-1.5">
                          <Users className="h-3 w-3 text-primary" /> <span className="font-medium text-foreground">{job.vacancies?.toLocaleString()}</span> Vacancies
                        </div>
                      )}
                      {job.qualification && (
                        <div className="flex items-center gap-1.5">
                          <GraduationCap className="h-3 w-3 text-primary" /> {job.qualification}
                        </div>
                      )}
                      {job.salary && (
                        <div className="flex items-center gap-1.5">
                          <TrendingUp className="h-3 w-3 text-emerald-500" /> {job.salary}
                        </div>
                      )}
                      {job.lastDate && (
                        <div className="flex items-center gap-1.5">
                          <Clock className="h-3 w-3 text-brand-red" /> Last Date: {new Date(job.lastDate).toLocaleDateString()}
                        </div>
                      )}
                    </div>
                    <div className="flex gap-2 mt-3">
                      <Button size="sm" className="flex-1 bg-primary hover:bg-blue-700 text-white text-xs h-8">
                        View Details
                      </Button>
                      {job.applyLink && (
                        <Button size="sm" variant="outline" className="flex-1 text-brand-red border-brand-red/30 hover:bg-brand-red/10 text-xs h-8">
                          Apply Now
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Upcoming Exams & Quick Links - Two Column */}
      <section id="exams" className="container mx-auto px-4 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Upcoming Exams */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 flex items-center justify-center">
                  <GraduationCap className="h-4 w-4 text-purple-500" />
                </div>
                <h2 className="text-xl font-bold">Upcoming Exams</h2>
              </div>
              <Link href="#">
                <Button variant="ghost" size="sm" className="text-primary text-xs">View All</Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {exams.map((exam: any) => (
                <Link key={exam.id} href={`#exam/${exam.slug}`}>
                  <Card className="hover:shadow-md transition-all hover:border-primary/50 cursor-pointer group">
                    <CardContent className="p-4">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                          <Shield className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{exam.title}</h3>
                          <p className="text-xs text-muted-foreground line-clamp-1">{exam.description}</p>
                          <div className="flex items-center gap-3 mt-1.5">
                            {exam.salary && (
                              <span className="text-xs text-emerald-600 font-medium">{exam.salary.split('(')[0]}</span>
                            )}
                            {exam.category && (
                              <Badge variant="secondary" className="text-[10px]">{exam.category.name}</Badge>
                            )}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links Sidebar */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4 text-brand-yellow" /> Quick Links
            </h3>
            <div className="space-y-2">
              {[
                { label: "Latest Results", icon: Trophy, count: results.length, color: "text-emerald-600 bg-emerald-50" },
                { label: "Admit Cards", icon: Download, count: admitCards.length, color: "text-primary bg-blue-50" },
                { label: "Answer Keys", icon: FileText, count: answerKeys.length, color: "text-purple-600 bg-purple-50" },
                { label: "Current Affairs", icon: Newspaper, count: currentAffairs.length, color: "text-orange-600 bg-orange-50" },
                { label: "Free Mock Tests", icon: PenTool, count: mockTests.length, color: "text-brand-red bg-red-50" },
                { label: "Study Material", icon: BookOpen, count: studyMaterials.length, color: "text-teal-600 bg-teal-50" },
              ].map((item) => (
                <Link key={item.label} href={`#${item.label.toLowerCase().replace(/\s+/g, "-")}`}>
                  <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-lg ${item.color} flex items-center justify-center`}>
                        <item.icon className="h-4 w-4" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{item.label}</span>
                    </div>
                    <Badge variant="secondary" className="text-[10px]">{item.count}</Badge>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results, Admit Cards, Answer Keys Tabs */}
      <section className="container mx-auto px-4 mb-12">
        <Tabs defaultValue="results" className="w-full">
          <div className="flex items-center justify-between mb-4">
            <TabsList className="bg-muted">
              <TabsTrigger value="results" className="gap-1.5">
                <Trophy className="h-3.5 w-3.5" /> Results
              </TabsTrigger>
              <TabsTrigger value="admit-cards" className="gap-1.5">
                <Download className="h-3.5 w-3.5" /> Admit Cards
              </TabsTrigger>
              <TabsTrigger value="answer-keys" className="gap-1.5">
                <FileText className="h-3.5 w-3.5" /> Answer Keys
              </TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value="results">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {results.map((r: any) => (
                <Card key={r.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <Trophy className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2">{r.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {r.resultDate ? new Date(r.resultDate).toLocaleDateString() : "N/A"}
                      </div>
                      <Button size="sm" variant="link" className="text-xs text-primary p-0 h-auto mt-1">View Result →</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="admit-cards">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {admitCards.map((a: any) => (
                <Card key={a.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Download className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2">{a.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {a.releaseDate ? new Date(a.releaseDate).toLocaleDateString() : "N/A"}
                      </div>
                      <Button size="sm" variant="link" className="text-xs text-primary p-0 h-auto mt-1">Download →</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="answer-keys">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {answerKeys.map((a: any) => (
                <Card key={a.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-purple-500" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm line-clamp-2">{a.title}</h3>
                      <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" /> {a.releaseDate ? new Date(a.releaseDate).toLocaleDateString() : "N/A"}
                      </div>
                      <Button size="sm" variant="link" className="text-xs text-primary p-0 h-auto mt-1">Download →</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Current Affairs */}
      <section id="current-affairs" className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500/10 flex items-center justify-center">
                <Newspaper className="h-4 w-4 text-orange-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Current Affairs</h2>
                <p className="text-muted-foreground text-sm">Stay updated with latest events</p>
              </div>
            </div>
            <Link href="#">
              <Button variant="outline" size="sm">View All <ArrowRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
          <Tabs defaultValue="daily" className="mb-6">
            <TabsList>
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
            <TabsContent value="daily">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentAffairs.filter((ca: any) => ca.type === "DAILY").map((ca: any) => (
                  <Card key={ca.id} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-4">
                      <Badge variant="secondary" className="text-[10px] mb-2">{ca.category}</Badge>
                      <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors line-clamp-2">{ca.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{ca.content}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{new Date(ca.date).toLocaleDateString()}</span>
                        <Button variant="ghost" size="sm" className="text-xs text-primary h-6">Read More →</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="weekly">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentAffairs.filter((ca: any) => ca.type === "WEEKLY").map((ca: any) => (
                  <Card key={ca.id} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-4">
                      <Badge className="bg-brand-yellow text-brand-deep-blue text-[10px] mb-2">{ca.type}</Badge>
                      <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{ca.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{ca.content}</p>
                      <span className="text-xs text-muted-foreground">{new Date(ca.date).toLocaleDateString()}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="monthly">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {currentAffairs.filter((ca: any) => ca.type === "MONTHLY").map((ca: any) => (
                  <Card key={ca.id} className="hover:shadow-lg transition-shadow group">
                    <CardContent className="p-4">
                      <Badge className="bg-purple-500 text-white text-[10px] mb-2">{ca.type}</Badge>
                      <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{ca.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 mb-3">{ca.content}</p>
                      <span className="text-xs text-muted-foreground">{new Date(ca.date).toLocaleDateString()}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Daily Quiz + Free Mock Tests */}
      <section id="mock-tests" className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Daily Quiz */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-yellow/20 flex items-center justify-center">
                <Brain className="h-4 w-4 text-brand-yellow" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Daily Quiz</h2>
                <p className="text-muted-foreground text-sm">Test your knowledge every day</p>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-brand-deep-blue to-blue-600 text-white overflow-hidden">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                    <Timer className="h-6 w-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Today&apos;s Quiz Challenge</h3>
                    <p className="text-sm text-blue-200">10 Questions · 5 Minutes · General Knowledge</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center p-2 rounded-lg bg-white/10">
                    <p className="text-xl font-bold">10</p>
                    <p className="text-xs text-blue-200">Questions</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/10">
                    <p className="text-xl font-bold">5</p>
                    <p className="text-xs text-blue-200">Minutes</p>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-white/10">
                    <p className="text-xl font-bold">10</p>
                    <p className="text-xs text-blue-200">Marks</p>
                  </div>
                </div>
                <Button className="w-full bg-brand-yellow hover:bg-yellow-500 text-brand-deep-blue font-semibold">
                  <Play className="h-4 w-4 mr-2" /> Start Quiz Now
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Free Mock Tests */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-red/10 flex items-center justify-center">
                <PenTool className="h-4 w-4 text-brand-red" />
              </div>
              <div>
                <h2 className="text-xl font-bold">Free Mock Tests</h2>
                <p className="text-muted-foreground text-sm">Practice with exam-like tests</p>
              </div>
            </div>
            <div className="space-y-3">
              {mockTests.map((test: any) => (
                <Card key={test.id} className="hover:shadow-md transition-shadow group">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-sm group-hover:text-primary transition-colors">{test.title}</h3>
                          {test.isFree && <Badge className="bg-emerald-500 text-white text-[10px]">FREE</Badge>}
                        </div>
                        <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1"><ClipboardList className="h-3 w-3" /> {test.totalQuestions} Q</span>
                          <span className="flex items-center gap-1"><Target className="h-3 w-3" /> {test.totalMarks} Marks</span>
                          <span className="flex items-center gap-1"><Timer className="h-3 w-3" /> {test.duration} min</span>
                          <span className="flex items-center gap-1">
                            <Award className="h-3 w-3" /> {test.difficulty}
                          </span>
                        </div>
                      </div>
                      <Button size="sm" className="bg-primary hover:bg-blue-700 text-white text-xs shrink-0">
                        <Play className="h-3 w-3 mr-1" /> Start
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Study Materials */}
      <section id="study-material" className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-teal-500/10 flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-teal-500" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">Study Materials</h2>
                <p className="text-muted-foreground text-sm">Free PDFs, notes & previous papers</p>
              </div>
            </div>
            <Link href="#">
              <Button variant="outline" size="sm">View All <ArrowRight className="h-4 w-4 ml-1" /></Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {studyMaterials.map((mat: any) => (
              <Card key={mat.id} className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <FileText className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors line-clamp-2">{mat.title}</h3>
                      <p className="text-xs text-muted-foreground line-clamp-1 mb-2">{mat.description}</p>
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="secondary" className="text-[10px]">{mat.type}</Badge>
                        {mat.examName && <Badge variant="outline" className="text-[10px]">{mat.examName}</Badge>}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3 pt-3 border-t">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Download className="h-3 w-3" /> {mat.downloadCount?.toLocaleString()} downloads
                    </span>
                    <Button size="sm" variant="outline" className="text-xs h-7">
                      <Download className="h-3 w-3 mr-1" /> Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Articles / Blog */}
      <section id="blog" className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center">
              <Megaphone className="h-4 w-4 text-pink-500" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Trending Articles</h2>
              <p className="text-muted-foreground text-sm">Expert tips & preparation strategies</p>
            </div>
          </div>
          <Link href="#">
            <Button variant="outline" size="sm">All Articles <ArrowRight className="h-4 w-4 ml-1" /></Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post: any) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow group overflow-hidden">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  {post.category && <Badge variant="secondary" className="text-[10px]">{post.category}</Badge>}
                  {post.isFeatured && <Badge className="bg-brand-yellow text-brand-deep-blue text-[10px]">Featured</Badge>}
                </div>
                <h3 className="font-bold text-base mb-2 group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{post.excerpt || post.content?.substring(0, 150)}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : "N/A"}
                  </div>
                  <Button variant="ghost" size="sm" className="text-xs text-primary h-6">Read More →</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Preparation Tips</h2>
            <p className="text-muted-foreground">Expert strategies to boost your exam preparation</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Target, title: "Set Clear Goals", desc: "Define target exam, score, and timeline. Break preparation into weekly milestones for consistent progress tracking.", color: "bg-blue-500" },
              { icon: BookOpen, title: "Quality Study Material", desc: "Choose authentic sources. Focus on NCERT basics, then advance to exam-specific books and previous year papers.", color: "bg-emerald-500" },
              { icon: PenTool, title: "Practice Daily", desc: "Solve at least 50 questions daily. Take full-length mock tests weekly to build speed, accuracy, and exam temperament.", color: "bg-purple-500" },
              { icon: Brain, title: "Revise Smartly", desc: "Use spaced repetition for GK. Maintain short notes and formula sheets. Weekly revision of weak topics is essential.", color: "bg-orange-500" },
            ].map((tip, i) => (
              <motion.div key={tip.title} whileHover={{ y: -4 }}>
                <Card className="h-full text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 rounded-xl ${tip.color} flex items-center justify-center mx-auto mb-4`}>
                      <tip.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">{tip.title}</h3>
                    <p className="text-sm text-muted-foreground">{tip.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">What Our Students Say</h2>
          <p className="text-muted-foreground">Success stories from our community</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-brand-yellow text-brand-yellow" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-sm font-bold text-primary">{t.avatar}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-emerald-600">{t.exam} - {t.score}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQs */}
      <section className="bg-muted/50 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Quick answers to common questions</p>
          </div>
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="bg-card rounded-lg border px-4">
                <AccordionTrigger className="text-sm font-semibold hover:text-primary text-left">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA / App Download */}
      <section className="container mx-auto px-4 py-12">
        <div className="brand-gradient rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9zdmc+')] opacity-30" />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Start Your Preparation Journey Today</h2>
            <p className="text-blue-100 mb-6 max-w-xl mx-auto">
              Join 5 lakh+ aspirants who trust Exam Chronicle for their government exam preparation. Get access to free mock tests, study materials, and daily current affairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="bg-brand-yellow hover:bg-yellow-500 text-brand-deep-blue font-semibold text-base px-8">
                <Rocket className="h-4 w-4 mr-2" /> Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-base px-8">
                <Play className="h-4 w-4 mr-2" /> Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
