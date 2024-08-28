import image from "./assets/plant.webp";
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
    image,
    category: INDOOR_PLANTS,
  },
  { id: 2, name: "Snake Plant", price: 51, image, category: INDOOR_PLANTS },
  {
    id: 3,
    name: "Monstera Deliciosa",
    price: 52,
    image,
    category: INDOOR_PLANTS,
  },
  { id: 4, name: "Peace Lily", price: 53, image, category: FLOWERING_PLANTS },
  {
    id: 5,
    name: "Chinese Money Plant",
    price: 54,
    image,
    category: INDOOR_PLANTS,
  },
  { id: 6, name: "Jade Plant", price: 55, image, category: SUCCULENTS_CACTI },
  { id: 7, name: "Aloe Vera", price: 56, image, category: SUCCULENTS_CACTI },
  { id: 8, name: "Spider Plant", price: 57, image, category: INDOOR_PLANTS },
  { id: 9, name: "Pothos", price: 58, image, category: INDOOR_PLANTS },
  { id: 10, name: "ZZ Plant", price: 59, image, category: INDOOR_PLANTS },
  { id: 11, name: "Philodendron", price: 60, image, category: INDOOR_PLANTS },
  { id: 12, name: "Rubber Tree", price: 61, image, category: TREES_PALMS },
  { id: 13, name: "Calathea", price: 62, image, category: INDOOR_PLANTS },
  { id: 14, name: "Bamboo Palm", price: 63, image, category: TREES_PALMS },
  { id: 15, name: "Yucca", price: 64, image, category: TREES_PALMS },
  {
    id: 16,
    name: "Bird of Paradise",
    price: 65,
    image,
    category: FLOWERING_PLANTS,
  },
  {
    id: 17,
    name: "Succulent Mix",
    price: 66,
    image,
    category: SUCCULENTS_CACTI,
  },
  { id: 18, name: "Orchid", price: 67, image, category: FLOWERING_PLANTS },
  { id: 19, name: "Palm Tree", price: 68, image, category: TREES_PALMS },
  { id: 20, name: "Fern", price: 69, image, category: INDOOR_PLANTS },
];
