import { CONTACT } from "@/lib/contact";
import { WhatsAppIcon } from "./Header";

export function FloatingWhatsApp() {
  return (
    <a
      href={CONTACT.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Commandez sur WhatsApp"
      className="pulse-ring group fixed bottom-24 right-5 z-[200] flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 md:bottom-6"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-xs font-medium text-white group-hover:block">
        Commandez sur WhatsApp
      </span>
    </a>
  );
}
