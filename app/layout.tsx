import type { Metadata } from "next"
import { Fraunces, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Toaster } from "@/components/ui/sonner"
import { site } from "@/lib/site"
import { ogImage } from "@/lib/seo"
import { absoluteUrl, siteBaseUrl } from "@/lib/urls"

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
})

export const metadata: Metadata = {
  title: {
    default: `${site.name} — ${site.kicker}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  // The canonical origin is where the site is actually published.
  // lipsonfoundation.org is owned but parked, so it must not be used here.
  metadataBase: new URL(siteBaseUrl),
  openGraph: {
    title: site.name,
    description: site.description,
    url: absoluteUrl("/"),
    locale: "en_US",
    type: "website",
    siteName: site.name,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: [ogImage.url],
  },
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        fraunces.variable,
        sourceSans.variable
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
