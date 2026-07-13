import { Star } from "lucide-react";

const REVIEWS = [
  { name: "Salma B.", text: "Le tajine beldi est exactement comme celui de ma grand-mère. Livraison rapide et emballage impeccable !", rating: 5 },
  { name: "Youssef A.", text: "J'ai commandé le Family Pack pour un dîner improvisé — tout le monde a adoré. Rapport qualité prix imbattable.", rating: 5 },
  { name: "Nadia K.", text: "La pastilla au poulet est croustillante et parfumée. On sent le fait maison.", rating: 5 },
  { name: "Karim R.", text: "Golden Fried Chicken devenu mon plat du vendredi. Toujours frais, toujours ponctuel.", rating: 5 },
];

export function Reviews({ onDark = false }: { onDark?: boolean }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {REVIEWS.map((r) => (
        <div
          key={r.name}
          className={`rounded-2xl p-6 shadow-[var(--shadow-card)] ${onDark ? "bg-white" : "bg-white ring-1 ring-border"}`}
        >
          <div className="flex gap-0.5 text-gold">
            {Array.from({ length: r.rating }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-current" />
            ))}
          </div>
          <p className="mt-3 text-sm leading-relaxed text-foreground/80">"{r.text}"</p>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 font-semibold text-primary">
              {r.name.charAt(0)}
            </div>
            <span className="text-sm font-semibold text-foreground">{r.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
