import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { CONTACT, whatsappGeneralUrl } from "@/lib/contact";
import { WhatsAppIcon } from "@/components/Header";
import contactHero from "@/assets/breakfast-luxe.png";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ladid Food · Écrivez-nous" },
      { name: "description", content: "Une question, une commande spéciale, un événement ? Contactez Ladid Food par téléphone, WhatsApp, email ou formulaire." },
      { property: "og:title", content: "Contact — Ladid Food" },
      { property: "og:description", content: "Contactez Ladid Food par téléphone, WhatsApp, email ou formulaire." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nom = String(fd.get("nom") || "").trim();
    const tel = String(fd.get("tel") || "").trim();
    const objet = String(fd.get("objet") || "").trim();
    const errs: Record<string, string> = {};
    if (!nom) errs.nom = "Votre nom est requis.";
    if (!tel) errs.tel = "Un numéro de téléphone est requis.";
    if (!objet) errs.objet = "Merci de choisir un objet.";
    setErrors(errs);
    if (Object.keys(errs).length) return;

    toast.success("Votre message a bien été envoyé, nous vous répondrons rapidement !", {
      description: "Pour une réponse plus rapide, contactez-nous directement sur WhatsApp.",
    });
    (e.currentTarget as HTMLFormElement).reset();
  };

  return (
    <>
      <section
        className="relative bg-cover bg-center py-20 md:py-28"
        style={{ backgroundImage: `linear-gradient(rgba(19,78,84,0.82), rgba(19,78,84,0.82)), url(${contactHero})` }}
      >
        <div className="mx-auto max-w-4xl px-4 text-center text-white md:px-8">
          <h1 className="section-title text-white">Contactez-Nous</h1>
          <p className="mt-4 text-white/85">
            Une question, une commande spéciale, un événement ? Écrivez-nous.
          </p>
        </div>
      </section>

      <section className="bg-cream py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2 md:px-8">
          <div className="space-y-6">
            <h2 className="font-display text-2xl font-semibold">Coordonnées</h2>
            <div className="space-y-4 rounded-3xl bg-white p-6 shadow-[var(--shadow-card)]">
              <Row icon={<MapPin className="h-4 w-4" />} label="Adresse" value={CONTACT.address} />
              <Row icon={<Phone className="h-4 w-4" />} label="Téléphone" value={<a href={CONTACT.phoneHref} className="hover:text-primary">{CONTACT.phoneDisplay}</a>} />
              <Row icon={<Mail className="h-4 w-4" />} label="Email" value={<a href={`mailto:${CONTACT.email}`} className="hover:text-primary">{CONTACT.email}</a>} />
              <Row
                icon={<MessageCircle className="h-4 w-4" />}
                label="WhatsApp"
                value={<a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="font-medium text-whatsapp hover:underline">Ouvrir la conversation</a>}
              />
              <Row icon={<Clock className="h-4 w-4" />} label="Horaires" value={CONTACT.hours} />
            </div>

            <div className="flex flex-wrap gap-3">
              <a href={CONTACT.phoneHref} className="btn-primary text-sm"><Phone className="h-4 w-4" /> Appeler maintenant</a>
              <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm">
                <WhatsAppIcon className="h-5 w-5" /> WhatsApp
              </a>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 rounded-full border-2 border-primary bg-white px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/5">
                <Mail className="h-4 w-4" /> Envoyer un email
              </a>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl bg-white p-8 shadow-[var(--shadow-card)]">
            <h2 className="font-display text-2xl font-semibold">Laissez-nous un message</h2>
            <div className="mt-6 space-y-4">
              <Field label="Nom complet *" error={errors.nom}>
                <input name="nom" type="text" className="input-field" placeholder="Votre nom" />
              </Field>
              <Field label="Téléphone *" error={errors.tel}>
                <input name="tel" type="tel" className="input-field" placeholder="06 XX XX XX XX" />
              </Field>
              <Field label="Email">
                <input name="email" type="email" className="input-field" placeholder="vous@exemple.com" />
              </Field>
              <Field label="Objet *" error={errors.objet}>
                <select name="objet" className="input-field" defaultValue="">
                  <option value="" disabled>Choisir un objet</option>
                  <option>Commande spéciale / événement</option>
                  <option>Question sur un plat</option>
                  <option>Livraison</option>
                  <option>Réclamation</option>
                  <option>Partenariat</option>
                  <option>Autre</option>
                </select>
              </Field>
              <Field label="Message">
                <textarea name="message" rows={5} className="input-field resize-none" placeholder="Comment pouvons-nous vous aider ?" />
              </Field>
              <button type="submit" className="btn-primary w-full">Envoyer</button>
            </div>
          </form>
        </div>
      </section>

      <style>{`
        .input-field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid var(--color-border);
          background: white;
          padding: 0.75rem 1rem;
          font-size: 0.9rem;
          color: var(--color-foreground);
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .input-field:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 20%, transparent);
        }
      `}</style>
    </>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
        {icon}
      </span>
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm text-foreground">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-foreground">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs font-medium text-destructive">{error}</span>}
    </label>
  );
}
