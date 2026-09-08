import { serviceCategories, type ServiceCategory } from "@/lib/site"
import { cn } from "@/lib/utils"

/**
 * The service-category boxes a program wears wherever it is listed. The
 * categories themselves live in `serviceCategories` in lib/site.ts — this
 * component only renders whatever ids a program declares.
 */
export function CategoryChips({
  categories,
  className,
}: {
  categories: readonly ServiceCategory[]
  className?: string
}) {
  return (
    <ul
      className={cn("flex flex-wrap gap-2", className)}
      aria-label="Service categories"
    >
      {categories.map((id) => (
        <li
          key={id}
          className="border border-gold/60 px-2.5 py-1 text-xs font-medium tracking-wide text-gold-ink"
        >
          {serviceCategories[id]}
        </li>
      ))}
    </ul>
  )
}
