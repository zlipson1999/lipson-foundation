"use client"

import { useState } from "react"
import { toast } from "sonner"
import { HeartIcon } from "@phosphor-icons/react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
import { donateAsks, site } from "@/lib/site"
import { submitForm } from "@/lib/submit"
import { FormConfirmation, FormError } from "@/components/form-confirmation"

export function DonateForm() {
  const [pending, setPending] = useState(false)
  const [sent, setSent] = useState<"server" | "email" | null>(null)
  const [error, setError] = useState<string | null>(null)
  // Both mirror the giving form: the amount box and the dedication note only
  // appear once they are relevant, rather than sitting empty on the page.
  const [ask, setAsk] = useState("session")
  const [dedicating, setDedicating] = useState(false)

  async function onSubmit(formData: FormData) {
    setPending(true)
    setError(null)
    const result = await submitForm("donate", formData)
    setPending(false)
    if (!result.ok) {
      setError(result.error)
      toast.error(result.error)
      return
    }
    setSent(result.via)
    if (result.via === "server") toast.success("We have your details.")
  }

  if (sent) {
    return sent === "email" ? (
      <FormConfirmation title="Your email draft is open.">
        Nothing has been sent yet. Send the draft that just opened and someone
        from Lipson Foundation will be in touch to complete your gift. Never
        put a card number in an email.
      </FormConfirmation>
    ) : (
      <FormConfirmation title="Thank you. We have your details.">
        Someone from Lipson Foundation will be in touch from {site.email} to
        complete your gift.
      </FormConfirmation>
    )
  }

  return (
    <form action={onSubmit} className="flex flex-col gap-8">
      <FieldSet>
        <FieldLegend>Donation information</FieldLegend>
        <FieldGroup>
          <FieldSet>
            <FieldLegend variant="label">Amount</FieldLegend>
            <RadioGroup
              name="ask"
              value={ask}
              onValueChange={(value) => setAsk(String(value))}
              className="gap-2"
            >
              {donateAsks.map((item) => (
                <Field key={item.value} orientation="horizontal">
                  <RadioGroupItem value={item.value} id={`ask-${item.value}`} />
                  <FieldLabel
                    htmlFor={`ask-${item.value}`}
                    className="font-normal"
                  >
                    {item.title} — {item.body}
                  </FieldLabel>
                </Field>
              ))}
            </RadioGroup>
          </FieldSet>

          {ask === "other" ? (
            <Field>
              <FieldLabel htmlFor="amount">Amount you have in mind</FieldLabel>
              <Input
                id="amount"
                name="amount"
                inputMode="decimal"
                placeholder="$"
              />
            </Field>
          ) : null}

          <FieldSet>
            <FieldLegend variant="label">Type of donation</FieldLegend>
            <RadioGroup name="frequency" defaultValue="one-time" className="gap-2">
              <Field orientation="horizontal">
                <RadioGroupItem value="one-time" id="frequency-one-time" />
                <FieldLabel htmlFor="frequency-one-time" className="font-normal">
                  One-time donation
                </FieldLabel>
              </Field>
              <Field orientation="horizontal">
                <RadioGroupItem value="recurring" id="frequency-recurring" />
                <FieldLabel
                  htmlFor="frequency-recurring"
                  className="font-normal"
                >
                  Recurring donation
                </FieldLabel>
              </Field>
            </RadioGroup>
          </FieldSet>

          <Field orientation="horizontal">
            <Checkbox
              id="dedicate"
              name="dedicate"
              checked={dedicating}
              onCheckedChange={(value) => setDedicating(Boolean(value))}
            />
            <FieldLabel htmlFor="dedicate" className="font-normal">
              I would like to dedicate this donation
            </FieldLabel>
          </Field>

          {dedicating ? (
            <Field>
              <FieldLabel htmlFor="dedication">In honor of</FieldLabel>
              <Input id="dedication" name="dedication" />
            </Field>
          ) : null}
        </FieldGroup>
      </FieldSet>

      <FieldSet>
        <FieldLegend>Contact information</FieldLegend>
        <FieldGroup>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="firstName">First name</FieldLabel>
              <Input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="lastName">Last name</FieldLabel>
              <Input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                required
              />
            </Field>
          </div>
          <Field>
            <FieldLabel htmlFor="organization">
              Company name (optional)
            </FieldLabel>
            <Input
              id="organization"
              name="organization"
              autoComplete="organization"
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="address">Address</FieldLabel>
            <Input
              id="address"
              name="address"
              autoComplete="address-line1"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="address2">Address line 2 (optional)</FieldLabel>
            <Input id="address2" name="address2" autoComplete="address-line2" />
          </Field>
          <div className="grid gap-6 sm:grid-cols-3">
            <Field>
              <FieldLabel htmlFor="city">City</FieldLabel>
              <Input
                id="city"
                name="city"
                autoComplete="address-level2"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="state">State</FieldLabel>
              <Input
                id="state"
                name="state"
                autoComplete="address-level1"
                required
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="postalCode">ZIP code</FieldLabel>
              <Input
                id="postalCode"
                name="postalCode"
                autoComplete="postal-code"
                inputMode="numeric"
                required
              />
            </Field>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <Field>
              <FieldLabel htmlFor="cellPhone">Cell phone (optional)</FieldLabel>
              <Input
                id="cellPhone"
                name="cellPhone"
                type="tel"
                autoComplete="mobile tel"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="workPhone">Work phone (optional)</FieldLabel>
              <Input
                id="workPhone"
                name="workPhone"
                type="tel"
                autoComplete="work tel"
              />
            </Field>
          </div>
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
        </FieldGroup>
      </FieldSet>

      <Field>
        <FieldLabel htmlFor="message">
          Anything we should know (optional)
        </FieldLabel>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder="A session you want to sponsor, gear you can cover, or a question before you give."
        />
        <FieldDescription>
          No card details are collected on this site. We will be in touch from{" "}
          {site.email} to complete your gift.
        </FieldDescription>
      </Field>

      {error ? <FormError message={error} /> : null}
      <Button type="submit" size="lg" disabled={pending}>
        {pending ? (
          <Spinner data-icon="inline-start" />
        ) : (
          <HeartIcon data-icon="inline-start" />
        )}
        Send this
      </Button>
    </form>
  )
}
