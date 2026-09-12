import { board } from "@/lib/site"

export function BoardList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {board.map((person) => (
        <li key={person.name} className="flex flex-col gap-2 rounded-2xl border border-gold/30 bg-card p-6 shadow-[0_16px_42px_rgba(3,22,47,0.06)]">
          <p className="font-heading text-lg">{person.name}</p>
          <p className="text-sm text-gold-ink">{person.role}</p>
          {person.note ? (
            <p className="text-sm leading-relaxed text-muted-foreground">
              {person.note}
            </p>
          ) : null}
        </li>
      ))}
    </ul>
  )
}
