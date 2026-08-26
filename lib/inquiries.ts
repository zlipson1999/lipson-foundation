import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"

const dataDir = path.join(process.cwd(), ".data")
const dataFile = path.join(dataDir, "inquiries.json")

export type InquiryType = "contact" | "give" | "involved"

export type Inquiry = {
  id: string
  type: InquiryType
  createdAt: string
  payload: Record<string, string>
}

async function readAll(): Promise<Inquiry[]> {
  try {
    const raw = await readFile(dataFile, "utf8")
    const parsed = JSON.parse(raw) as Inquiry[]
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

export async function saveInquiry(
  type: InquiryType,
  payload: Record<string, string>
): Promise<Inquiry> {
  const inquiry: Inquiry = {
    id: crypto.randomUUID(),
    type,
    createdAt: new Date().toISOString(),
    payload,
  }

  await mkdir(dataDir, { recursive: true })
  const existing = await readAll()
  existing.push(inquiry)
  await writeFile(dataFile, JSON.stringify(existing, null, 2))
  return inquiry
}
