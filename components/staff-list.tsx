import { UsersThreeIcon } from "@phosphor-icons/react/ssr"
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import { site, staff } from "@/lib/site"

/**
 * The staff roster, or the honest empty state when there is none. Shared by
 * /team and /team/staff so the two never drift. The list in lib/site.ts is
 * deliberately empty; it fills as roles are filled, and never before.
 */
export function StaffList() {
  if (staff.length === 0) {
    return (
      <Empty className="py-12">
        <EmptyHeader>
          <EmptyMedia variant="icon">
            <UsersThreeIcon />
          </EmptyMedia>
          <EmptyTitle className="text-base">
            Staff will be listed here as roles are filled.
          </EmptyTitle>
          <EmptyDescription className="text-sm">
            We will not invent names. Until then, write to {site.email}.
          </EmptyDescription>
        </EmptyHeader>
      </Empty>
    )
  }

  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {staff.map((person) => (
        <li key={person.name} className="rounded-2xl border border-gold/30 bg-card p-6 shadow-[0_16px_42px_rgba(3,22,47,0.06)]">
          <p className="font-heading text-lg">{person.name}</p>
          <p className="text-sm text-gold-ink">{person.role}</p>
          {person.note ? (
            <p className="mt-2 text-sm text-muted-foreground">{person.note}</p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
