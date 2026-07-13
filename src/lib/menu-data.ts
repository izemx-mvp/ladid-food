import essentials from "@/assets/essentials-pack.png";
import boeufFume from "@/assets/boeuf-fume.png";
import boeufVapeur from "@/assets/boeuf-vapeur.png";
import golden from "@/assets/golden-fried-chicken.png";
import familyPack from "@/assets/family-pack.png";
import tajinePokeYaourt from "@/assets/tajine-pokebowl-yaourt.png";
import tajinePoke from "@/assets/tajine-pokebowl-jus.png";
import pastaFormule from "@/assets/pasta-formule.png";
import pastaJus from "@/assets/pasta-jus.png";
import breakfastLuxe from "@/assets/breakfast-luxe.png";
import breakfastSucreSale from "@/assets/breakfast-sucre-sale.png";
import tajineVegeJus from "@/assets/tajine-vege-jus.png";
import tajineVegeYaourt from "@/assets/tajine-vege-yaourt.png";
import rfissa from "@/assets/rfissa.png";
import kerin from "@/assets/kerin.png";
import couscousPoulet from "@/assets/couscous-poulet.png";
import couscousBoeuf from "@/assets/couscous-boeuf.png";
import pastillaPoulet from "@/assets/pastilla-poulet.png";
import pastillaPoisson from "@/assets/pastilla-poisson.png";

export type Protein = "Poulet" | "Bœuf" | "Agneau" | "Poisson" | "Végétarien";
export type Category =
  | "packs"
  | "pasta"
  | "breakfast"
  | "tajines"
  | "couscous"
  | "pastilla";

export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: Category;
  proteins: Protein[];
  bestSeller?: boolean;
  limitedOffer?: boolean;
  spicy?: boolean;
  vegetarian?: boolean;
}

export const CATEGORY_LABELS: Record<Category, string> = {
  packs: "Packs & Formules",
  pasta: "Pasta & Léger",
  breakfast: "Petit-déjeuner",
  tajines: "Tajines & Plats Traditionnels",
  couscous: "Couscous",
  pastilla: "Pastilla",
};

export const DISHES: Dish[] = [
  // Packs
  {
    id: "essentials-pack",
    name: "The Essentials Pack",
    description: "Poulet fondant, daghmira maison et riz parfumé — le grand classique du quotidien.",
    price: 28,
    image: essentials,
    category: "packs",
    proteins: ["Poulet"],
  },
  {
    id: "pack-boeuf-fume",
    name: "Pack Bœuf Fumé Marocain",
    description: "Bœuf fumé façon marocaine, salade fraîche et jus d'orange pressé.",
    price: 68,
    image: boeufFume,
    category: "packs",
    proteins: ["Bœuf"],
  },
  {
    id: "boeuf-vapeur",
    name: "Bœuf Vapeur",
    description: "Bœuf vapeur tendre, riz et légumes vapeur, salade fraîche et jus d'orange.",
    price: 65,
    image: boeufVapeur,
    category: "packs",
    proteins: ["Bœuf"],
  },
  {
    id: "golden-fried-chicken",
    name: "Golden Fried Chicken",
    description: "Poulet doré croustillant, riz basmati, sauce marocaine, salade verte, yaourt et jus d'orange.",
    price: 58,
    image: golden,
    category: "packs",
    proteins: ["Poulet"],
    bestSeller: true,
  },
  {
    id: "family-pack",
    name: "Family Pack",
    description: "Tajine beldi, poulet grillé sur riz basmati, poke bowl, 2 jus d'orange et 2 yaourts — idéal 3 à 4 personnes.",
    price: 128,
    image: familyPack,
    category: "packs",
    proteins: ["Poulet", "Bœuf"],
    bestSeller: true,
  },
  {
    id: "tajine-poke-jus-yaourt",
    name: "Tajine Beldi + Poke Bowl + Jus + Yaourt Fraise",
    description: "Tajine beldi mijoté, poke bowl frais, jus d'orange et yaourt fraise maison.",
    price: 88,
    image: tajinePokeYaourt,
    category: "packs",
    proteins: ["Poulet"],
  },
  {
    id: "tajine-poke-jus",
    name: "Tajine Beldi + Poke Bowl + Jus",
    description: "Le duo tradition + fraîcheur : tajine beldi, poke bowl et jus d'orange pressé.",
    price: 78,
    image: tajinePoke,
    category: "packs",
    proteins: ["Poulet"],
    bestSeller: true,
  },
  // Pasta
  {
    id: "pasta-formule",
    name: "Pasta Sauce Tomate & Boulettes — Formule Complète",
    description: "Pâtes sauce tomate, boulettes de viande maison, salade fraîche, pana cotta fraise et jus d'orange.",
    price: 48,
    image: pastaFormule,
    category: "pasta",
    proteins: ["Bœuf"],
    limitedOffer: true,
  },
  {
    id: "pasta-jus",
    name: "Pasta Sauce Tomate & Boulettes + Jus d'Orange",
    description: "Pâtes gourmandes aux boulettes de viande, servies avec un jus d'orange frais.",
    price: 37,
    image: pastaJus,
    category: "pasta",
    proteins: ["Bœuf"],
  },
  // Breakfast
  {
    id: "breakfast-luxe",
    name: "Petit-Déjeuner de Luxe",
    description: "Toast croustillant, sauce avocat crémeuse, crevettes fraîches, œuf au plat, jus d'orange, boisson chaude au choix et pana cotta fraise.",
    price: 65,
    image: breakfastLuxe,
    category: "breakfast",
    proteins: ["Poisson"],
  },
  {
    id: "breakfast-sucre-sale",
    name: "Breakfast Sucré-Salé",
    description: "Toast avocat & crevettes avec œuf parfait, toast banane sauce caramel et jus d'orange frais.",
    price: 49,
    image: breakfastSucreSale,
    category: "breakfast",
    proteins: ["Poisson", "Végétarien"],
  },
  // Tajines
  {
    id: "tajine-vege-jus",
    name: "Tajine Beldi Végétarien + Jus d'Orange",
    description: "Légumes du marché mijotés au tajine, épices douces et jus d'orange pressé.",
    price: 38,
    image: tajineVegeJus,
    category: "tajines",
    proteins: ["Végétarien"],
    vegetarian: true,
  },
  {
    id: "tajine-vege-yaourt",
    name: "Tajine Beldi Végétarien + Yaourt Fraise",
    description: "Tajine de légumes fondants et yaourt fraise maison pour finir en douceur.",
    price: 38,
    image: tajineVegeYaourt,
    category: "tajines",
    proteins: ["Végétarien"],
    vegetarian: true,
  },
  {
    id: "rfissa",
    name: "Rfissa Maison au Poulet Beldi",
    description: "Msemen effiloché, poulet beldi mijoté au fenugrec et lentilles — un vrai plat de maman.",
    price: 40,
    image: rfissa,
    category: "tajines",
    proteins: ["Poulet"],
  },
  {
    id: "kerin",
    name: "Pois Chiches aux Pieds de Veau (Ker3in)",
    description: "Ker3in traditionnel, pois chiches fondants et sauce parfumée au safran.",
    price: 65,
    image: kerin,
    category: "tajines",
    proteins: ["Bœuf"],
    spicy: true,
  },
  // Couscous
  {
    id: "couscous-poulet",
    name: "Couscous Marocain au Poulet + Lben",
    description: "Semoule roulée main, poulet fondant, légumes du couscous et grand verre de lben frais.",
    price: 40,
    image: couscousPoulet,
    category: "couscous",
    proteins: ["Poulet"],
  },
  {
    id: "couscous-boeuf",
    name: "Couscous Marocain au Bœuf + Lben",
    description: "Semoule dorée, bœuf mijoté longuement, légumes de saison et lben glacé.",
    price: 48,
    image: couscousBoeuf,
    category: "couscous",
    proteins: ["Bœuf"],
  },
  // Pastilla
  {
    id: "pastilla-poulet",
    name: "Pastilla au Poulet",
    description: "Pastilla croustillante au poulet, amandes grillées, cannelle et sucre glace — format 4 personnes.",
    price: 110,
    image: pastillaPoulet,
    category: "pastilla",
    proteins: ["Poulet"],
    bestSeller: true,
  },
  {
    id: "pastilla-poisson",
    name: "Pastilla au Poisson",
    description: "Pastilla dorée aux poissons frais, vermicelles et fines herbes — format 4 personnes.",
    price: 128,
    image: pastillaPoisson,
    category: "pastilla",
    proteins: ["Poisson"],
  },
];

export const BEST_SELLERS = DISHES.filter((d) => d.bestSeller).slice(0, 4);

// Daily specials — one signature dish per day
export const DAILY_SPECIALS: { day: string; dishId: string; note: string }[] = [
  { day: "Lundi", dishId: "essentials-pack", note: "Le classique pour bien commencer la semaine" },
  { day: "Mardi", dishId: "tajine-poke-jus", note: "Tradition & fraîcheur en un seul pack" },
  { day: "Mercredi", dishId: "rfissa", note: "Rfissa maison, comme chez maman" },
  { day: "Jeudi", dishId: "kerin", note: "Ker3in du jeudi, pois chiches & pieds de veau" },
  { day: "Vendredi", dishId: "couscous-poulet", note: "Le couscous du vendredi, servi avec lben" },
  { day: "Samedi", dishId: "pastilla-poulet", note: "Pastilla dorée, format familial" },
  { day: "Dimanche", dishId: "family-pack", note: "Family Pack pour le déjeuner en famille" },
];
