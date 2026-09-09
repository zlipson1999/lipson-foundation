"use client"

import { site } from "@/lib/site"
import type { ActionResult } from "@/lib/actions"

export type FormKind = "contact" | "help" | "donate"

/**
 * ok means the note was actually delivered — the dev server action, or the
 * live site's form-delivery service. There is no mailto fallback (owner-
 * directed 9 Sep 2026: everything goes through the online form only, never
 * an email app); when delivery fails the form shows the error instead.
 */
export type SubmitResult = { ok: true } | { ok: false; error: string }

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
    firstName: read(formData, "firstName"),
    lastName: read(formData, "lastName"),
    email: read(formData, "email"),
    ask: read(formData, "ask") || "other",
    amount: read(formData, "amount"),
    frequency: read(formData, "frequency") || "one-time",
    dedication: read(formData, "dedication"),
    organization: read(formData, "organization"),
    address: read(formData, "address"),
    address2: read(formData, "address2"),
    city: read(formData, "city"),
    state: read(formData, "state"),
    postalCode: read(formData, "postalCode"),
    cellPhone: read(formData, "cellPhone"),
    workPhone: read(formData, "workPhone"),
    message: read(formData, "message"),
  }
}

/**
 * The donate form asks for a mailing address the way the giving form does, and
 * its note is optional, so it does not share the name/email/message trio the
 * other two require.
 */
const requiredFields: Record<FormKind, string[]> = {
  contact: ["name", "email", "message"],
  help: ["name", "email", "message"],
  donate: [
    "firstName",
    "lastName",
    "email",
    "address",
    "city",
    "state",
    "postalCode",
  ],
}

const fieldLabels: Record<string, string> = {
  firstName: "your first name",
  lastName: "your last name",
  postalCode: "your ZIP code",
  address: "your address",
  city: "your city",
  state: "your state",
}

function validate(kind: FormKind, fields: Record<string, string>): string | null {
  for (const key of requiredFields[kind]) {
    if (!fields[key]) {
      const label =
        fieldLabels[key] ?? key.replace(/([A-Z])/g, " $1").toLowerCase()
      return `Please fill in ${label}.`
    }
  }
  if (!emailPattern.test(fields.email)) {
    return "Please enter a valid email address."
  }
  // The donate form's note is optional, so a short one is not an error.
  if (kind !== "donate" && fields.message.length < 12) {
    return shortMessageErrors[kind]
  }
  return null
}

/**
 * Owner-directed (9 Sep 2026): the live static site auto-sends submissions
 * to the foundation inbox through Web3Forms — the founder asked for
 * delivered mail, not an opened draft. (First attempt used FormSubmit.co,
 * whose activation page proved unreachable the same day — the service
 * appears defunct.) The access key was created by the founder at
 * web3forms.com for zlipson@lipsonfoundation.org and supplied 9 Sep 2026.
 * There is deliberately NO mailto fallback — see SubmitResult above.
 */
const web3formsAccessKey = "8951630a-175d-4a14-9f5f-acf00f77c273"

async function submitByService(
  kind: FormKind,
  fields: Record<string, string>
): Promise<SubmitResult> {
  const emailUs = `Please try again in a moment, or email us at ${site.email}.`
  try {
    const controller = new AbortController()
    const timer = setTimeout(() => controller.abort(), 8000)
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: web3formsAccessKey,
        subject: `[${site.domain}] ${subjects[kind]}`,
        from_name: fields.name || `${fields.firstName ?? ""} ${fields.lastName ?? ""}`.trim() || site.name,
        ...fields,
      }),
      signal: controller.signal,
    })
    clearTimeout(timer)
    const data = (await res.json()) as { success?: boolean; message?: string }
    if (!res.ok || !data.success) {
      // Surface the service's reason so a failure report is actionable.
      const detail = data.message || `error ${res.status}`
      return { ok: false, error: `We could not send your note (${detail}). ${emailUs}` }
    }
    return { ok: true }
  } catch {
    return { ok: false, error: `We could not send your note right now. ${emailUs}` }
  }
}

export async function submitForm(
  kind: FormKind,
  formData: FormData
): Promise<SubmitResult> {
  if (process.env.NEXT_PUBLIC_STATIC_EXPORT) {
    const fields = collect(kind, formData)
    const error = validate(kind, fields)
    if (error) return { ok: false, error }
    // No email-app fallback (owner-directed): success or an on-screen error.
    return submitByService(kind, fields)
  }

  const actions = await import("@/lib/actions")
  const result: ActionResult =
    kind === "contact"
      ? await actions.submitContact(formData)
      : kind === "help"
        ? await actions.submitHelp(formData)
        : await actions.submitDonate(formData)

  return result.ok ? { ok: true } : result
}
