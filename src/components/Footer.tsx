import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { WhatsAppIcon } from "./Header";

export function Footer() {
  return (
    <footer className="relative bg-[oklch(0.2_0.02_250)] text-white/80">
      <div className="absolute inset-x-0 top-0 h-[3px] bg-primary" />
      <div className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="flex flex-col items-start gap-4 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="font-display text-2xl font-bold text-white">{CONTACT.brand}</div>
            <p className="mt-1 text-sm">Cuisine marocaine maison, préparée fraîche chaque jour.</p>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/15 px-4 py-2 text-sm font-semibold text-primary">
            <ShieldCheck className="h-4 w-4" /> 100% Halal
          </span>
        </div>

        <div className="grid gap-10 py-10 md:grid-cols-4">
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-primary">
                  Notre Menu
                </Link>
              </li>
              <li>
                <Link to="/point-de-vente" className="hover:text-primary">
                  Point de Vente
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="hover:text-primary">
                  À Propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">Catégories</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/menu" hash="tajines" className="hover:text-primary">
                  Tajines
                </Link>
              </li>
              <li>
                <Link to="/menu" hash="pastilla" className="hover:text-primary">
                  Pastilla
                </Link>
              </li>
              <li>
                <Link to="/menu" hash="packs" className="hover:text-primary">
                  Packs & Formules
                </Link>
              </li>
              <li>
                <Link to="/menu" hash="breakfast" className="hover:text-primary">
                  Petit-déjeuner
                </Link>
              </li>
              <li>
                <Link to="/menu" hash="couscous" className="hover:text-primary">
                  Couscous
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">Suivez-nous</h4>
            <div className="flex gap-3">
              <a
                href={CONTACT.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary hover:text-white"
              >
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-display text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" /> {CONTACT.address}
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 text-primary" />{" "}
                <a href={CONTACT.phoneHref} className="hover:text-primary">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />{" "}
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary">
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 text-primary" /> {CONTACT.hours}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-xs text-white/60">
          © 2026 {CONTACT.brand} — Tous droits réservés · Casablanca, Maroc
        </div>
      </div>
    </footer>
  );
}

function TikTokIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M19.6 6.3a4.9 4.9 0 0 1-3.9-1.7v11.6a5.4 5.4 0 1 1-5.4-5.4c.3 0 .6 0 .9.1v2.9a2.6 2.6 0 1 0 1.8 2.5V2h2.7a4.9 4.9 0 0 0 4.9 4.3v0Z" />
    </svg>
  );
}
