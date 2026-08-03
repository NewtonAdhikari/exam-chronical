"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

const postColumns = [
  { key: "title", label: "Title", render: (v: string) => <span className="font-medium line-clamp-1">{v}</span> },
  { key: "category", label: "Category" },
  { key: "status", label: "Status", render: (v: string) => <Badge className={v === "PUBLISHED" ? "bg-emerald-500 text-white" : ""}>{v}</Badge> },
  { key: "isFeatured", label: "Featured", render: (v: boolean) => v ? "⭐" : "-" },
]

const demoPosts = [
  { id: "1", title: "SSC CGL 2026 Preparation Strategy", category: "Preparation Tips", status: "PUBLISHED", isFeatured: true },
  { id: "2", title: "Top 10 Tips to Crack Banking Exams", category: "Banking", status: "PUBLISHED", isFeatured: true },
  { id: "3", title: "How to Stay Motivated", category: "Motivation", status: "PUBLISHED", isFeatured: false },
]

const caColumns = [
  { key: "title", label: "Title", render: (v: string) => <span className="font-medium line-clamp-1">{v}</span> },
  { key: "type", label: "Type", render: (v: string) => <Badge variant="secondary">{v}</Badge> },
  { key: "category", label: "Category" },
  { key: "date", label: "Date" },
]

const demoCA = [
  { id: "1", title: "India Launches Chandrayaan-4 Planning", type: "DAILY", category: "Science & Tech", date: "2026-08-04" },
  { id: "2", title: "GDP Growth 7.8% in Q1", type: "DAILY", category: "Economy", date: "2026-08-03" },
  { id: "3", title: "NEP Implementation Update", type: "DAILY", category: "Education", date: "2026-08-02" },
  { id: "4", title: "Weekly Digest Jul-Aug", type: "WEEKLY", category: "Weekly", date: "2026-08-03" },
  { id: "5", title: "Monthly CA July 2026", type: "MONTHLY", category: "Monthly", date: "2026-07-31" },
]

const materialColumns = [
  { key: "title", label: "Title", render: (v: string) => <span className="font-medium line-clamp-1">{v}</span> },
  { key: "type", label: "Type", render: (v: string) => <Badge variant="secondary">{v}</Badge> },
  { key: "category", label: "Category" },
  { key: "downloadCount", label: "Downloads", render: (v: number) => v?.toLocaleString() ?? "0" },
]

const demoMaterials = [
  { id: "1", title: "SSC CGL Tier-I Study Notes", type: "NOTES", category: "SSC", downloadCount: 15420 },
  { id: "2", title: "IBPS PO Reasoning PYP", type: "PREVIOUS_PAPER", category: "Banking", downloadCount: 8932 },
  { id: "3", title: "CA 2026 Monthly PDF Bundle", type: "PDF", category: "Current Affairs", downloadCount: 23456 },
  { id: "4", title: "Quant Short Tricks", type: "SHORT_NOTES", category: "Maths", downloadCount: 19876 },
]

const mockTestColumns = [
  { key: "title", label: "Test", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "examCategory", label: "Exam" },
  { key: "totalQuestions", label: "Questions" },
  { key: "totalMarks", label: "Marks" },
  { key: "duration", label: "Duration", render: (v: number) => `${v} min` },
  { key: "isFree", label: "Free", render: (v: boolean) => v ? <Badge className="bg-emerald-500 text-white text-[10px]">FREE</Badge> : <Badge variant="secondary" className="text-[10px]">PAID</Badge> },
]

const demoMockTests = [
  { id: "1", title: "SSC CGL Mock Test 1", examCategory: "SSC CGL", totalQuestions: 10, totalMarks: 20, duration: 60, isFree: true },
  { id: "2", title: "IBPS PO Mock Test 1", examCategory: "IBPS PO", totalQuestions: 100, totalMarks: 100, duration: 60, isFree: true },
  { id: "3", title: "RRB NTPC Mock Test 1", examCategory: "RRB NTPC", totalQuestions: 100, totalMarks: 100, duration: 90, isFree: true },
  { id: "4", title: "UPSC CSE Mock Test 1", examCategory: "UPSC CSE", totalQuestions: 100, totalMarks: 200, duration: 120, isFree: false },
]

const userColumns = [
  { key: "name", label: "Name", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "email", label: "Email" },
  { key: "role", label: "Role", render: (v: string) => <Badge className={v === "ADMIN" ? "bg-brand-red text-white" : ""}>{v}</Badge> },
  { key: "status", label: "Status", render: (v: string) => <Badge variant="secondary">{v}</Badge> },
]

const demoUsers = [
  { id: "1", name: "Admin User", email: "admin@examchronicle.com", role: "ADMIN", status: "Active" },
  { id: "2", name: "Rahul Sharma", email: "student@example.com", role: "USER", status: "Active" },
  { id: "3", name: "Priya Singh", email: "priya@gmail.com", role: "USER", status: "Active" },
  { id: "4", name: "Amit Kumar", email: "amit@gmail.com", role: "USER", status: "Blocked" },
]

export function PostsManager() {
  const [open, setOpen] = useState(false)
  return (<>
    <DataTable title="Blog Posts" description="Manage articles and blog content" columns={postColumns} data={demoPosts} onAdd={() => setOpen(true)} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="New Post" />
    <Dialog open={open} onOpenChange={setOpen}><DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto"><DialogHeader><DialogTitle>New Blog Post</DialogTitle></DialogHeader>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Post created!"); setOpen(false) }}>
        <div className="space-y-4">
          <div className="space-y-2"><Label>Title</Label><Input required /></div>
          <div className="grid grid-cols-2 gap-4"><div className="space-y-2"><Label>Category</Label><Input /></div><div className="space-y-2"><Label>Status</Label><Select defaultValue="DRAFT"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="DRAFT">Draft</SelectItem><SelectItem value="PUBLISHED">Published</SelectItem></SelectContent></Select></div></div>
          <div className="space-y-2"><Label>Excerpt</Label><Textarea /></div>
          <div className="space-y-2"><Label>Content</Label><Textarea rows={8} placeholder="Write your article content here..." /></div>
          <div className="grid grid-cols-2 gap-4"><div className="space-y-2"><Label>Meta Title</Label><Input /></div><div className="space-y-2"><Label>Meta Description</Label><Input /></div></div>
        </div>
        <div className="flex justify-end gap-2"><Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button><Button type="submit" className="bg-primary text-white">Publish</Button></div>
      </form>
    </DialogContent></Dialog>
  </>)
}

export function CurrentAffairsManager() {
  return <DataTable title="Current Affairs" description="Manage daily, weekly & monthly current affairs" columns={caColumns} data={demoCA} onAdd={() => toast.info("Add CA")} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="Add Current Affairs" />
}

export function MaterialsManager() {
  return <DataTable title="Study Materials" description="Manage PDFs, notes & previous papers" columns={materialColumns} data={demoMaterials} onAdd={() => toast.info("Add Material")} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="Upload Material" />
}

export function MockTestsManager() {
  return <DataTable title="Mock Tests" description="Create and manage practice tests" columns={mockTestColumns} data={demoMockTests} onAdd={() => toast.info("Add Test")} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="Create Test" />
}

export function UsersManager() {
  return <DataTable title="Users" description="Manage user accounts and roles" columns={userColumns} data={demoUsers} onEdit={() => toast.info("Edit User")} onDelete={() => toast.success("User deleted")} searchPlaceholder="Search users..." />
}
