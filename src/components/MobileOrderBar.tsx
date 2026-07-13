import { Phone } from "lucide-react";
import { CONTACT, whatsappGeneralUrl } from "@/lib/contact";
import { WhatsAppIcon } from "./Header";

export function MobileOrderBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-[150] grid grid-cols-2 gap-2 border-t border-border bg-white/95 p-3 backdrop-blur md:hidden">
      <a href={CONTACT.phoneHref} className="btn-primary w-full text-sm">
        <Phone className="h-4 w-4" /> Appeler
      </a>
      <a href={whatsappGeneralUrl()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full text-sm">
        <WhatsAppIcon className="h-5 w-5" /> WhatsApp
      </a>
    </div>
  );
}
