"use client"

import { useState } from "react"
import { CheckIcon, CopySimpleIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

/**
 * One tap puts the EIN on the clipboard — the number donors actually need at
 * tax time. The label flips to a visible confirmation; no clipboard access
 * (insecure context, denied permission) falls back to a prompt the visitor
 * can copy from by hand.
 */
export function CopyEin() {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.ein)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.prompt("Copy the EIN:", site.ein)
    }
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="sm"
      onClick={copy}
      aria-label={`Copy EIN ${site.ein} to clipboard`}
      className="print-hidden self-start"
    >
      {copied ? (
        <CheckIcon data-icon="inline-start" />
      ) : (
        <CopySimpleIcon data-icon="inline-start" />
      )}
      {copied ? "Copied" : "Copy EIN"}
    </Button>
  )
}
