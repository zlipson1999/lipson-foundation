"use client"

import { useEffect, useRef } from "react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

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

/** Inline, announced validation error. The toast alone is easy to miss. */
export function FormError({ message }: { message: string }) {
  return (
    <Alert variant="destructive" className="border-destructive">
      <AlertTitle>That did not send</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  )
}
