import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Phone } from "lucide-react";
import { DISHES, CATEGORY_LABELS, type Category, type Protein } from "@/lib/menu-data";
import { DishCard } from "@/components/DishCard";
import { CONTACT, whatsappGeneralUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/Header";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Notre Menu — Ladid Food · Cuisine marocaine à Casablanca" },
      { name: "description", content: "Explorez notre menu : tajines, pastilla, couscous, packs & formules, petit-déjeuner et pasta — préparés frais chaque jour." },
      { property: "og:title", content: "Notre Menu — Ladid Food" },
      { property: "og:description", content: "Tajines, pastilla, couscous et packs marocains, préparés frais chaque jour." },
    ],
  }),
  component: MenuPage,
});

const CATEGORIES: { key: Category | "all"; label: string }[] = [
  { key: "all", label: "Tous" },
  { key: "tajines", label: "Tajines" },
  { key: "pastilla", label: "Pastilla" },
  { key: "packs", label: "Packs & Formules" },
  { key: "breakfast", label: "Petit-déjeuner" },
  { key: "couscous", label: "Couscous" },
  { key: "pasta", label: "Pasta" },
];

const PROTEINS: Protein[] = ["Poulet", "Bœuf", "Agneau", "Poisson", "Végétarien"];

function MenuPage() {
  const [cat, setCat] = useState<Category | "all">("all");
  const [proteins, setProteins] = useState<Protein[]>([]);

  // Sync hash → category on mount + hash change
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "");
      if (h && CATEGORY_LABELS[h as Category]) setCat(h as Category);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filtered = useMemo(() => {
    return DISHES.filter((d) => {
      if (cat !== "all" && d.category !== cat) return false;
      if (proteins.length > 0 && !proteins.some((p) => d.proteins.includes(p))) return false;
      return true;
    });
  }, [cat, proteins]);

  const toggleProtein = (p: Protein) =>
    setProteins((s) => (s.includes(p) ? s.filter((x) => x !== p) : [...s, p]));

  return (
    <>
      <section className="bg-gradient-to-br from-primary to-primary-dark py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h1 className="section-title text-white">Notre Menu</h1>
          <p className="mt-4 text-white/85">
            Une cuisine marocaine généreuse, préparée fraîche chaque jour et livrée chez vous.
          </p>
        </div>
      </section>

      {/* Sticky filter bar */}
      <div className="sticky top-20 z-40 border-b border-border bg-white/95 backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 md:px-8">
          <div className="scrollbar-hide flex gap-2 overflow-x-auto">
            {CATEGORIES.map((c) => (
              <button
                key={c.key}
                onClick={() => setCat(c.key)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  cat === c.key
                    ? "bg-primary text-white"
                    : "bg-cream text-foreground hover:bg-primary/10"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
          <div className="scrollbar-hide mt-3 flex gap-2 overflow-x-auto">
            {PROTEINS.map((p) => {
              const active = proteins.includes(p);
              return (
                <button
                  key={p}
                  onClick={() => toggleProtein(p)}
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                    active
                      ? "bg-warm text-warm-foreground"
                      : "border border-border bg-white text-muted-foreground hover:border-warm/50"
                  }`}
                >
                  {p}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dishes grid, grouped by category anchors */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          {cat === "all" ? (
            <div className="space-y-16">
              {(Object.keys(CATEGORY_LABELS) as Category[]).map((c) => {
                const items = filtered.filter((d) => d.category === c);
                if (!items.length) return null;
                return (
                  <div key={c} id={c} className="scroll-mt-40">
                    <h2 className="section-title mb-6 text-3xl">{CATEGORY_LABELS[c]}</h2>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                      {items.map((d) => <DishCard key={d.id} dish={d} />)}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div id={cat} className="scroll-mt-40 fade-up">
              <h2 className="section-title mb-6 text-3xl">{CATEGORY_LABELS[cat as Category]}</h2>
              {filtered.length === 0 ? (
                <p className="text-muted-foreground">Aucun plat ne correspond à ces filtres.</p>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {filtered.map((d) => <DishCard key={d.id} dish={d} />)}
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="section-title">Vous ne savez pas quoi choisir ?</h2>
          <p className="mt-3 text-muted-foreground">Contactez-nous, on vous conseille le plat parfait.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={CONTACT.phoneHref} className="btn-primary"><Phone className="h-4 w-4" /> Appeler</a>
            <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
