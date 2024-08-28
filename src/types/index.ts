export type Category = {
  id: number;
  name: string;
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: Category;
};

export type ProductWithQuantity = {
  product: Product;
  quantity: number;
};
