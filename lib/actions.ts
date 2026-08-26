"use server"

import { saveInquiry, type InquiryType } from "@/lib/inquiries"

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
    if (!fields[key]) return `Please fill in ${key.replace(/([A-Z])/g, " $1").toLowerCase()}.`
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
      error: "We could not save that just now. Please try again, or email hello@lipsonfoundation.org.",
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

export async function submitGift(formData: FormData): Promise<ActionResult> {
  const amountChoice = read(formData, "amount")
  const customAmount = read(formData, "customAmount")
  const amount =
    amountChoice === "other" ? customAmount.replace(/[^0-9.]/g, "") : amountChoice

  const fields = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    frequency: read(formData, "frequency") || "once",
    amount,
    note: read(formData, "note"),
  }

  const missing = requireFields(fields, ["name", "email", "amount"])
  if (missing) return { ok: false, error: missing }
  if (!emailPattern.test(fields.email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }
  const numeric = Number(fields.amount)
  if (!Number.isFinite(numeric) || numeric < 5) {
    return { ok: false, error: "Please choose or enter a gift of at least $5." }
  }

  return persist("give", { ...fields, amount: numeric.toFixed(2) })
}

export async function submitInvolved(formData: FormData): Promise<ActionResult> {
  const fields = {
    name: read(formData, "name"),
    email: read(formData, "email"),
    role: read(formData, "role") || "volunteer",
    organization: read(formData, "organization"),
    message: read(formData, "message"),
  }

  const missing = requireFields(fields, ["name", "email", "message"])
  if (missing) return { ok: false, error: missing }
  if (!emailPattern.test(fields.email)) {
    return { ok: false, error: "Please enter a valid email address." }
  }
  if (fields.message.length < 12) {
    return { ok: false, error: "Please tell us a bit more about how you would like to help." }
  }

  return persist("involved", fields)
}
