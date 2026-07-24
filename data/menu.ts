export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  tag?: string;
  art: string;
};

export const MENU_CATEGORIES = [
  "Todos",
  "Para compartir",
  "Hamburguesas",
  "Platos",
  "Bebidas",
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: "alitas-barbudos",
    name: "Alitas Barbudos",
    description: "10 alitas crujientes con salsa de la casa, apio y dip cremoso.",
    price: "₡5.900",
    category: "Para compartir",
    tag: "Favorito",
    art: "wings",
  },
  {
    id: "papas-bravas",
    name: "Papas Bravas",
    description: "Papas rústicas, salsa brava ahumada, alioli y cebollín.",
    price: "₡3.800",
    category: "Para compartir",
    art: "fries",
  },
  {
    id: "la-barbuda",
    name: "La Barbuda",
    description: "Carne de res, queso, cebolla caramelizada, tocineta y salsa especial.",
    price: "₡6.900",
    category: "Hamburguesas",
    tag: "La de la casa",
    art: "burger",
  },
  {
    id: "la-fuego",
    name: "La Fuego",
    description: "Carne de res, pepper jack, jalapeño, pico de gallo y mayo picante.",
    price: "₡7.200",
    category: "Hamburguesas",
    tag: "Picante",
    art: "fire",
  },
  {
    id: "costilla-bbq",
    name: "Costilla BBQ",
    description: "Costilla cocida lentamente, BBQ de café, papas y ensalada fresca.",
    price: "₡8.900",
    category: "Platos",
    art: "ribs",
  },
  {
    id: "tacos-del-barrio",
    name: "Tacos del Barrio",
    description: "Tres tacos de birria, queso, cebolla, culantro y consomé.",
    price: "₡6.500",
    category: "Platos",
    tag: "Nuevo",
    art: "tacos",
  },
  {
    id: "barbudo-sour",
    name: "Barbudo Sour",
    description: "Whisky, limón, sirope especiado, clara y bitters.",
    price: "₡4.500",
    category: "Bebidas",
    art: "cocktail",
  },
  {
    id: "limonada-de-la-casa",
    name: "Limonada de la Casa",
    description: "Limón, hierbabuena, jengibre y soda. También disponible con gin.",
    price: "₡2.900",
    category: "Bebidas",
    art: "lemonade",
  },
];
