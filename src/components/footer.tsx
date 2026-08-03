import Link from "next/link"
import {
  BookOpen, Briefcase, GraduationCap, Mail, Phone, MapPin,
  Facebook, Twitter, Youtube, Instagram, Send
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const quickLinks = [
  { label: "Latest Jobs", href: "#jobs" },
  { label: "Upcoming Exams", href: "#exams" },
  { label: "Current Affairs", href: "#current-affairs" },
  { label: "Mock Tests", href: "#mock-tests" },
  { label: "Study Material", href: "#study-material" },
  { label: "Results", href: "#results" },
  { label: "Admit Cards", href: "#admit-cards" },
  { label: "Answer Keys", href: "#answer-keys" },
]

const examLinks = [
  "SSC CGL", "SSC CHSL", "IBPS PO", "SBI PO", "RRB NTPC",
  "UPSC CSE", "CDS", "NDA", "CTET", "State PSC",
]

const categories = [
  "SSC", "Banking", "Railway", "Defence", "Teaching",
  "State Govt", "UPSC", "Police",
]

export function Footer() {
  return (
    <footer className="bg-brand-deep-blue text-white mt-auto">
      {/* Newsletter section */}
      <div className="border-b border-blue-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-brand-yellow flex items-center justify-center">
                <Mail className="h-5 w-5 text-brand-deep-blue" />
              </div>
              <div>
                <p className="font-semibold">Subscribe to Our Newsletter</p>
                <p className="text-sm text-blue-200">Get daily updates on jobs, exams & current affairs</p>
              </div>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input placeholder="Enter your email" className="bg-blue-900/50 border-blue-700 text-white placeholder:text-blue-300 w-full md:w-72" />
              <Button className="bg-brand-yellow hover:bg-yellow-500 text-brand-deep-blue font-semibold shrink-0">
                <Send className="h-4 w-4 mr-1" /> Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <GraduationCap className="h-4 w-4 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">Exam </span>
                <span className="text-lg font-bold text-brand-red">Chronicle</span>
              </div>
            </div>
            <p className="text-sm text-blue-200 mb-4">
              Your one-stop destination for government exam preparation. We provide the latest job notifications, study materials, mock tests, and current affairs to help you succeed.
            </p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Youtube, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-8 h-8 rounded-lg bg-blue-800 hover:bg-primary flex items-center justify-center transition-colors">
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-yellow">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-blue-200 hover:text-brand-yellow transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Exams */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-yellow">Popular Exams</h3>
            <ul className="space-y-2">
              {examLinks.map((exam) => (
                <li key={exam}>
                  <Link href={`#exam/${exam.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm text-blue-200 hover:text-brand-yellow transition-colors">
                    {exam}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4 text-brand-yellow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <Mail className="h-4 w-4 text-brand-yellow shrink-0" /> support@examchronicle.com
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <Phone className="h-4 w-4 text-brand-yellow shrink-0" /> +91 98765 43210
              </li>
              <li className="flex items-center gap-2 text-sm text-blue-200">
                <MapPin className="h-4 w-4 text-brand-yellow shrink-0" /> New Delhi, India
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-semibold mb-2">Categories</h4>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <Badge key={cat} variant="secondary" className="text-xs bg-blue-800 text-blue-200 hover:bg-primary hover:text-white cursor-pointer transition-colors">
                    {cat}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-blue-300">
            <p>© 2026 Exam Chronicle. All rights reserved.</p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-brand-yellow transition-colors">Disclaimer</Link>
              <Link href="#" className="hover:text-brand-yellow transition-colors">Sitemap</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
