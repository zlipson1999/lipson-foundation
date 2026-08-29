"use client"

import { useEffect, useRef, useState } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { site } from "@/lib/site"

/**
 * Shown in place of a form after it is submitted. The form — including the
 * button that had focus — unmounts at that moment, so focus is moved here
 * deliberately: otherwise it falls back to <body> and a keyboard or screen
 * reader user gets no indication that anything happened.
 */
export function FormConfirmation({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    ref.current?.focus()
  }, [])

  return (
    <Alert
      ref={ref}
      tabIndex={-1}
      className="border-gold bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
    >
      <AlertTitle>{title}</AlertTitle>
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  )
}

/**
 * The static export cannot send the note itself, so the visitor sends it by
 * email. The draft opens on their gesture — a real link, not a script
 * navigation — and the composed message stays on screen to copy, so nothing
 * is lost on a device with no mail app configured.
 */
export function EmailDraftConfirmation({
  href,
  body,
}: {
  href: string
  body: string
}) {
  const [copied, setCopied] = useState(false)

  async function copy() {
    try {
      await navigator.clipboard.writeText(body)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // No clipboard access: the message is already visible to select by hand.
    }
  }

  return (
    <FormConfirmation title="One more step: send it by email.">
      <p>
        Nothing has been sent yet. Open the pre-filled draft and send it, and
        someone from Lipson Foundation will be in touch.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button nativeButton={false} render={<a href={href} />}>
          Open your email app
        </Button>
        <Button type="button" variant="outline" onClick={copy}>
          {copied ? "Copied" : "Copy the message"}
        </Button>
      </div>
      <p className="mt-3">
        If nothing opens, copy the message and email it to{" "}
        <a href={`mailto:${site.email}`} className="underline">
          {site.email}
        </a>
        .
      </p>
      <pre className="mt-2 max-h-48 overflow-y-auto whitespace-pre-wrap border border-border bg-card p-3 font-sans text-xs leading-relaxed text-muted-foreground">
        {body}
      </pre>
    </FormConfirmation>
  )
}

/** Inline, announced validation error. The toast alone is easy to miss. */
export function FormError({ message }: { message: string }) {
  return (
    <Alert variant="destructive" className="border-destructive">
      <AlertTitle>That did not send</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
