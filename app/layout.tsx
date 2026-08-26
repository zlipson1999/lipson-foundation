import type { Metadata } from "next"
import { Fraunces, JetBrains_Mono, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import { site } from "@/lib/site"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Community programs. Completely free.`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL("https://lipsonfoundation.org"),
  openGraph: {
    title: site.name,
    description: site.description,
    locale: "en_US",
    type: "website",
    siteName: site.name,
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        fraunces.variable,
        sourceSans.variable,
        jetbrains.variable
      )}
    >
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col">
          {children}
        </main>
        <SiteFooter />
        <Toaster />
      </body>
    </html>
  )
}
