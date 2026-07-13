import { Flame, Leaf, Star } from "lucide-react";
import type { Dish } from "@/lib/menu-data";
import { whatsappOrderUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./Header";

export function DishCard({ dish }: { dish: Dish }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]">
      <div className="relative aspect-[4/3] overflow-hidden bg-cream">
        <img
          src={dish.image}
          alt={dish.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {dish.bestSeller && (
            <span className="inline-flex items-center gap-1 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-gold-foreground shadow">
              <Star className="h-3 w-3 fill-current" /> Best-seller
            </span>
          )}
          {dish.limitedOffer && (
            <span className="inline-flex items-center gap-1 rounded-full bg-warm px-2.5 py-1 text-xs font-bold text-warm-foreground shadow">
              Offre limitée
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-xl font-semibold leading-tight text-foreground">
          {dish.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {dish.description}
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
          {dish.vegetarian && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.95_0.05_155)] px-2 py-0.5 text-xs font-medium text-[oklch(0.4_0.1_155)]">
              <Leaf className="h-3 w-3" /> Végé
            </span>
          )}
          {dish.spicy && (
            <span className="inline-flex items-center gap-1 rounded-full bg-[oklch(0.95_0.05_35)] px-2 py-0.5 text-xs font-medium text-warm">
              <Flame className="h-3 w-3" /> Épicé
            </span>
          )}
          {dish.proteins.map((p) => (
            <span key={p} className="rounded-full bg-cream px-2 py-0.5 text-xs font-medium text-muted-foreground">
              {p}
            </span>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <span className="text-2xl font-bold text-primary">{dish.price} dh</span>
          <a
            href={whatsappOrderUrl(dish.name, dish.price)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm"
          >
            <WhatsAppIcon className="h-4 w-4" /> Commander
          </a>
        </div>
      </div>
    </article>
  );
}
