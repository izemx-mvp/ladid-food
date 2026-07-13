export const CONTACT = {
  brand: "Ladid Food",
  tagline: "La cuisine marocaine authentique, livrée chez vous",
  phoneDisplay: "0537 000 000",
  phoneHref: "tel:+212537000000",
  whatsappNumber: "212600000000",
  whatsappUrl: "https://wa.me/212600000000",
  email: "contact@ladidfood.ma",
  address: "Quartier XX, Kénitra, Maroc",
  hours: "Tous les jours : 10h00 – 22h00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Kénitra+Maroc",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105745.0!2d-6.58!3d34.25!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0c2c1c1c1c1c1c%3A0x0!2zS8Opbml0cmE!5e0!3m2!1sfr!2sma!4v1700000000000",
  socials: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
};

export function whatsappOrderUrl(dishName: string, price: number) {
  const msg = `Bonjour, je souhaite commander : ${dishName} — ${price}dh`;
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(msg)}`;
}

export function whatsappGeneralUrl(text = "Bonjour, je souhaite passer une commande.") {
  return `${CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`;
}
