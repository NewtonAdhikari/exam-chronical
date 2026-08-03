"use client"

import {
  Briefcase, GraduationCap, FileText, BookOpen, Users, TrendingUp,
  ArrowUpRight, ArrowDownRight, Newspaper, PenTool, Download, Eye
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const stats = [
  { title: "Total Jobs", value: "1,247", change: "+12%", up: true, icon: Briefcase, color: "text-primary bg-blue-100 dark:bg-blue-950" },
  { title: "Active Exams", value: "86", change: "+5%", up: true, icon: GraduationCap, color: "text-purple-600 bg-purple-100 dark:bg-purple-950" },
  { title: "Blog Posts", value: "342", change: "+8%", up: true, icon: FileText, color: "text-emerald-600 bg-emerald-100 dark:bg-emerald-950" },
  { title: "Study Materials", value: "567", change: "+15%", up: true, icon: BookOpen, color: "text-orange-600 bg-orange-100 dark:bg-orange-950" },
  { title: "Mock Tests", value: "234", change: "+3%", up: true, icon: PenTool, color: "text-pink-600 bg-pink-100 dark:bg-pink-950" },
  { title: "Total Users", value: "5,42,890", change: "+22%", up: true, icon: Users, color: "text-teal-600 bg-teal-100 dark:bg-teal-950" },
]

const recentActivity = [
  { type: "job", text: "SSC CGL 2026 notification published", time: "2 min ago", color: "bg-primary" },
  { type: "exam", text: "IBPS PO mock test #5 created", time: "15 min ago", color: "bg-purple-500" },
  { type: "post", text: "Blog post 'Preparation Tips' updated", time: "1 hr ago", color: "bg-emerald-500" },
  { type: "ca", text: "Daily current affairs published", time: "2 hrs ago", color: "bg-orange-500" },
  { type: "user", text: "1,250 new users registered today", time: "3 hrs ago", color: "bg-teal-500" },
  { type: "material", text: "SSC CGL Study Notes PDF uploaded", time: "5 hrs ago", color: "bg-pink-500" },
  { type: "result", text: "RRB NTPC 2025 CBT-2 result published", time: "6 hrs ago", color: "bg-amber-500" },
  { type: "comment", text: "23 new comments pending approval", time: "8 hrs ago", color: "bg-red-500" },
]

const popularExams = [
  { name: "SSC CGL", attempts: 125000, passRate: 4.2 },
  { name: "IBPS PO", attempts: 98000, passRate: 3.8 },
  { name: "UPSC CSE", attempts: 45000, passRate: 0.5 },
  { name: "RRB NTPC", attempts: 89000, passRate: 5.1 },
  { name: "CDS", attempts: 35000, passRate: 2.3 },
  { name: "CTET", attempts: 67000, passRate: 8.5 },
]

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground text-sm">Welcome back! Here&apos;s what&apos;s happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className={`w-8 h-8 rounded-lg ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="h-4 w-4" />
                </div>
                <span className={`text-xs font-medium flex items-center gap-0.5 ${stat.up ? "text-emerald-600" : "text-red-500"}`}>
                  {stat.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </span>
              </div>
              <p className="text-xl font-bold">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.title}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Two column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Activity</CardTitle>
              <CardDescription>Latest actions across the platform</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentActivity.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-2 h-2 rounded-full ${activity.color} shrink-0`} />
                    <p className="text-sm flex-1">{activity.text}</p>
                    <span className="text-xs text-muted-foreground shrink-0">{activity.time}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Popular Exams */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Popular Exams</CardTitle>
            <CardDescription>By mock test attempts</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {popularExams.map((exam, i) => (
                <div key={exam.name} className="flex items-center gap-3">
                  <span className="text-xs font-bold text-muted-foreground w-4">{i + 1}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{exam.name}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <span>{(exam.attempts / 1000).toFixed(0)}K attempts</span>
                      <span>·</span>
                      <span>{exam.passRate}% pass rate</span>
                    </div>
                  </div>
                  <div className="w-20 h-1.5 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-primary rounded-full"
                      style={{ width: `${(exam.attempts / 125000) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions & Visitor Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                { label: "Add Job", icon: Briefcase, color: "bg-blue-500" },
                { label: "Add Exam", icon: GraduationCap, color: "bg-purple-500" },
                { label: "New Post", icon: FileText, color: "bg-emerald-500" },
                { label: "Add CA", icon: Newspaper, color: "bg-orange-500" },
                { label: "Add Material", icon: BookOpen, color: "bg-pink-500" },
                { label: "New Test", icon: PenTool, color: "bg-teal-500" },
              ].map((action) => (
                <button key={action.label} className="flex flex-col items-center gap-2 p-3 rounded-lg hover:bg-muted transition-colors">
                  <div className={`w-10 h-10 rounded-lg ${action.color} flex items-center justify-center`}>
                    <action.icon className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-xs font-medium">{action.label}</span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Visitor Stats */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Visitor Analytics (Last 7 Days)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { label: "Page Views", value: "2,45,678", change: "+18%" },
                { label: "Unique Visitors", value: "89,432", change: "+12%" },
                { label: "Avg. Session", value: "4m 32s", change: "+5%" },
                { label: "Bounce Rate", value: "34%", change: "-3%" },
              ].map((metric) => (
                <div key={metric.label} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{metric.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold">{metric.value}</span>
                    <Badge variant="secondary" className="text-[10px] text-emerald-600">{metric.change}</Badge>
                  </div>
                </div>
              ))}
              {/* Mini bar chart */}
              <div className="flex items-end gap-1 h-20 pt-4">
                {[65, 78, 52, 89, 95, 72, 83].map((h, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full bg-primary/80 rounded-t-sm transition-all hover:bg-primary"
                      style={{ height: `${h}%` }}
                    />
                    <span className="text-[9px] text-muted-foreground">
                      {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
