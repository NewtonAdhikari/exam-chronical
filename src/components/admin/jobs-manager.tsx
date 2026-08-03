"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "sonner"

const columns = [
  { key: "title", label: "Title", render: (v: string) => <span className="font-medium line-clamp-1">{v}</span> },
  { key: "department", label: "Department" },
  { key: "vacancies", label: "Vacancies", render: (v: number) => v ? v.toLocaleString() : "-" },
  { key: "status", label: "Status", render: (v: string) => (
    <Badge variant={v === "PUBLISHED" ? "default" : "secondary"} className={v === "PUBLISHED" ? "bg-emerald-500 text-white" : ""}>{v}</Badge>
  )},
  { key: "isFeatured", label: "Featured", render: (v: boolean) => v ? <Badge className="bg-brand-yellow text-brand-deep-blue text-[10px]">Yes</Badge> : "No" },
  { key: "isUrgent", label: "Urgent", render: (v: boolean) => v ? <Badge className="bg-brand-red text-white text-[10px]">Yes</Badge> : "No" },
]

// Demo data - in production this comes from Supabase/Prisma
const demoJobs = [
  { id: "1", title: "SSC CGL 2026 - Combined Graduate Level Examination", department: "Staff Selection Commission", vacancies: 14582, status: "PUBLISHED", isFeatured: true, isUrgent: true },
  { id: "2", title: "IBPS PO 2026 - Probationary Officer Recruitment", department: "IBPS", vacancies: 4455, status: "PUBLISHED", isFeatured: true, isUrgent: false },
  { id: "3", title: "RRB NTPC 2026 - Non-Technical Popular Categories", department: "Railway Recruitment Board", vacancies: 35208, status: "PUBLISHED", isFeatured: true, isUrgent: false },
  { id: "4", title: "Indian Army Agniveer Recruitment 2026", department: "Indian Army", vacancies: 40000, status: "PUBLISHED", isFeatured: false, isUrgent: true },
  { id: "5", title: "CTET 2026 - Central Teacher Eligibility Test", department: "CBSE", vacancies: 0, status: "DRAFT", isFeatured: false, isUrgent: false },
  { id: "6", title: "UP Police Constable Recruitment 2026", department: "UP Police Board", vacancies: 60244, status: "PUBLISHED", isFeatured: false, isUrgent: true },
]

export function JobsManager() {
  const [jobs, setJobs] = useState(demoJobs)
  const [open, setOpen] = useState(false)

  const handleAdd = () => setOpen(true)
  const handleEdit = (row: any) => { toast.info(`Editing: ${row.title}`) }
  const handleDelete = (row: any) => {
    setJobs(jobs.filter(j => j.id !== row.id))
    toast.success("Job deleted successfully")
  }

  return (
    <>
      <DataTable
        title="Manage Jobs"
        description="Create, edit and publish government job notifications"
        columns={columns}
        data={jobs}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onDelete={handleDelete}
        addLabel="Add Job"
        searchPlaceholder="Search jobs..."
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Add New Job</DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); toast.success("Job created!"); setOpen(false) }}>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2 space-y-2"><Label>Title</Label><Input placeholder="SSC CGL 2026..." required /></div>
              <div className="space-y-2"><Label>Department</Label><Input placeholder="Staff Selection Commission" required /></div>
              <div className="space-y-2"><Label>Vacancies</Label><Input type="number" placeholder="0" /></div>
              <div className="space-y-2"><Label>Qualification</Label><Input placeholder="Graduation" /></div>
              <div className="space-y-2"><Label>Age Limit</Label><Input placeholder="18-32 years" /></div>
              <div className="space-y-2"><Label>Salary</Label><Input placeholder="Pay Level 4-7" /></div>
              <div className="space-y-2"><Label>Application Fee</Label><Input placeholder="₹100" /></div>
              <div className="col-span-2 space-y-2"><Label>Selection Process</Label><Textarea placeholder="Tier-I, Tier-II..." /></div>
              <div className="space-y-2"><Label>Official Website</Label><Input type="url" placeholder="https://ssc.nic.in" /></div>
              <div className="space-y-2"><Label>Apply Link</Label><Input type="url" placeholder="https://ssc.nic.in" /></div>
              <div className="space-y-2"><Label>Status</Label>
                <Select defaultValue="DRAFT"><SelectTrigger><SelectValue /></SelectTrigger><SelectContent><SelectItem value="DRAFT">Draft</SelectItem><SelectItem value="PUBLISHED">Published</SelectItem></SelectContent></Select>
              </div>
              <div className="space-y-2 flex items-end gap-4">
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Featured</label>
                <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Urgent</label>
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
              <Button type="submit" className="bg-primary text-white">Create Job</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
