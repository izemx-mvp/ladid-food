import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Clock, Truck, ShoppingBag, Navigation } from "lucide-react";
import pdv from "@/assets/point-de-vente-new.png.asset.json";
import { CONTACT, whatsappGeneralUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/Header";

export const Route = createFileRoute("/point-de-vente")({
  head: () => ({
      meta: [
      { title: "Point de Vente — Ladid Food · Retrait & livraison à Kénitra" },
      { name: "description", content: "Venez récupérer votre commande sur place ou faites-vous livrer. Adresse, horaires, itinéraire et zones de livraison." },
      { property: "og:title", content: "Point de Vente — Ladid Food" },
      { property: "og:description", content: "Retrait sur place ou livraison à Kénitra — infos pratiques du point de vente." },
    ],
  }),
  component: PdvPage,
});

function PdvPage() {
  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `linear-gradient(rgba(34,41,47,0.6), rgba(34,41,47,0.6)), url(${pdv.url})` }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h1 className="section-title text-white">Notre Point de Vente</h1>
          <p className="mt-4 text-white/85">
            Venez récupérer votre commande directement sur place, ou faites-vous livrer.
          </p>
        </div>
      </section>

      {/* Image left · Contact right */}
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-2 md:items-center md:px-8">
          <div>
            <img
              src={pdv.url}
              alt="Point de vente Ladid Food"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[var(--shadow-soft)]"
            />
          </div>
          <div>
            <h2 className="section-title text-3xl">Passez nous voir</h2>
            <p className="mt-3 text-muted-foreground">
              Notre équipe vous accueille chaque jour au comptoir de retrait — commandes chaudes, prêtes en quelques minutes.
            </p>
            <div className="mt-6 space-y-4 rounded-3xl bg-cream p-6 shadow-[var(--shadow-card)]">
              <InfoRow icon={MapPin} label="Adresse" value={CONTACT.address} />
              <InfoRow icon={Phone} label="Téléphone" value={<a href={CONTACT.phoneHref} className="hover:text-primary">{CONTACT.phoneDisplay}</a>} />
              <InfoRow icon={Clock} label="Heures d'ouverture" value={CONTACT.hours} />
              <InfoRow icon={Truck} label="Zones de livraison" value="Ville nouvelle, Al Wahda, Centre-ville, Sidi Brahim, Ouled Oujih, Mehdia — et plus." />
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn-primary"><Phone className="h-4 w-4" /> Appeler</a>
              <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp"><WhatsAppIcon className="h-5 w-5" /> WhatsApp</a>
              <a href={CONTACT.mapsUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-border bg-white px-6 py-3 text-sm font-semibold hover:border-primary hover:text-primary">
                <Navigation className="h-4 w-4" /> Itinéraire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map — full width at bottom */}
      <section className="bg-cream py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="section-title text-3xl">Nous trouver</h2>
            <p className="mt-3 text-muted-foreground">Facilement accessible, parking à proximité.</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl shadow-[var(--shadow-soft)]">
            <iframe
              src={CONTACT.mapsEmbed}
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du point de vente"
            />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary to-primary-dark py-16">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <h2 className="section-title text-center text-white">Livraison ou Click & Collect</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <OptionCard icon={Truck} title="Livraison à domicile" text="Nous livrons dans les principaux quartiers de Casablanca en 30 minutes en moyenne." cta="Commander la livraison" />
            <OptionCard icon={ShoppingBag} title="Click & Collect" text="Passez commande par WhatsApp et récupérez votre repas prêt sur notre point de vente." cta="Réserver mon retrait" />
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon: Icon, label, value }: { icon: React.ComponentType<{ className?: string }>; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}

function OptionCard({ icon: Icon, title, text, cta }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string; cta: string }) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-display text-2xl font-semibold">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp mt-5 text-sm">
        <WhatsAppIcon className="h-4 w-4" /> {cta}
      </a>
    </div>
  );
}
