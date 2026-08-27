"use server"

import { saveInquiry, type InquiryType } from "@/lib/inquiries"
import { site } from "@/lib/site"

export type ActionResult =
  | { ok: true }
  | { ok: false; error: string }

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function read(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === "string" ? value.trim() : ""
}

function requireFields(
  fields: Record<string, string>,
  keys: string[]
): string | null {
  for (const key of keys) {
    if (!fields[key]) {
      return `Please fill in ${key.replace(/([A-Z])/g, " $1").toLowerCase()}.`
    }
  }
  return null
}

async function persist(
  type: InquiryType,
  payload: Record<string, string>
): Promise<ActionResult> {
  try {
    await saveInquiry(type, payload)
    return { ok: true }
  } catch {
    return {
      ok: false,
      error: `We could not save that just now. Please try again, or email ${site.email}.`,
    }
  }
}

export async function submitContact(formData: FormData): Promise<ActionResult> {
  const fields = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    topic: read(formData, "topic") || "general",
    message: read(formData, "message"),
  }

  const missing = requireFields(fields, ["name", "email", "message"])
  if (missing) return { ok: false, error: missing }
  if (!emailPattern.test(fields.email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }
  if (fields.message.length < 12) {
    return { ok: false, error: "Please share a little more so we know how to help." }
  }

  return persist("contact", fields)
}

export async function submitHelp(formData: FormData): Promise<ActionResult> {
  const fields = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    role: read(formData, "role") || "support",
    organization: read(formData, "organization"),
    message: read(formData, "message"),
  }

  const missing = requireFields(fields, ["name", "email", "message"])
  if (missing) return { ok: false, error: missing }
  if (!emailPattern.test(fields.email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }
  if (fields.message.length < 12) {
    return {
      ok: false,
      error: "Please tell us a bit more about how you would like to help.",
    }
  }

  return persist("involved", fields)
}

// The donate form collects a mailing address the way the giving form does, and
// its note is optional - so unlike the other two, it does not require one.
export async function submitDonate(formData: FormData): Promise<ActionResult> {
  const fields = {
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

  const missing = requireFields(fields, [
    "firstName",
    "lastName",
    "email",
    "address",
    "city",
    "state",
    "postalCode",
  ])
  if (missing) return { ok: false, error: missing }
  if (!emailPattern.test(fields.email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }

  return persist("give", fields)
}
