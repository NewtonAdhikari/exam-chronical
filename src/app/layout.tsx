import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Exam Chronicle - Government Exam Preparation Platform",
    template: "%s | Exam Chronicle",
  },
  description: "Your one-stop destination for government exam preparation. Get latest job notifications, current affairs, mock tests, study materials, and more.",
  keywords: ["government exams", "SSC", "banking exams", "current affairs", "mock tests", "study material", "job notifications", "competitive exams", "IBPS", "UPSC", "Railway", "Defence"],
  authors: [{ name: "Exam Chronicle" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Exam Chronicle - Government Exam Preparation Platform",
    description: "Latest government job notifications, current affairs, mock tests & study materials",
    type: "website",
    siteName: "Exam Chronicle",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exam Chronicle - Government Exam Preparation Platform",
    description: "Latest government job notifications, current affairs, mock tests & study materials",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="top-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
