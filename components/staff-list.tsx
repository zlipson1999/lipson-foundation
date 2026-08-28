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
      <Empty className="border border-dashed border-border bg-card py-12">
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
        <li key={person.name} className="border border-border bg-card p-5">
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
