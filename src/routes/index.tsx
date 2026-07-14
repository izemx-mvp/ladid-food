import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, Clock, ShieldCheck, Heart, CheckCircle2, Home, Calendar, Sparkles } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import tajinesImg from "@/assets/tajine-vege-jus.png";
import pastillaImg from "@/assets/pastilla-poulet.png";
import packsImg from "@/assets/family-pack.png";
import breakfastImg from "@/assets/breakfast-luxe.png";
import couscousImg from "@/assets/couscous-poulet.png";
import pastaImg from "@/assets/pasta-formule.png";
import { BEST_SELLERS, DAILY_SPECIALS, DISHES } from "@/lib/menu-data";
import { DishCard } from "@/components/DishCard";
import { Reviews } from "@/components/Reviews";
import { whatsappGeneralUrl, whatsappOrderUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/Header";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ladid Food — Cuisine marocaine maison, livrée à Kénitra" },
      {
        name: "description",
        content:
          "Tajines mijotés, pastilla croustillante, couscous du vendredi — cuisine marocaine faite maison chaque jour et livrée à Kénitra.",
      },
      { property: "og:title", content: "Ladid Food — Cuisine marocaine maison" },
      { property: "og:description", content: "Tajines, pastilla, couscous et packs marocains livrés à Kénitra." },
    ],
  }),
  component: Home2,
});

const CATEGORIES = [
  {
    img: tajinesImg,
    title: "Tajines & Plats Mijotés",
    desc: "Tajine beldi, tajine légumes, rfissa, ker3in",
    href: "/menu",
    hash: "tajines",
  },
  {
    img: pastillaImg,
    title: "Pastilla",
    desc: "Pastilla poulet ou poisson, format familial",
    href: "/menu",
    hash: "pastilla",
  },
  {
    img: packsImg,
    title: "Packs & Formules",
    desc: "Formules complètes prêtes à savourer",
    href: "/menu",
    hash: "packs",
  },
  { img: breakfastImg, title: "Petit-déjeuner", desc: "Toasts gourmands, jus frais", href: "/menu", hash: "breakfast" },
  {
    img: couscousImg,
    title: "Couscous",
    desc: "Couscous poulet ou bœuf, préparé le vendredi",
    href: "/menu",
    hash: "couscous",
  },
  { img: pastaImg, title: "Pasta & Léger", desc: "Pâtes, salades fraîches, jus", href: "/menu", hash: "pasta" },
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

const DAY_ORDER = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];
const todayName = () => DAY_ORDER[(new Date().getDay() + 6) % 7];

function Home2() {
  const today = todayName();
  return (
    <>
      {/* Hero */}
      <section
        className="relative flex min-h-[92vh] items-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(34,41,47,0.55), rgba(34,41,47,0.55)), url(${heroBg})` }}
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
              Tajines mijotés, pastilla croustillante, couscous du vendredi et bien plus — préparés chaque jour comme à
              la maison, livrés directement chez vous ou à récupérer sur place.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/menu" className="btn-primary text-base">
                Découvrir le menu
              </Link>
              <a
                href={whatsappGeneralUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-white text-base"
              >
                <WhatsAppIcon className="h-5 w-5" /> Commander sur WhatsApp
              </a>
            </div>
            <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90">
              {["Fait maison chaque jour", "Livraison rapide", "Point de vente à Kénitra", "100% halal"].map((t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" /> {t}
                </li>
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
              <div className="bg-gradient-to-br from-primary to-primary-dark bg-clip-text font-display text-4xl font-bold text-transparent md:text-5xl">
                {s.n}
              </div>
              <div className="mt-2 text-sm font-medium text-muted-foreground md:text-base">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories — visual grid with images */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Notre Carte
            </span>
            <h2 className="section-title mt-4">Notre Cuisine</h2>
            <p className="mt-3 text-muted-foreground">
              Des grands classiques marocains aux formules pratiques du quotidien.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((c) => (
              <Link
                key={c.title}
                to={c.href}
                hash={c.hash}
                className="group relative flex h-72 flex-col justify-end overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)]"
              >
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                <div className="relative p-6 text-white">
                  <h3 className="font-display text-2xl font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-white/85">{c.desc}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-primary-glow">
                    Voir les plats →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Specials */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-warm/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-warm">
              <Calendar className="h-3.5 w-3.5" /> Le plat du jour
            </span>
            <h2 className="section-title mt-4">Les Spéciaux de la Semaine</h2>
            <p className="mt-3 text-muted-foreground">
              Chaque jour a son plat signature — mijoté le matin même, en quantité limitée.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {DAILY_SPECIALS.map((s) => {
              const dish = DISHES.find((d) => d.id === s.dishId);
              if (!dish) return null;
              const isToday = s.day === today;
              return (
                <a
                  key={s.day}
                  href={whatsappOrderUrl(dish.name, dish.price)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] ${
                    isToday ? "ring-2 ring-warm ring-offset-2" : ""
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden bg-cream">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className={`absolute left-2 top-2 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow ${isToday ? "bg-warm text-warm-foreground" : "bg-white/95 text-foreground"}`}
                    >
                      {isToday ? "Aujourd'hui" : s.day}
                    </div>
                  </div>
                  <div className="flex flex-1 flex-col p-3">
                    <div className="font-display text-sm font-semibold leading-tight text-foreground line-clamp-2">
                      {dish.name}
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{s.note}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="text-sm font-bold text-primary">{dish.price} dh</span>
                      <span className="text-[11px] font-semibold text-whatsapp">Commander →</span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Best sellers */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="section-title">Nos Best-Sellers</h2>
              <p className="mt-2 text-muted-foreground">Les préférés de nos clients, semaine après semaine.</p>
            </div>
            <Link to="/menu" className="text-sm font-semibold text-primary hover:underline">
              Voir tout le menu →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BEST_SELLERS.map((d) => (
              <DishCard key={d.id} dish={d} />
            ))}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-14 px-4 md:grid-cols-2 md:px-8">
          <div>
            <h2 className="section-title">Pourquoi Nous Choisir</h2>
            <p className="mt-5 text-foreground/80">
              Nous sommes une cuisine centrale marocaine (dark kitchen) née de l'envie de proposer une vraie cuisine
              familiale marocaine, fraîche et généreuse, sans avoir à cuisiner. Chaque plat est préparé le jour même,
              avec des produits frais et des recettes transmises de génération en génération.
            </p>
            <Link to="/a-propos" className="mt-6 inline-block text-sm font-semibold text-primary hover:underline">
              En savoir plus sur nous →
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-2xl bg-cream p-6 shadow-[var(--shadow-card)]">
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
            <Link to="/menu" className="btn-primary">
              Voir le menu
            </Link>
            <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              <WhatsAppIcon className="h-5 w-5" /> Commander sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
