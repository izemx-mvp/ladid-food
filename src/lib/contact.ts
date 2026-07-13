export const CONTACT = {
  brand: "Ladid Food",
  tagline: "La cuisine marocaine authentique, livrée chez vous",
  phoneDisplay: "0522 000 000",
  phoneHref: "tel:+212522000000",
  whatsappNumber: "212600000000",
  whatsappUrl: "https://wa.me/212600000000",
  email: "contact@ladidfood.ma",
  address: "Quartier XX, Casablanca, Maroc",
  hours: "Tous les jours : 10h00 – 22h00",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Casablanca+Maroc",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106391.06663306543!2d-7.669383499999999!3d33.572280000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0xb06c1d84f310fd3!2sCasablanca!5e0!3m2!1sen!2sma!4v1700000000000",
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
