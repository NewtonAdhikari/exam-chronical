"use client"

import { Badge } from "@/components/ui/badge"
import { DataTable } from "@/components/admin/data-table"
import { toast } from "sonner"

const resultColumns = [
  { key: "title", label: "Result", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "examName", label: "Exam" },
  { key: "resultDate", label: "Date" },
  { key: "status", label: "Status", render: (v: string) => <Badge className={v === "PUBLISHED" ? "bg-emerald-500 text-white" : ""}>{v}</Badge> },
]
const demoResults = [
  { id: "1", title: "SSC CGL 2025 Tier-I Result", examName: "SSC CGL 2025", resultDate: "15 Jul 2026", status: "PUBLISHED" },
  { id: "2", title: "IBPS PO 2025 Mains Result", examName: "IBPS PO 2025", resultDate: "20 Jun 2026", status: "PUBLISHED" },
  { id: "3", title: "RRB NTPC 2025 CBT-2 Result", examName: "RRB NTPC 2025", resultDate: "10 May 2026", status: "PUBLISHED" },
]

const admitColumns = [
  { key: "title", label: "Admit Card", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "examName", label: "Exam" },
  { key: "releaseDate", label: "Release Date" },
]
const demoAdmits = [
  { id: "1", title: "SSC CGL 2026 Tier-I Admit Card", examName: "SSC CGL 2026", releaseDate: "20 Aug 2026" },
  { id: "2", title: "IBPS PO 2026 Prelims Admit Card", examName: "IBPS PO 2026", releaseDate: "01 Sep 2026" },
]

const keyColumns = [
  { key: "title", label: "Answer Key", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "examName", label: "Exam" },
  { key: "releaseDate", label: "Release Date" },
]
const demoKeys = [
  { id: "1", title: "SSC CGL 2025 Tier-I Answer Key", examName: "SSC CGL 2025", releaseDate: "01 Jun 2026" },
  { id: "2", title: "IBPS PO 2025 Prelims Answer Key", examName: "IBPS PO 2025", releaseDate: "15 May 2026" },
]

const commentColumns = [
  { key: "content", label: "Comment", render: (v: string) => <span className="line-clamp-1">{v}</span> },
  { key: "user", label: "User" },
  { key: "status", label: "Status", render: (v: string) => <Badge className={v === "APPROVED" ? "bg-emerald-500 text-white" : v === "PENDING" ? "bg-brand-yellow text-brand-deep-blue" : "bg-red-500 text-white"}>{v}</Badge> },
]
const demoComments = [
  { id: "1", content: "Great article! Very helpful for SSC preparation.", user: "Rahul S.", status: "APPROVED" },
  { id: "2", content: "Can you add more mock tests for IBPS PO?", user: "Priya P.", status: "PENDING" },
  { id: "3", content: "The current affairs section is amazing!", user: "Amit K.", status: "APPROVED" },
  { id: "4", content: "Need more previous year papers.", user: "Sneha R.", status: "PENDING" },
]

const notifColumns = [
  { key: "title", label: "Notification", render: (v: string) => <span className="font-medium">{v}</span> },
  { key: "type", label: "Type", render: (v: string) => <Badge variant="secondary">{v}</Badge> },
  { key: "sentTo", label: "Sent To" },
  { key: "date", label: "Date" },
]
const demoNotifs = [
  { id: "1", title: "SSC CGL 2026 Notification Published", type: "ALERT", sentTo: "All Users", date: "4 Aug 2026" },
  { id: "2", title: "Weekly Current Affairs Digest", type: "INFO", sentTo: "Subscribers", date: "3 Aug 2026" },
  { id: "3", title: "New Mock Test Available", type: "SUCCESS", sentTo: "SSC Aspirants", date: "2 Aug 2026" },
]

export function ResultsManager() {
  return <DataTable title="Results" description="Manage exam results" columns={resultColumns} data={demoResults} onAdd={() => toast.info("Add Result")} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="Add Result" />
}
export function AdmitCardsManager() {
  return <DataTable title="Admit Cards" description="Manage admit card releases" columns={admitColumns} data={demoAdmits} onAdd={() => toast.info("Add Admit Card")} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="Add Admit Card" />
}
export function AnswerKeysManager() {
  return <DataTable title="Answer Keys" description="Manage answer key releases" columns={keyColumns} data={demoKeys} onAdd={() => toast.info("Add Answer Key")} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} addLabel="Add Answer Key" />
}
export function CommentsManager() {
  return <DataTable title="Comments" description="Review and moderate user comments" columns={commentColumns} data={demoComments} onEdit={() => toast.info("Edit")} onDelete={() => toast.success("Deleted")} searchPlaceholder="Search comments..." />
}
export function NotificationsManager() {
  return <DataTable title="Notifications" description="Send push notifications and announcements" columns={notifColumns} data={demoNotifs} onAdd={() => toast.info("Send Notification")} addLabel="Send Notification" />
}
