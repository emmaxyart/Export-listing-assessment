import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { TopHeader } from "@/components/top-header"
import { Navigation } from "@/components/navigation"

export const metadata: Metadata = {
  title: "Expert Listing - Dashboard",
  description: "Expert Listing Dashboard Application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <style>{`
          @font-face {
            font-family: 'SF Pro Display';
            src: -apple-system-font;
            font-weight: 100 900;
          }
        `}</style>
      </head>
      <body className={`font-sans antialiased bg-[#F9FAFB]`}>
        <TopHeader />
        <Navigation />
        {children}
        <Analytics />
      </body>
    </html>
  )
}