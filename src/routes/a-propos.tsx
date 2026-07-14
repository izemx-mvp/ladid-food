import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Heart, ShieldCheck, Users } from "lucide-react";
import aboutImg from "@/assets/about-kitchen.jpg";
import teamImg from "@/assets/team-photo.jpg";
import aboutHero from "@/assets/rfissa.png";
import { Reviews } from "@/components/Reviews";

export const Route = createFileRoute("/a-propos")({
  head: () => ({
    meta: [
      { title: "À Propos — Ladid Food · Notre cuisine centrale marocaine" },
      { name: "description", content: "Découvrez notre histoire, notre équipe et nos valeurs — une cuisine familiale marocaine pensée pour votre quotidien." },
      { property: "og:title", content: "À Propos — Ladid Food" },
      { property: "og:description", content: "Notre histoire, notre équipe et nos valeurs — cuisine marocaine maison à Kénitra." },
    ],
  }),
  component: About,
});

const TEAM = [
  { name: "Chef Karim", role: "Chef Cuisinier" },
  { name: "Yasmine", role: "Sous-Cheffe & Pâtisserie" },
  { name: "Amine", role: "Responsable Livraison" },
  { name: "Hind", role: "Service Client" },
];

const VALUES = [
  { icon: Leaf, t: "Fraîcheur", d: "Des ingrédients sélectionnés chaque jour." },
  { icon: Heart, t: "Authenticité", d: "Des recettes marocaines traditionnelles." },
  { icon: ShieldCheck, t: "Hygiène & Qualité", d: "Une cuisine centrale aux normes strictes." },
];

function About() {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `linear-gradient(rgba(34,41,47,0.65), rgba(34,41,47,0.65)), url(${aboutHero})` }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h1 className="section-title text-white">À Propos de Nous</h1>
          <p className="mt-4 text-white/85">
            Une cuisine familiale marocaine, pensée pour votre quotidien.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 md:grid-cols-2 md:items-center md:px-8">
          <img src={aboutImg} alt="Notre cuisine centrale" loading="lazy" className="w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          <div>
            <h2 className="section-title">Notre Histoire</h2>
            <p className="mt-5 text-foreground/80">
              Nous avons créé cette cuisine centrale avec une conviction simple : tout le monde mérite un vrai repas marocain fait maison, même sans le temps de cuisiner. Chaque jour, notre équipe prépare les plats avec les mêmes gestes et le même soin que dans nos familles.
            </p>
            <p className="mt-4 text-foreground/80">
              Du tajine mijoté lentement à la pastilla dorée au four, chaque recette est transmise, respectée, et cuisinée avec des produits frais choisis le matin même.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="flex items-center justify-center gap-2 text-primary">
            <Users className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wider">L'équipe Ladid</span>
          </div>
          <h2 className="section-title mt-3 text-center">Notre Équipe</h2>
          <img src={teamImg} alt="L'équipe Ladid Food" loading="lazy" className="mx-auto mt-10 w-full max-w-5xl rounded-3xl object-cover shadow-[var(--shadow-soft)]" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} className="rounded-2xl bg-white p-6 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 font-display text-2xl font-bold text-primary">
                  {m.name.charAt(0)}
                </div>
                <div className="mt-4 font-display text-lg font-semibold">{m.name}</div>
                <div className="text-sm text-muted-foreground">{m.role}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title">Nos Valeurs</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map((v) => (
              <div key={v.t} className="rounded-3xl bg-cream p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-white">
                  <v.icon className="h-7 w-7" />
                </div>
                <h3 className="font-display text-xl font-semibold">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary-dark py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <h2 className="section-title text-center text-white">Ce Que Disent Nos Clients</h2>
          <div className="mt-12">
            <Reviews onDark />
          </div>
        </div>
      </section>
    </>
  );
}
