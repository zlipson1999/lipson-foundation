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
  FieldLegend,
  FieldSet,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Spinner } from "@/components/ui/spinner"
import { submitForm } from "@/lib/submit"
import {
  FormConfirmation,
  FormError,
} from "@/components/form-confirmation"

const roles = [
  { value: "host", label: "Host sessions at a veterans post" },
  { value: "veteran", label: "Train or mentor as a veteran" },
  { value: "school", label: "Refer a young person" },
  { value: "career", label: "Lead a Career Exploration Night" },
  { value: "meal", label: "Help with meals" },
  { value: "support", label: "Talk about sponsoring a session" },
]

export function HelpForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState<"server" | "email" | null>(null)
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
    setSent(result.via)
    if (result.via === "server") toast.success("We received your note.")
  }

  if (sent) {
    return sent === "email" ? (
      <FormConfirmation title="Your email draft is open.">
        Nothing has been sent yet. Send the draft that just opened and we
        will follow up to match what you can offer with what the program
        actually needs.
      </FormConfirmation>
    ) : (
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
        <FieldSet>
          <FieldLegend variant="label">How would you like to help?</FieldLegend>
          <RadioGroup name="role" defaultValue="host" className="gap-2">
            {roles.map((role) => (
              <Field key={role.value} orientation="horizontal">
                <RadioGroupItem value={role.value} id={`role-${role.value}`} />
                <FieldLabel htmlFor={`role-${role.value}`} className="font-normal">
                  {role.label}
                </FieldLabel>
              </Field>
            ))}
          </RadioGroup>
        </FieldSet>
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
