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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { submitInvolved } from "@/lib/actions"

const roles = [
  { value: "volunteer", label: "Volunteer my time" },
  { value: "mentor", label: "Mentor a young adult" },
  { value: "partner", label: "Partner as an organization" },
  { value: "inkind", label: "Give goods or professional skills" },
]

export function InvolvedForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(formData: FormData) {
    setPending(true)
    const result = await submitInvolved(formData)
    setPending(false)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    setSent(true)
    toast.success("We received your offer to help.")
  }

  if (sent) {
    return (
      <Alert>
        <AlertTitle>Glad you are here.</AlertTitle>
        <AlertDescription>
          We will follow up to match your offer with what the community needs
          right now. Thank you for rolling up your sleeves with us.
        </AlertDescription>
      </Alert>
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
          <FieldLabel htmlFor="organization">Organization (optional)</FieldLabel>
          <Input id="organization" name="organization" autoComplete="organization" />
        </Field>
        <FieldSet>
          <FieldLegend variant="label">How would you like to help?</FieldLegend>
          <RadioGroup name="role" defaultValue="volunteer" className="gap-2">
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
            placeholder="Skills, availability, who you serve, or what you can offer."
          />
          <FieldDescription>
            A few sentences is enough. We will take it from there.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? (
          <Spinner data-icon="inline-start" />
        ) : (
          <HandshakeIcon data-icon="inline-start" />
        )}
        Offer to help
      </Button>
    </form>
  )
}
