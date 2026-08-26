"use client"

import { site } from "@/lib/site"
import type { ActionResult } from "@/lib/actions"

export type FormKind = "contact" | "help" | "donate"

/**
 * `via` tells the form what actually happened. On the static export nothing
 * is submitted — an email draft is opened — so the confirmation copy must
 * not claim the note was received.
 */
export type SubmitResult =
  | { ok: true; via: "server" | "email" }
  | { ok: false; error: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const subjects: Record<FormKind, string> = {
  contact: "Contact form",
  help: "Get involved form",
  donate: "Donate form",
}

const shortMessageErrors: Record<FormKind, string> = {
  contact: "Please share a little more so we know how to help.",
  help: "Please tell us a bit more about how you would like to help.",
  donate: "Please share a little more so we know how to follow up.",
}

function read(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function collect(kind: FormKind, formData: FormData): Record<string, string> {
  if (kind === "contact") {
    return {
      name: read(formData, "name"),
      email: read(formData, "email"),
      topic: read(formData, "topic") || "general",
      message: read(formData, "message"),
    }
  }
  if (kind === "help") {
    return {
      name: read(formData, "name"),
      email: read(formData, "email"),
      role: read(formData, "role") || "support",
      organization: read(formData, "organization"),
      message: read(formData, "message"),
    }
  }
  return {
    name: read(formData, "name"),
    email: read(formData, "email"),
    ask: read(formData, "ask") || "other",
    message: read(formData, "message"),
  }
}

function validate(kind: FormKind, fields: Record<string, string>): string | null {
  for (const key of ["name", "email", "message"]) {
    if (!fields[key]) {
      return `Please fill in ${key.replace(/([A-Z])/g, " $1").toLowerCase()}.`
    }
  }
  if (!emailPattern.test(fields.email)) {
    return "Please enter a valid email address."
  }
  if (fields.message.length < 12) {
    return shortMessageErrors[kind]
  }
  return null
}

// On the static (GitHub Pages) build there is no server, so we open a
// pre-filled email draft to the foundation instead of persisting the inquiry.
function submitByEmail(kind: FormKind, fields: Record<string, string>): SubmitResult {
  const subject = `[${site.domain}] ${subjects[kind]}`
  const body = Object.entries(fields)
    .filter(([, value]) => value)
    .map(([key, value]) => `${key}: ${value}`)
    .join("\n")
  const href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  window.location.href = href
  return { ok: true, via: "email" }
}

export async function submitForm(
  kind: FormKind,
  formData: FormData
): Promise<SubmitResult> {
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT) {
    const fields = collect(kind, formData)
    const error = validate(kind, fields)
    if (error) return { ok: false, error }
    return submitByEmail(kind, fields)
  }

  const actions = await import("@/lib/actions")
  const result: ActionResult =
    kind === "contact"
      ? await actions.submitContact(formData)
      : kind === "help"
        ? await actions.submitHelp(formData)
        : await actions.submitDonate(formData)

  return result.ok ? { ok: true, via: "server" } : result
}
