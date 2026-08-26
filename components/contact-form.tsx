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

const topics = [
  { value: "general", label: "General question" },
  { value: "host", label: "Host a veterans post" },
  { value: "veteran", label: "Train or mentor" },
  { value: "school", label: "Refer a young person" },
  { value: "support", label: "Support or meals" },
]

export function ContactForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState<"server" | "email" | null>(null)
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
    setSent(result.via)
    if (result.via === "server") toast.success("Message received. We will be in touch.")
  }

  if (sent) {
    return sent === "email" ? (
      <FormConfirmation title="Your email draft is open.">
        Nothing has been sent yet. Send the draft that just opened and
        someone from Lipson Foundation will reply to you, usually within two
        business days.
      </FormConfirmation>
    ) : (
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
        <FieldSet>
          <FieldLegend variant="label">What is this about?</FieldLegend>
          <RadioGroup name="topic" defaultValue="general" className="gap-2">
            {topics.map((topic) => (
              <Field key={topic.value} orientation="horizontal">
                <RadioGroupItem value={topic.value} id={`topic-${topic.value}`} />
                <FieldLabel htmlFor={`topic-${topic.value}`} className="font-normal">
                  {topic.label}
                </FieldLabel>
              </Field>
            ))}
          </RadioGroup>
        </FieldSet>
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
