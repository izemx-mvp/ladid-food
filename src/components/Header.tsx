import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu as MenuIcon, Phone, X } from "lucide-react";
import logo from "@/assets/logo-v2.png.asset.json";
import { CONTACT, whatsappGeneralUrl } from "@/lib/contact";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/menu", label: "Notre Menu" },
  { to: "/point-de-vente", label: "Point de Vente" },
  { to: "/a-propos", label: "À Propos" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[100] bg-white transition-shadow ${
        scrolled ? "shadow-[0_2px_16px_rgba(43,186,201,0.15)]" : ""
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo.url} alt="Ladid Food" className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary [&.active]:text-primary [&.active]:font-semibold"
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a href={CONTACT.phoneHref} className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="h-4 w-4" />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={whatsappGeneralUrl()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-whatsapp text-white transition-transform hover:scale-105"
          >
            <WhatsAppIcon className="h-5 w-5" />
          </a>
          <Link to="/menu" className="btn-primary text-sm">
            Commander
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full bg-cream text-foreground lg:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground/90 hover:bg-cream [&.active]:text-primary"
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href={CONTACT.phoneHref} className="flex items-center gap-2 rounded-lg px-3 py-2 text-primary">
              <Phone className="h-4 w-4" /> {CONTACT.phoneDisplay}
            </a>
            <a
              href={whatsappGeneralUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp w-full"
            >
              <WhatsAppIcon className="h-5 w-5" /> WhatsApp
            </a>
            <Link to="/menu" onClick={() => setOpen(false)} className="btn-primary w-full">
              Commander
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M20.52 3.48A11.94 11.94 0 0 0 12 0C5.37 0 0 5.37 0 12a11.9 11.9 0 0 0 1.64 6L0 24l6.18-1.62A12 12 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 22a10 10 0 0 1-5.1-1.39l-.36-.21-3.67.96.98-3.58-.23-.37A10 10 0 1 1 12 22Zm5.47-7.5c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15s-.78.97-.96 1.17c-.18.2-.35.22-.65.08-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.67-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.53.15-.17.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.63-.93-2.24-.24-.58-.5-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.03-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.11 4.51.72.31 1.27.5 1.71.63.72.23 1.38.2 1.9.12.58-.08 1.77-.72 2.03-1.42.25-.7.25-1.29.17-1.42-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}
