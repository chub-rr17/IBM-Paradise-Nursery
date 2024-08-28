import plant1 from "./assets/plants/1.jpg";
import plant2 from "./assets/plants/2.jpg";
import plant3 from "./assets/plants/3.jpg";
import plant4 from "./assets/plants/4.jpg";
import plant5 from "./assets/plants/5.jpg";
import plant6 from "./assets/plants/6.jpg";
import plant7 from "./assets/plants/7.jpg";
import plant8 from "./assets/plants/8.jpg";
import plant9 from "./assets/plants/9.jpg";
import plant10 from "./assets/plants/10.jpg";
import plant11 from "./assets/plants/11.jpg";
import plant12 from "./assets/plants/12.jpg";
import plant13 from "./assets/plants/13.jpg";
import plant14 from "./assets/plants/14.jpg";
import plant15 from "./assets/plants/15.jpg";
import plant16 from "./assets/plants/16.jpg";
import plant17 from "./assets/plants/17.jpg";
import plant18 from "./assets/plants/18.jpg";
import plant19 from "./assets/plants/19.jpg";
import plant20 from "./assets/plants/20.jpg";

import { Category, Product } from "./types";

export const INDOOR_PLANTS: Category = { id: 1, name: "Indoor Plants" };
export const SUCCULENTS_CACTI: Category = { id: 2, name: "Succulents & Cacti" };
export const FLOWERING_PLANTS: Category = { id: 3, name: "Flowering Plants" };
export const TREES_PALMS: Category = { id: 4, name: "Trees & Palms" };

export const PRODUCTS_MOCK: Product[] = [
  {
    id: 1,
    name: "Fiddle Leaf Fig",
    price: 50,
    image: plant1,
    category: INDOOR_PLANTS,
    description: "A popular plant known for its large, glossy leaves.",
  },
  {
    id: 2,
    name: "Snake Plant",
    price: 51,
    image: plant2,
    category: INDOOR_PLANTS,
    description: "An easy-to-care-for plant with striking upright leaves.",
  },
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 52,
    image: plant3,
    category: INDOOR_PLANTS,
    description: "A tropical plant with iconic split leaves.",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 53,
    image: plant4,
    category: FLOWERING_PLANTS,
    description: "A beautiful plant known for its white blooms.",
  },
  {
    id: 5,
    name: "Chinese Money Plant",
    price: 54,
    image: plant5,
    category: INDOOR_PLANTS,
    description: "A trendy plant with round, coin-shaped leaves.",
  },
  {
    id: 6,
    name: "Jade Plant",
    price: 55,
    image: plant6,
    category: SUCCULENTS_CACTI,
    description: "A resilient succulent with thick, fleshy leaves.",
  },
  {
    id: 7,
    name: "Aloe Vera",
    price: 56,
    image: plant7,
    category: SUCCULENTS_CACTI,
    description: "A medicinal plant known for its healing gel.",
  },
  {
    id: 8,
    name: "Spider Plant",
    price: 57,
    image: plant8,
    category: INDOOR_PLANTS,
    description: "A hardy plant that produces spider-like offshoots.",
  },
  {
    id: 9,
    name: "Pothos",
    price: 58,
    image: plant9,
    category: INDOOR_PLANTS,
    description: "A versatile plant with heart-shaped, trailing leaves.",
  },
  {
    id: 10,
    name: "ZZ Plant",
    price: 59,
    image: plant10,
    category: INDOOR_PLANTS,
    description: "A tough plant with glossy, dark green leaves.",
  },
  {
    id: 11,
    name: "Philodendron",
    price: 60,
    image: plant11,
    category: INDOOR_PLANTS,
    description: "A popular plant with heart-shaped leaves.",
  },
  {
    id: 12,
    name: "Rubber Tree",
    price: 61,
    image: plant12,
    category: TREES_PALMS,
    description: "A large plant with broad, dark green leaves.",
  },
  {
    id: 13,
    name: "Calathea",
    price: 62,
    image: plant13,
    category: INDOOR_PLANTS,
    description: "A striking plant known for its patterned leaves.",
  },
  {
    id: 14,
    name: "Bamboo Palm",
    price: 63,
    image: plant14,
    category: TREES_PALMS,
    description: "A tall palm with graceful, arching fronds.",
  },
  {
    id: 15,
    name: "Yucca",
    price: 64,
    image: plant15,
    category: TREES_PALMS,
    description: "A hardy plant with sharp, sword-like leaves.",
  },
  {
    id: 16,
    name: "Bird of Paradise",
    price: 65,
    image: plant16,
    category: FLOWERING_PLANTS,
    description: "A stunning plant with vibrant, bird-like flowers.",
  },
  {
    id: 17,
    name: "Succulent Mix",
    price: 66,
    image: plant17,
    category: SUCCULENTS_CACTI,
    description: "A diverse collection of easy-care succulents.",
  },
  {
    id: 18,
    name: "Orchid",
    price: 67,
    image: plant18,
    category: FLOWERING_PLANTS,
    description: "An elegant plant known for its exotic blooms.",
  },
  {
    id: 19,
    name: "Palm Tree",
    price: 68,
    image: plant19,
    category: TREES_PALMS,
    description: "A classic palm that adds a tropical vibe.",
  },
  {
    id: 20,
    name: "Fern",
    price: 69,
    image: plant20,
    category: INDOOR_PLANTS,
    description: "A lush plant with delicate, feathery fronds.",
  },
];
