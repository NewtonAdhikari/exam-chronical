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

const columns = [
  { key: "title", label: "Exam", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "category", label: "Category" },
  { key: "salary", label: "Salary", render: (v: string) => <span className="text-xs">{v}</span> },
  { key: "status", label: "Status", render: (v: string) => (
    <Badge variant={v === "PUBLISHED" ? "default" : "secondary"} className={v === "PUBLISHED" ? "bg-emerald-500 text-white" : ""}>{v}</Badge>
  )},
  { key: "isFeatured", label: "Featured", render: (v: boolean) => v ? <Badge className="bg-brand-yellow text-brand-deep-blue text-[10px]">⭐</Badge> : "-" },
]

const demoExams = [
  { id: "1", title: "SSC CGL", category: "SSC Exams", salary: "₹25,500 - ₹81,100", status: "PUBLISHED", isFeatured: true },
  { id: "2", title: "IBPS PO", category: "Banking Exams", salary: "₹36,000 - ₹63,840", status: "PUBLISHED", isFeatured: true },
  { id: "3", title: "UPSC CSE", category: "UPSC Exams", salary: "₹56,100 - ₹2,25,000", status: "PUBLISHED", isFeatured: true },
  { id: "4", title: "RRB NTPC", category: "Railway Exams", salary: "₹19,900 - ₹29,200", status: "PUBLISHED", isFeatured: false },
  { id: "5", title: "CDS", category: "Defence Exams", salary: "₹56,100", status: "PUBLISHED", isFeatured: false },
  { id: "6", title: "CTET", category: "Teaching Exams", salary: "Eligibility Test", status: "DRAFT", isFeatured: false },
]

export function ExamsManager() {
  const [exams, setExams] = useState(demoExams)
  const [open, setOpen] = useState(false)

  return (
    <>
      <DataTable
        title="Manage Exams"
        description="Create and manage exam information pages"
        columns={columns}
        data={exams}
        onAdd={() => setOpen(true)}
        onEdit={(row) => toast.info(`Editing: ${row.title}`)}
        onDelete={(row) => { setExams(exams.filter(e => e.id !== row.id)); toast.success("Exam deleted") }}
        addLabel="Add Exam"
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader><DialogTitle>Add New Exam</DialogTitle></DialogHeader>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Exam created!"); setOpen(false) }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-2"><Label>Title</Label><Input placeholder="SSC CGL" required /></div>
              <div className="space-y-2"><Label>Category</Label><Select defaultValue="ssc-exams"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="ssc-exams">SSC Exams</SelectItem><SelectItem value="banking-exams">Banking Exams</SelectItem><SelectItem value="upsc-exams">UPSC Exams</SelectItem><SelectItem value="railway-exams">Railway Exams</SelectItem><SelectItem value="defence-exams">Defence Exams</SelectItem><SelectItem value="teaching-exams">Teaching Exams</SelectItem></SelectContent></Select></div>
              <div className="space-y-2"><Label>Salary</Label><Input placeholder="Pay Level..." /></div>
              <div className="col-span-2 space-y-2"><Label>Description</Label><Textarea placeholder="Exam description..." /></div>
              <div className="col-span-2 space-y-2"><Label>Eligibility</Label><Textarea placeholder="Eligibility criteria..." /></div>
              <div className="col-span-2 space-y-2"><Label>Exam Pattern</Label><Textarea placeholder="Exam pattern details..." /></div>
              <div className="col-span-2 space-y-2"><Label>Syllabus</Label><Textarea placeholder="Syllabus details..." /></div>
              <div className="space-y-2"><Label>Status</Label><Select defaultValue="DRAFT"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="DRAFT">Draft</SelectItem><SelectItem value="PUBLISHED">Published</SelectItem></SelectContent></Select></div>
              <div className="space-y-2 flex items-end"><label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Featured</label></div>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-primary text-white">Create Exam</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
