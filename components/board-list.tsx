import { board } from "@/lib/site"

export function BoardList() {
  return (
    <ul className="grid gap-4 sm:grid-cols-3">
      {board.map((person) => (
        <li key={person.name} className="flex flex-col gap-2 border border-border bg-card p-5">
          <p className="font-heading text-lg">{person.name}</p>
          <p className="text-sm text-gold">{person.role}</p>
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
