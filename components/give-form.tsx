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
  FieldTitle,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Spinner } from "@/components/ui/spinner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { giftAmounts, site } from "@/lib/site"
import { submitGift } from "@/lib/actions"

function formatAmount(value: string) {
  if (value === "other") return "Other"
  return `$${value}`
}

export function GiveForm() {
  const [amount, setAmount] = useState("100")
  const [frequency, setFrequency] = useState("once")
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState(false)

  async function onSubmit(formData: FormData) {
    formData.set("amount", amount)
    formData.set("frequency", frequency)
    setPending(true)
    const result = await submitGift(formData)
    setPending(false)
    if (!result.ok) {
      toast.error(result.error)
      return
    }
    setSent(true)
    toast.success("Gift intent received. Thank you.")
  }

  if (sent) {
    return (
      <Alert>
        <AlertTitle>Thank you for standing with us.</AlertTitle>
        <AlertDescription>
          We will follow up within two business days with next steps to complete
          your gift. Lipson Foundation Inc is a 501(c)(3); EIN {site.ein}. Please
          keep that number for your records.
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-6">
      <FieldGroup>
        <Field>
          <FieldTitle id="amount-label">Gift amount</FieldTitle>
          <ToggleGroup
            aria-labelledby="amount-label"
            spacing={2}
            value={[amount]}
            onValueChange={(value) => {
              if (value[0]) setAmount(value[0])
            }}
            className="flex-wrap"
          >
            {giftAmounts.map((value) => (
              <ToggleGroupItem key={value} value={value} variant="outline">
                {formatAmount(value)}
              </ToggleGroupItem>
            ))}
          </ToggleGroup>
        </Field>
        {amount === "other" ? (
          <Field>
            <FieldLabel htmlFor="customAmount">Custom amount (USD)</FieldLabel>
            <Input
              id="customAmount"
              name="customAmount"
              inputMode="decimal"
              placeholder="75"
              required
            />
          </Field>
        ) : null}
        <Field>
          <FieldTitle id="frequency-label">How often</FieldTitle>
          <ToggleGroup
            aria-labelledby="frequency-label"
            spacing={2}
            value={[frequency]}
            onValueChange={(value) => {
              if (value[0]) setFrequency(value[0])
            }}
          >
            <ToggleGroupItem value="once" variant="outline">
              One time
            </ToggleGroupItem>
            <ToggleGroupItem value="monthly" variant="outline">
              Monthly
            </ToggleGroupItem>
          </ToggleGroup>
        </Field>
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
          <FieldDescription>
            We will use this only to complete your gift and send a receipt.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="note">Note (optional)</FieldLabel>
          <Textarea
            id="note"
            name="note"
            rows={4}
            placeholder="In honor of someone, or a program you care about."
          />
        </Field>
        <FieldSet>
          <FieldLegend className="sr-only">Acknowledgement</FieldLegend>
          <FieldDescription>
            This form records your intent. We do not charge a card here. A
            team member will follow up so the gift is processed securely.
          </FieldDescription>
        </FieldSet>
      </FieldGroup>
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? <Spinner data-icon="inline-start" /> : <HeartIcon data-icon="inline-start" />}
        Start this gift
      </Button>
    </form>
  )
}
