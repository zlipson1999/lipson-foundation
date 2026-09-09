"use client"

import { useState } from "react"
import { toast } from "sonner"
import { HandshakeIcon } from "@phosphor-icons/react"
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

export function HelpForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function onSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    const result = await submitForm("help", formData)
    setPending(false)
    if (!result.ok) {
      setError(result.error)
      toast.error(result.error)
      return
    }
    setSent(true)
    toast.success("We received your note.")
  }

  if (sent) {
    return (
      <FormConfirmation title="Glad you wrote.">
        We will follow up to match what you can offer with what the program
        actually needs. Thank you.
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
        <Field>
          <FieldLabel htmlFor="organization">Post, school, or organization (optional)</FieldLabel>
          <Input id="organization" name="organization" autoComplete="organization" />
        </Field>
        {/* Free text on purpose: a fixed list would need re-editing every
            time a program or way to help is added. Reads like a subject line;
            lib/submit.ts and lib/actions.ts already pass "role" through as
            plain text. */}
        <Field>
          <FieldLabel htmlFor="role">How would you like to help?</FieldLabel>
          <Input
            id="role"
            name="role"
            required
            placeholder="Host a hall, coach, mentor, refer someone, cover meals, sponsor a session…"
          />
          <FieldDescription>
            A few words is plenty — like a subject line.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="message">Tell us more</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={6}
            required
            placeholder="Space you can offer, a young person you want to refer, a trade you can talk about, or a meal you can cover."
          />
          <FieldDescription>
            A few sentences is enough. We will take it from there.
          </FieldDescription>
        </Field>
      </FieldGroup>
      {error ? <FormError message={error} /> : null}
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? (
          <Spinner data-icon="inline-start" />
        ) : (
          <HandshakeIcon data-icon="inline-start" />
        )}
        Send this
      </Button>
    </form>
  )
}
