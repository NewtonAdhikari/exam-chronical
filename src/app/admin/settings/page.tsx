"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { AdminLayout } from "@/components/admin/admin-layout"

export default function SettingsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        <div><h1 className="text-2xl font-bold">Settings</h1><p className="text-muted-foreground text-sm">Configure your platform settings</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader><CardTitle className="text-base">General Settings</CardTitle><CardDescription>Basic platform configuration</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Site Name</Label><Input defaultValue="Exam Chronicle" /></div>
              <div className="space-y-2"><Label>Tagline</Label><Input defaultValue="Your Gateway to Government Exam Success" /></div>
              <div className="space-y-2"><Label>Admin Email</Label><Input defaultValue="admin@examchronicle.com" /></div>
              <div className="space-y-2"><Label>Description</Label><Textarea defaultValue="India's #1 Government Exam Preparation Platform" /></div>
              <Button className="bg-primary text-white">Save Changes</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Feature Toggles</CardTitle><CardDescription>Enable or disable features</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              {[
                { label: "User Registration", desc: "Allow new user sign-ups", on: true },
                { label: "Comments", desc: "Enable comments on blog posts", on: true },
                { label: "Dark Mode", desc: "Allow dark mode toggle", on: true },
                { label: "Google Login", desc: "Enable Google OAuth", on: true },
                { label: "Push Notifications", desc: "Send browser notifications", on: false },
                { label: "Maintenance Mode", desc: "Show maintenance page to users", on: false },
              ].map((f) => (
                <div key={f.label} className="flex items-center justify-between">
                  <div><p className="text-sm font-medium">{f.label}</p><p className="text-xs text-muted-foreground">{f.desc}</p></div>
                  <Switch defaultChecked={f.on} />
                </div>
              ))}
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">SEO Settings</CardTitle><CardDescription>Search engine optimization</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Meta Title</Label><Input defaultValue="Exam Chronicle - Government Exam Preparation Platform" /></div>
              <div className="space-y-2"><Label>Meta Description</Label><Textarea defaultValue="Your one-stop destination for government exam preparation" /></div>
              <div className="space-y-2"><Label>Google Analytics ID</Label><Input placeholder="G-XXXXXXXXXX" /></div>
              <Button className="bg-primary text-white">Save SEO Settings</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader><CardTitle className="text-base">Supabase Connection</CardTitle><CardDescription>Database & authentication settings</CardDescription></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2"><Label>Supabase URL</Label><Input defaultValue={process.env.NEXT_PUBLIC_SUPABASE_URL || "https://your-project.supabase.co"} /></div>
              <div className="space-y-2"><Label>Anon Key</Label><Input type="password" defaultValue="••••••••••••" /></div>
              <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 font-medium">✓ Supabase client configured</p>
                <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-1">Update .env with your project credentials to connect.</p>
              </div>
              <Button className="bg-primary text-white">Test Connection</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  )
}
