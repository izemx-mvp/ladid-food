import { createFileRoute, Link } from "@tanstack/react-router";
import {
  UtensilsCrossed, ChefHat, Package, Coffee, Soup, Salad,
  Leaf, Clock, ShieldCheck, Heart, CheckCircle2, Home,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg.asset.json";
import { BEST_SELLERS } from "@/lib/menu-data";
import { DishCard } from "@/components/DishCard";
import { Reviews } from "@/components/Reviews";
import { whatsappGeneralUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ladid Food — Cuisine marocaine maison, livrée à Casablanca" },
      { name: "description", content: "Tajines mijotés, pastilla croustillante, couscous du vendredi — cuisine marocaine faite maison chaque jour et livrée à Casablanca." },
      { property: "og:title", content: "Ladid Food — Cuisine marocaine maison" },
      { property: "og:description", content: "Tajines, pastilla, couscous et packs marocains livrés à Casablanca." },
    ],
  }),
  component: Home2,
});

const CATEGORIES = [
  { icon: UtensilsCrossed, title: "Tajines & Plats Mijotés", desc: "Tajine beldi, tajine légumes, rfissa, ker3in", href: "/menu", hash: "tajines" },
  { icon: ChefHat, title: "Pastilla", desc: "Pastilla poulet ou poisson, format familial", href: "/menu", hash: "pastilla" },
  { icon: Package, title: "Packs & Formules", desc: "Formules complètes prêtes à savourer", href: "/menu", hash: "packs" },
  { icon: Coffee, title: "Petit-déjeuner", desc: "Toasts gourmands, jus frais", href: "/menu", hash: "breakfast" },
  { icon: Soup, title: "Couscous", desc: "Couscous poulet ou bœuf, préparé le vendredi", href: "/menu", hash: "couscous" },
  { icon: Salad, title: "Pasta & Léger", desc: "Pâtes, salades fraîches, jus", href: "/menu", hash: "pasta" },
];

const STATS = [
  { n: "20+", l: "Plats différents" },
  { n: "7j/7", l: "Préparé frais" },
  { n: "100%", l: "Fait maison" },
  { n: "30 min", l: "Livraison moyenne" },
];

const VALUES = [
  { icon: Leaf, t: "Ingrédients Frais", d: "Sélectionnés chaque matin sur le marché" },
  { icon: Clock, t: "Livraison Rapide", d: "Votre commande livrée en moyenne en 30 minutes" },
  { icon: ShieldCheck, t: "100% Halal", d: "Toute notre cuisine respecte les normes halal" },
  { icon: Heart, t: "Fait Maison", d: "Comme les plats de nos mamans et grand-mères" },
];

function Home2() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[92vh] items-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(34,41,47,0.55), rgba(34,41,47,0.55)), url(${heroBg.url})` }}
      >
        <div className="mx-auto w-full max-w-7xl px-4 py-24 md:px-8">
          <div className="max-w-[720px] fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur">
              <Home className="h-3.5 w-3.5" /> Cuisine Marocaine Maison · Livraison Rapide
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl">
              La cuisine marocaine authentique, livrée chez vous
            </h1>
            <p className="mt-5 max-w-xl text-lg text-white/85">
              Tajines mijotés, pastilla croustillante, couscous du vendredi et bien plus — préparés chaque jour comme à la maison, livrés directement chez vous ou à récupérer sur place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-primary text-base">Découvrir le menu</Link>
              <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-outline-white text-base">
                <WhatsAppIcon className="h-5 w-5" /> Commander sur WhatsApp
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {["Fait maison chaque jour", "Livraison rapide", "Point de vente à Casablanca", "100% halal"].map((t) => (
                <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 md:grid-cols-4 md:px-8">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <div className="bg-gradient-to-br from-primary to-primary-dark bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl">{s.n}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Notre Cuisine</h2>
            <p className="mt-3 text-muted-foreground">Des grands classiques marocains aux formules pratiques du quotidien.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.title}
                to={c.href}
                hash={c.hash}
                className="group flex flex-col rounded-3xl bg-white p-8 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <c.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{c.desc}</p>
                <span className="mt-4 text-sm font-semibold text-primary">Voir les plats →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Nos Best-Sellers</h2>
              <p className="mt-2 text-muted-foreground">Les préférés de nos clients, semaine après semaine.</p>
            </div>
            <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">Voir tout le menu →</Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BEST_SELLERS.map((d) => <DishCard key={d.id} dish={d} />)}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-cream py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="section-title">Pourquoi Nous Choisir</h2>
            <p className="mt-5 text-foreground/80">
              Nous sommes une cuisine centrale marocaine (dark kitchen) née de l'envie de proposer une vraie cuisine familiale marocaine, fraîche et généreuse, sans avoir à cuisiner. Chaque plat est préparé le jour même, avec des produits frais et des recettes transmises de génération en génération.
            </p>
            <Link to="/a-propos" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">En savoir plus sur nous →</Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl bg-white p-6 shadow-[var(--shadow-card)]">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-warm/10 text-warm">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{v.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title text-white">Ce Que Disent Nos Clients</h2>
            <p className="mt-3 text-white/80">Des retours qui nous motivent chaque jour.</p>
          </div>
          <div className="mt-12">
            <Reviews onDark />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-8">
          <h2 className="section-title">Une envie de bon plat marocain ?</h2>
          <p className="mt-3 text-muted-foreground">Commandez maintenant, on s'occupe du reste.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link to="/menu" className="btn-primary">Voir le menu</Link>
            <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" /> Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
