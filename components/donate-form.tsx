"use client"

import { useState } from "react"
import { toast } from "sonner"
import { HeartIcon } from "@phosphor-icons/react"
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
import { donateAsks } from "@/lib/site"
import { submitForm } from "@/lib/submit"

export function DonateForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(formData: FormData) {
    setPending(true)
    const result = await submitForm("donate", formData)
    setPending(false)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    setSent(true)
    toast.success("We received your note.")
  }

  if (sent) {
    return (
      <Alert className="border-gold bg-secondary">
        <AlertTitle>Thank you. We have your note.</AlertTitle>
        <AlertDescription>
          There is no checkout on this site. Someone from Lipson Foundation
          will follow up about next steps. Do not send a card number here.
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
        <FieldSet>
          <FieldLegend variant="label">How would you like to help?</FieldLegend>
          <RadioGroup name="ask" defaultValue="session" className="gap-2">
            {donateAsks.map((ask) => (
              <Field key={ask.value} orientation="horizontal">
                <RadioGroupItem value={ask.value} id={`ask-${ask.value}`} />
                <FieldLabel htmlFor={`ask-${ask.value}`} className="font-normal">
                  {ask.title} — {ask.body}
                </FieldLabel>
              </Field>
            ))}
          </RadioGroup>
        </FieldSet>
        <Field>
          <FieldLabel htmlFor="message">Anything we should know</FieldLabel>
          <Textarea
            id="message"
            name="message"
            rows={5}
            required
            placeholder="A session you want to sponsor, a meal you can cover, or a question before you give."
          />
          <FieldDescription>
            We will not process a payment on this page. This form starts the
            conversation.
          </FieldDescription>
        </Field>
      </FieldGroup>
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? <Spinner data-icon="inline-start" /> : <HeartIcon data-icon="inline-start" />}
        Send this
      </Button>
    </form>
  )
}
