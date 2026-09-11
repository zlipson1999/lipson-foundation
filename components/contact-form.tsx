"use client"

import { useState } from "react"
import { toast } from "sonner"
import { ArrowRightIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { submitForm } from "@/lib/submit"
import {
  FormConfirmation,
  FormError,
} from "@/components/form-confirmation"

export function ContactForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    const result = await submitForm("contact", formData)
    setPending(false)
    if (!result.ok) {
      setError(result.error)
      toast.error(result.error)
      return
    }
    setSent(true)
    toast.success("Message received. We will be in touch.")
  }

  if (sent) {
    return (
      <FormConfirmation title="We have your note.">
        Thank you for writing. Someone from Lipson Foundation will reply to
        the email you shared, usually within two business days.
      </FormConfirmation>
    )
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <Field>
          <FieldLabel htmlFor="name">Full name</FieldLabel>
          <Input id="name" name="name" autoComplete="name" required />
        </Field>
        <Field>
          <FieldLabel htmlFor="email">Email</FieldLabel>
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </Field>
        {/* Free text, matching the help form: a fixed list would need
            re-editing as programs and supports are added. Reads like a
            subject line; the pipeline passes "topic" through as plain text. */}
        <Field>
          <FieldLabel htmlFor="topic">What is this about?</FieldLabel>
          <Input
            id="topic"
            name="topic"
            required
            placeholder="A question, offering a space, training, mentoring, a referral, support…"
          />
          <FieldDescription>
            A few words is plenty — like a subject line.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Message</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Tell us how we can help."
          />
          <FieldDescription>
            Share as much as you are comfortable with. We do not publish
            inquiries.
          </FieldDescription>
        </Field>
      </FieldGroup>
      {error ? <FormError message={error} /> : null}
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? <Spinner data-icon="inline-start" /> : <ArrowRightIcon data-icon="inline-start" />}
        Send message
      </Button>
    </form>
  )
}
