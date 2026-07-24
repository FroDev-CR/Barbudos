// Generated from the public Barbudos menu at:
// https://mymenuqr.com/barbudos/menu.html
// Review prices with the restaurant before publishing future updates.

export type MenuVariant = {
  label: string;
  price: string;
};

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  tag?: string;
  art: string;
  variants?: MenuVariant[];
};

export const MENU_CATEGORIES = [
  "Todos",
  "Entradas",
  "Alitas",
  "Ceviches",
  "Plato Ejecutivo",
  "Para Compartir",
  "Hamburguesas",
  "Sandwiches",
  "Sopas",
  "Pescados",
  "Carnes",
  "Ensaladas",
  "Wraps",
  "Pitas",
  "Tacos",
  "Pizzas",
  "Platos Vegetarianos",
  "Adicionales",
  "Menú de Niños",
  "Postres",
  "Cócteles",
  "Sangrías",
  "Bebidas Sin Alcohol",
  "Shots",
  "Cervezas y Vinos",
  "Bebidas Calientes"
];

export const MENU_ITEMS: MenuItem[] = [
  {
    "id": "nachos",
    "name": "Nachos",
    "description": "Crujientes tortillas de maíz, cubiertas de frijoles molidos, salsa de queso Cheddar, acompañadas de pico de gallo, aceitunas, natilla, maíz dulce y guacamole.",
    "price": "Desde ₡6.050",
    "category": "Entradas",
    "art": "wings",
    "variants": [
      {
        "label": "Carne Mechada",
        "price": "₡6.350"
      },
      {
        "label": "Pollo",
        "price": "₡6.050"
      },
      {
        "label": "Mixtos",
        "price": "₡6.850"
      }
    ]
  },
  {
    "id": "mozzarella-sticks",
    "name": "Mozzarella Sticks",
    "description": "Deliciosas barritas de queso mozzarella empanizadas, acompañadas de salsa marinara",
    "price": "₡5.900",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "aros-de-cebolla",
    "name": "Aros de Cebolla",
    "description": "Empanizados al mejor estilo Barbudos, condimentados con especias originales, servidos con nuestra deliciosa salsa BBQ",
    "price": "₡5.200",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "camarones-empanizados",
    "name": "Camarones Empanizados",
    "description": "Servidos con papas fritas, ensalada de la casa, acompañados de nuestra mayonesa de culantro y salsa chipotle.",
    "price": "₡6.550",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "fish-sticks",
    "name": "Fish Sticks",
    "description": "Deliciosos fish fingers, empanizados con nuestra receta original, servidos con elote, papas gajo, salsa de culantro y salsa chipotle.",
    "price": "₡6.850",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "gajos-de-papa",
    "name": "Gajos de Papa",
    "description": "Deliciosas papas gajo con hierbas, acompañadas de nuestra deliciosa salsa de culantro.",
    "price": "₡5.200",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "canastas-de-patacones",
    "name": "Canastas de Patacones",
    "description": "Canastitas rellenas de ceviche, carne mechada, pollo mechado y camarón al ajillo, servidas sobre una cama de frijoles molidos y pico de gallo al lado.",
    "price": "₡7.450",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "quesadilla-barbudos",
    "name": "Quesadilla Barbudos",
    "description": "Tortilla de harina doradita con tu proteína favorita al estilo Barbudos mezcla de quesos, chile dulce, cebolla, maíz dulce, salsa chipotle y ranch acompañada de ensalada y natilla.",
    "price": "Desde ₡6.350",
    "category": "Entradas",
    "art": "wings",
    "variants": [
      {
        "label": "Carne Mechada",
        "price": "₡6.750"
      },
      {
        "label": "Pollo",
        "price": "₡6.350"
      },
      {
        "label": "Mixta",
        "price": "₡6.850"
      }
    ]
  },
  {
    "id": "quesadilla-de-camarones",
    "name": "Quesadilla de Camarones",
    "description": "Crujiente tortilla de harina, rellena de deliciosos camarones al ajillo, hongos salteados con chile dulce, cebolla, maíz dulce, mezcla de quesos y nuestro delicioso aderezo chipotle y ranch. Acompañada natilla y ensalada.",
    "price": "₡7.150",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "chicken-fingers-platter",
    "name": "Chicken Fingers platter",
    "description": "Exquisitos deditos de pollo, acompañados de elote, nuestras deliciosas papas gajo con aderezo de mayonesa culantro y mostaza miel.",
    "price": "₡7.200",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "mini-egg-rolls",
    "name": "Mini Egg Rolls",
    "description": "Rollitos tipo chinos, rellenos de repollo, zanahoria y pollo servidos con salsa agridulce de chile.",
    "price": "₡5.200",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "chifrijo-barbudos",
    "name": "Chifrijo Barbudos",
    "description": "Tradicional combinación entre arroz blanco, frijoles tiernos, acompañado de nuestro delicioso chicharron, pico de gallo, aguacate y jalapeños.",
    "price": "₡5.600",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "papas-locas",
    "name": "Papas locas",
    "description": "Deliciosas papas locas servidas con nuestra carne o pollo mechados, recubiertas de pico de gallo, natilla, salsa de queso cheddar y cebollín.",
    "price": "Desde ₡5.950",
    "category": "Entradas",
    "art": "wings",
    "variants": [
      {
        "label": "Pollo",
        "price": "₡5.950"
      },
      {
        "label": "Carne",
        "price": "₡6.050"
      },
      {
        "label": "Mixta",
        "price": "₡6.350"
      }
    ]
  },
  {
    "id": "papas-fritas",
    "name": "Papas Fritas",
    "description": "Con salsa de la casa.",
    "price": "₡3.700",
    "category": "Entradas",
    "art": "wings"
  },
  {
    "id": "boneless-wings",
    "name": "Boneless Wings",
    "description": "¡Uno de los favoritos! Crujientes trocitos de pechuga de pollo ligeramente empanizados y bañados en la salsa de tu elección. · Acompañados de zanahoria, varitas de apio y aderezo Ranch. · Salsas a elegir: · BBQ / Teriyaki / Búfalo / Mostaza Miel",
    "price": "₡7.450",
    "category": "Alitas",
    "art": "fries"
  },
  {
    "id": "chicken-wings",
    "name": "Chicken Wings",
    "description": "Acompañadas de varitas de apio, zanahoria y aderezo Ranch · Salsas a elegir: · BBQ / Teriyaki / Búfalo / Mostaza Miel",
    "price": "Desde ₡6.650",
    "category": "Alitas",
    "art": "fries",
    "variants": [
      {
        "label": "6 unds.",
        "price": "₡6.650"
      },
      {
        "label": "12 unds.",
        "price": "₡12.650"
      },
      {
        "label": "18 unds.",
        "price": "₡17.800"
      }
    ]
  },
  {
    "id": "ceviche-clasico",
    "name": "Ceviche Clásico",
    "description": "Deliciosos trozos de Marlín Dorado, empapados en jugo de limón, con cebolla morada, culantro, chile dulce, aguacate y chutney de mango, acompañado de chips de plátano verde.",
    "price": "Desde ₡6.350",
    "category": "Ceviches",
    "art": "burger",
    "variants": [
      {
        "label": "Clásico",
        "price": "₡6.350"
      },
      {
        "label": "Mixto",
        "price": "₡6.750"
      },
      {
        "label": "Camarón",
        "price": "₡7.250"
      }
    ]
  },
  {
    "id": "plato-ejecutivo",
    "name": "Plato Ejecutivo",
    "description": "Delicioso casado con una proteína a elegir, acompañado de arroz, frijoles, ensalada verde, plátano maduro y vegetales salteados. · Opciones a elegir: · - Filet de pollo empanizado o a la plancha · - Filet de pescado empanizado o a la plancha · - Fajitas de carne o pollo · - Bistec",
    "price": "₡5.500",
    "category": "Plato Ejecutivo",
    "art": "fire"
  },
  {
    "id": "trios",
    "name": "Tríos",
    "description": "Elegí tres deliciosas entradas y armá tu plato · - Fish sticks · - Costilla BBQ · - Chicken Wings · - Alitas Boneless · - Mozzarella Sticks · - Canastas de Patacón",
    "price": "₡16.800",
    "category": "Para Compartir",
    "art": "ribs"
  },
  {
    "id": "duos",
    "name": "Dúos",
    "description": "Combinación de dos de nuestros platillos favoritos · - Mini sliders y chicken fingers · - Costilla y Aros de cebolla · - Fish Sticks y Mozzarella sticks",
    "price": "₡11.850",
    "category": "Para Compartir",
    "art": "ribs"
  },
  {
    "id": "quesadilla-burger",
    "name": "Quesadilla Burger",
    "description": "Torta de 8oz. de carne Angus, sazonada, gratinada con nuestros quesos, cheddar y provolone, cubierta con lonjas de tocineta crujiente, montada sobre una cama de pico de gallo, lechuga y aderezo de chile panameño. Todo esto dentro de dos tortillas de harina.",
    "price": "₡6.350",
    "category": "Hamburguesas",
    "art": "tacos"
  },
  {
    "id": "avocado-burger",
    "name": "Avocado Burger",
    "description": "Torta de carne Angus sazonada con queso suizo, tocino, frescas rebanadas de aguacate, lechuga, tomate, pepinillos, cebolla morada, bañada en nuestro aderezo de aguacate.",
    "price": "₡6.800",
    "category": "Hamburguesas",
    "art": "tacos"
  },
  {
    "id": "bacon-cheese-burger",
    "name": "Bacon Cheese Burger",
    "description": "Torta de carne 100% Angus, elaborada con ingredientes Premium, con lonjas de tocineta crujientes, queso cheddar, todo entre un pan tostado.",
    "price": "₡6.300",
    "category": "Hamburguesas",
    "art": "tacos"
  },
  {
    "id": "barbu-burger",
    "name": "Barbu Burger",
    "description": "Cubierta con deliciosos hongos, aros de cebolla, queso provolone, queso cheddar, lonjas de tocineta crujientes, sobre un pan tostado y nuestra exclusiva salsa BBQ, acompañada de lechuga, tomate y pepinillos.",
    "price": "₡7.400",
    "category": "Hamburguesas",
    "art": "tacos"
  },
  {
    "id": "classic-burger",
    "name": "Classic Burger",
    "description": "Un cuarto de libra de carne de res fresca, queso Americano, lechuga,ketchup, mostaza y cebolla, en un delicioso pan Challah.",
    "price": "₡5.700",
    "category": "Hamburguesas",
    "art": "tacos"
  },
  {
    "id": "mini-sliders",
    "name": "Mini Sliders",
    "description": "Dos mini hamburguesitas jugosas, acompañadas de tocino picado, cebolla y chutney de mango y piña.",
    "price": "₡6.750",
    "category": "Hamburguesas",
    "art": "tacos"
  },
  {
    "id": "honey-bbq-chicken",
    "name": "Honey BBQ Chicken",
    "description": "Pechuga de pollo empanizada, bañada con salsa BBQ, cubierta de queso provolone y tocineta, servida sobre pan tostado con mostaza miel, lechuga, tomate, pepinillos y cebolla morada.",
    "price": "₡6.350",
    "category": "Sandwiches",
    "art": "cocktail"
  },
  {
    "id": "bufalo-chicken-ranch",
    "name": "Búfalo Chicken Ranch",
    "description": "Crujiente pechuga de pollo bañada en salsa búfalo, queso provolone gratinado, servida con lechuga, tomate, pepinillos y cebolla morada.",
    "price": "₡6.350",
    "category": "Sandwiches",
    "art": "cocktail"
  },
  {
    "id": "choripan-de-la-casa",
    "name": "Choripan de la casa",
    "description": "Probalo con nuestro delicioso chimichurri, servido con pico de gallo y papas a la francesa.",
    "price": "₡5.500",
    "category": "Sandwiches",
    "art": "cocktail"
  },
  {
    "id": "emparedado-de-pollo",
    "name": "Emparedado de Pollo",
    "description": "Deliciosa pechuga de pollo a la plancha con lechuga, tomate, pepinillos, cebolla, aguacate. Acompañado de papas fritas.",
    "price": "₡4.600",
    "category": "Sandwiches",
    "art": "cocktail"
  },
  {
    "id": "emparedado-de-carne",
    "name": "Emparedado de carne",
    "description": "Carne mechada, lechuga, tomate, pepinillos, cebolla, aguacate. Acompañado de papas fritas.",
    "price": "₡4.600",
    "category": "Sandwiches",
    "art": "cocktail"
  },
  {
    "id": "azteca",
    "name": "Azteca",
    "description": "Acompañada de tiritas de tortilla tostada.",
    "price": "₡5.600",
    "category": "Sopas",
    "art": "lemonade"
  },
  {
    "id": "mariscos",
    "name": "Mariscos",
    "description": "Acompañada de arroz.",
    "price": "₡6.300",
    "category": "Sopas",
    "art": "lemonade"
  },
  {
    "id": "filete-de-pescado-empanizado",
    "name": "Filete de pescado empanizado",
    "description": "Acompañado de puré y vegetales.",
    "price": "₡6.750",
    "category": "Pescados",
    "art": "wings"
  },
  {
    "id": "filete-de-pescado-a-la-plancha",
    "name": "Filete de pescado a la plancha",
    "description": "Acompañado de puré y vegetales.",
    "price": "₡6.750",
    "category": "Pescados",
    "art": "wings"
  },
  {
    "id": "salmon-a-la-parrilla",
    "name": "Salmón a la parrilla",
    "description": "Acompañado de puré y vegetales.",
    "price": "₡7.850",
    "category": "Pescados",
    "art": "wings"
  },
  {
    "id": "gordon-bleu-de-carne",
    "name": "Gordon Bleu de Carne",
    "description": "Lonjas de carne, rellenas de jamón ahumado y queso mozzarella envuelto en tocino acompañado de puré y vegetales bañado en salsa de hongos.",
    "price": "₡6.950",
    "category": "Carnes",
    "art": "fries"
  },
  {
    "id": "gordon-bleu-de-pollo",
    "name": "Gordon Bleu de Pollo",
    "description": "Deliciosa pechuga de pollo, rellena de jamón ahumado y queso mozzarella envuelto en tocino, acompañado de puré y vegetales, bañado en salsa de hongos.",
    "price": "₡6.875",
    "category": "Carnes",
    "art": "fries"
  },
  {
    "id": "costilla-de-cerdo-tradicional",
    "name": "Costilla de cerdo tradicional",
    "description": "Delicioso rack de cerdo bañado en salsa BBQ, acompañados de ensalada de la casa, papas gajo y elote.",
    "price": "₡7.850",
    "category": "Carnes",
    "art": "fries"
  },
  {
    "id": "parrillada-barbudos",
    "name": "Parrillada Barbudos",
    "description": "Deliciosas fajitas de pollo y res, chorizo, costilla BBQ. Acompañadas de tortillas de maíz, frijol molido, pico de gallo y elote.",
    "price": "₡11.850",
    "category": "Carnes",
    "art": "fries"
  },
  {
    "id": "lomito-barbudos",
    "name": "Lomito Barbudos",
    "description": "200g de lomito con tocineta. Acompañado de puré y vegetales",
    "price": "₡8.300",
    "category": "Carnes",
    "art": "fries"
  },
  {
    "id": "lomito-mar-y-tierra",
    "name": "Lomito Mar y Tierra",
    "description": "200g de lomito con tocineta, con exquisitos camarones salteados con hongos, chile dulce, cebolla y queso mozzarella. Acompañado de puré y vegetales.",
    "price": "₡9.250",
    "category": "Carnes",
    "art": "fries"
  },
  {
    "id": "fajitas",
    "name": "Fajitas",
    "description": "Jugosa carne de res o pollo a la parrilla, sobre una cama de cebollas y pimientos, acompañadas de pico de gallo, frijoles molidos y tortillas de maíz o harina.",
    "price": "Desde ₡6.350",
    "category": "Carnes",
    "art": "fries",
    "variants": [
      {
        "label": "Res",
        "price": "₡7.200"
      },
      {
        "label": "Pollo",
        "price": "₡6.350"
      },
      {
        "label": "Mixtas",
        "price": "₡7.500"
      }
    ]
  },
  {
    "id": "ensalada-caesar",
    "name": "Ensalada Caesar",
    "description": "Fresca y crujiente mezcla de lechugas, acompañada de pico de gallo, tiritas de tortilla de maíz, queso parmesano, hongos, aceitunas y cebolla morada, aderezo Caesar, pollo o camarones a la parrilla.",
    "price": "Desde ₡6.000",
    "category": "Ensaladas",
    "art": "burger",
    "variants": [
      {
        "label": "Pollo",
        "price": "₡6.000"
      },
      {
        "label": "Camarones",
        "price": "₡6.450"
      }
    ]
  },
  {
    "id": "ensalada-de-la-casa",
    "name": "Ensalada de la Casa",
    "description": "Combinación de lechugas, acompañadas de tomate cherry, zanahoria, cebolla morada, rodajas de pepino y vinagreta de la casa.",
    "price": "₡4.950",
    "category": "Ensaladas",
    "art": "burger"
  },
  {
    "id": "wrap-de-res",
    "name": "Wrap de Res",
    "description": "Carne de lomo, cocida con hongos, cebolla y queso mozzarella, mezcla de lechugas, cebolla morada, zanahoria, tomate cherry, mezcla de quesos y aderezo de aguacate.",
    "price": "₡6.350",
    "category": "Wraps",
    "art": "fire"
  },
  {
    "id": "wrap-de-camaron",
    "name": "Wrap de Camarón",
    "description": "Camarones empanizados, mezcla de lechugas, tomate cherry, mezcla de quesos, cebolla morada y salsa chipotle.",
    "price": "₡6.750",
    "category": "Wraps",
    "art": "fire"
  },
  {
    "id": "wrap-de-pollo-crispy",
    "name": "Wrap de Pollo Crispy",
    "description": "Pollo estilo teriyaki, mezcla de quesos, mezcla de lechugas, zanahoria, cebolla morada y tomate cherry.",
    "price": "₡6.150",
    "category": "Wraps",
    "art": "fire"
  },
  {
    "id": "pita-de-res",
    "name": "Pita de Res",
    "description": "Pan mediterráneo con carne de lomo salteada con hongos, cebolla y queso mozzarella, mezcla de lechugas, pepino, tomates cherry, alfalfa y aderezo de culantro.",
    "price": "₡5.950",
    "category": "Pitas",
    "art": "ribs"
  },
  {
    "id": "pita-de-pollo-teriyaki",
    "name": "Pita de Pollo Teriyaki",
    "description": "Pan mediterráneo, mezcla de lechugas, trozos de pollo empanizados, bañados en salsa teriyaki, cebolla caramelizada, tomates cherry, pepino y alfalfa.",
    "price": "₡5.850",
    "category": "Pitas",
    "art": "ribs"
  },
  {
    "id": "pita-de-camarones",
    "name": "Pita de Camarones",
    "description": "Pan mediterráneo, mezcla de lechugas, camarones empanizados, tomate cherry, pepino, cebolla caramelizada, alfalfa y salsa chipotle.",
    "price": "₡6.750",
    "category": "Pitas",
    "art": "ribs"
  },
  {
    "id": "pita-deensalada-griega",
    "name": "Pita deEnsalada Griega",
    "description": "Pan mediterráneo, mezcla de lechugas, delicioso pollo a la parrilla, rodajas de pepino, tomates cherry, cebolla morada, aceitunas y aderezo italiano.",
    "price": "₡5.200",
    "category": "Pitas",
    "art": "ribs"
  },
  {
    "id": "tacos-de-lomo",
    "name": "Tacos de Lomo",
    "description": "Carne de lomo salteada con hongos, cebolla y queso mozzarella, acompañados de nuestra mezcla de ensalada, tomate en gajos, mandarina y aguacate, con aderezo de culantro, servidos en una tortilla de harina.",
    "price": "₡6.750",
    "category": "Tacos",
    "art": "tacos"
  },
  {
    "id": "tacos-de-camaron-empanizados",
    "name": "Tacos de Camarón Empanizados",
    "description": "Camarones empanizados, acompañados de nuestra mezcla de ensalada, tomate en gajos, mandarina y aguacate con aderezo de chipotle servidos en una tortilla de harina.",
    "price": "₡6.850",
    "category": "Tacos",
    "art": "tacos"
  },
  {
    "id": "tacos-de-pollo-crispy",
    "name": "Tacos de Pollo Crispy",
    "description": "Deliciosos trozos de pollo crispy, acompañados de nuestra mezcla de ensalada, tomate en gajos, mandarina y aguacate con aderezo de culantro servidos en una tortilla de harina.",
    "price": "₡6.350",
    "category": "Tacos",
    "art": "tacos"
  },
  {
    "id": "tacos-de-pescado",
    "name": "Tacos de Pescado",
    "description": "Fish sticks acompañados de nuestra mezcla de lechugas, mandarina, aguacate, tomate cherry y aderezo chipotle, servidos en una tortilla de harina.",
    "price": "₡7.350",
    "category": "Tacos",
    "art": "tacos"
  },
  {
    "id": "tacos-de-birria",
    "name": "Tacos de Birria",
    "description": "Tortilla de maíz ensalsada en caldo de birria, carne de birria, queso mozarella, culantro, cebolla y caldo para dippear.",
    "price": "₡7.300",
    "category": "Tacos",
    "art": "tacos"
  },
  {
    "id": "tacos-al-pastor",
    "name": "Tacos al Pastor",
    "description": "Tortillas de maíz rellenas con carne de cerdo condimentada con salsa de especias y chiles secos. Acompañados de salsa de chile de árbol, piña, cebolla, culantro y gajos de limón.",
    "price": "Desde ₡6.350",
    "category": "Tacos",
    "art": "tacos",
    "variants": [
      {
        "label": "4 unidades",
        "price": "₡6.350"
      },
      {
        "label": "8 unidades",
        "price": "₡12.200"
      },
      {
        "label": "12 unidades",
        "price": "₡14.500"
      }
    ]
  },
  {
    "id": "pizza-margarita",
    "name": "Pizza Margarita",
    "description": "Mezcla de quesos, tomate en rodajas, orégano y albahaca.",
    "price": "₡6.750",
    "category": "Pizzas",
    "art": "cocktail"
  },
  {
    "id": "pizza-vegetariana",
    "name": "Pizza Vegetariana",
    "description": "Mezcla de quesos, cebolla,tomate, chile dulce, hongos y aceitunas.",
    "price": "₡6.350",
    "category": "Pizzas",
    "art": "cocktail"
  },
  {
    "id": "pizza-jamon-y-hongos",
    "name": "Pizza Jamón y Hongos",
    "description": "Mezcla de quesos, jamón Serrano y hongos frescos.",
    "price": "₡6.900",
    "category": "Pizzas",
    "art": "cocktail"
  },
  {
    "id": "pizza-de-camarones",
    "name": "Pizza de Camarones",
    "description": "Mezcla de quesos, camarones, cebolla morada.",
    "price": "₡7.500",
    "category": "Pizzas",
    "art": "cocktail"
  },
  {
    "id": "hamburguesa-vegetariana",
    "name": "Hamburguesa vegetariana",
    "description": "Torta de soya con deliciosos hongos y cebolla salteados, lechuga, tomate, pepinillos, cebolla morada, aguacate y alfalfa. Acompañada de camotes fries.",
    "price": "₡6.350",
    "category": "Platos Vegetarianos",
    "art": "lemonade"
  },
  {
    "id": "nachos-vegetarianos",
    "name": "Nachos vegetarianos",
    "description": "Crujientes tortillas de maíz, cubiertas de frijoles molidos, acompañadas de pico de gallo, hongos, aceitunas, mezcla de lechuga, maíz dulce, cebollino, guacamole, natilla y salsa de queso.",
    "price": "₡6.350",
    "category": "Platos Vegetarianos",
    "art": "lemonade"
  },
  {
    "id": "wrap-vegetariano",
    "name": "Wrap Vegetariano",
    "description": "Tortilla de harina con mezcla de hongos, chile dulce y cebolla salteados, aguacate, frijol negro, arroz, maíz dulce, pico de gallo. Acompañado de camotes fries.",
    "price": "₡5.950",
    "category": "Platos Vegetarianos",
    "art": "lemonade"
  },
  {
    "id": "bowl-vegetariano",
    "name": "Bowl Vegetariano",
    "description": "Delicioso Bowl con arroz blanco, frijol negro, papa gajo en trazos, maíz dulce, tomate Cherry, salteado de vegetales y aguacate.",
    "price": "₡5.950",
    "category": "Platos Vegetarianos",
    "art": "lemonade"
  },
  {
    "id": "springs-rolls-vegetarianos",
    "name": "Springs Rolls Vegetarianos",
    "description": "Deliciosos Rolls de papel de arroz rellenos de mezcla de lechuga, pepino, zanahoria, fideos de arroz, brotes de frijol o alfalfa acompañados de nuestra deliciosa salsa de maní.",
    "price": "₡5.950",
    "category": "Platos Vegetarianos",
    "art": "lemonade"
  },
  {
    "id": "adicional-a-elegir",
    "name": "Adicional a elegir",
    "description": "Puré de papa · Arroz blanco · Frijoles tiernos · Yuca frita · Bowl de ensalada · Papas fritas · Vegetales",
    "price": "₡1.155",
    "category": "Adicionales",
    "art": "wings"
  },
  {
    "id": "pizza-jamon-y-queso",
    "name": "Pizza Jamón y Queso",
    "description": "Pizza Jamón y Queso, disponible en Barbudos.",
    "price": "₡4.050",
    "category": "Menú de Niños",
    "art": "fries"
  },
  {
    "id": "mini-hamburguesita-con-papas",
    "name": "Mini hamburguesita con papas",
    "description": "Mini hamburguesita con papas, disponible en Barbudos.",
    "price": "₡4.050",
    "category": "Menú de Niños",
    "art": "fries"
  },
  {
    "id": "deditos-de-pollo-con-papas",
    "name": "Deditos de Pollo con papas",
    "description": "Deditos de Pollo con papas, disponible en Barbudos.",
    "price": "₡4.050",
    "category": "Menú de Niños",
    "art": "fries"
  },
  {
    "id": "lemon-pie",
    "name": "Lemon Pie",
    "description": "Lemon Pie, disponible en Barbudos.",
    "price": "₡3.450",
    "category": "Postres",
    "art": "burger"
  },
  {
    "id": "new-york-cheese-cake",
    "name": "New York Cheese Cake",
    "description": "New York Cheese Cake, disponible en Barbudos.",
    "price": "₡3.450",
    "category": "Postres",
    "art": "burger"
  },
  {
    "id": "cheese-cake-de-fresa",
    "name": "Cheese Cake de Fresa",
    "description": "Cheese Cake de Fresa, disponible en Barbudos.",
    "price": "₡3.450",
    "category": "Postres",
    "art": "burger"
  },
  {
    "id": "margarita-bulldog",
    "name": "Margarita Bulldog",
    "description": "Margarita Bulldog, disponible en Barbudos.",
    "price": "₡4.950",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "margaritas",
    "name": "Margaritas",
    "description": "Frozen o en las rocas · Tequila, Triple Sec, Limón · Sabores: Fresa, Maracuya, Tradicional",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "bayles-capuchino",
    "name": "Bayles Capuchino",
    "description": "Bayles Capuchino, disponible en Barbudos.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "pepper-mary",
    "name": "Pepper Mary",
    "description": "Vodka de pimienta, jugo de tomate, salsa inglesa, salsa Tabasco, sal, pimienta negra, limón mesino.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "cosmopolitan",
    "name": "Cosmopolitan",
    "description": "Refrescante con vodka absolut, Triple Sec, jugo de naranja y jugo de cramberry.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "cuba-libre",
    "name": "Cuba Libre",
    "description": "Este clásico cóctel cubano con ron y coca cola, lleva décadas deleitando los paladares. Es un trago sumamente refrescante. ¡Salud!",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "caipirina",
    "name": "Caipiriña",
    "description": "Empezaremos con la caipiriña, el cóctel más popular de Brasil y una bebida reconocida como la más famosa de este país en todo el mundo, elaborada con licor de cachaza, azúcar y jugo de limón.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "pina-colada",
    "name": "Piña Colada",
    "description": "Ron, licor de naranja, almíbar, jugo de piña, licor de coco, coco Lopez, piña y naranja deshidratado.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "tequila-sunrise",
    "name": "Tequila Sunrise",
    "description": "Esta clásica receta mexicana fue creada en la década de 1930, obtiene su nombre por la mezcla de granadina junto al jugo de naranja y tequila, que le dan unos tonos muy parecidos a un amanecer.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "mojitos",
    "name": "Mojitos",
    "description": "Ron claro, hiebabuena,limón, azúcar, angosturas · Ron claro, hiebabuena, fresas, limón, azúcar · Ron claro, hiebabuena, limón, jalea de maracuyá, vainilla · Ron, hiebabuena, limón, azúcar, vino tinto & soda · Tradicional Mojito · Mojito Fresa · Tropical Mojito · Mojito Passion",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "pasitran",
    "name": "Pasitran",
    "description": "Mezcla de vodka smirnoff, jugo de limón, hielo y una pizca de sal.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "negroni",
    "name": "Negroni",
    "description": "Un clásico italiano para el aperitivo.",
    "price": "₡4.400",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "godfather",
    "name": "Godfather",
    "description": "Whisky escoces y licor de almendra.",
    "price": "₡5.300",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "aperol-spritz",
    "name": "Aperol Spritz",
    "description": "Deliciosa infusión de hierbas, mezclada con soda y naranja. Delicioso sabor agridulce.",
    "price": "₡4.950",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "cucaracha",
    "name": "Cucaracha",
    "description": "Coctel mexicano, elaborado con tequila kalua, jagger, ron. Coctel fuerte pero agradable.",
    "price": "₡4.950",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "jameson-ginger-and-lime",
    "name": "Jameson Ginger and lime",
    "description": "Coctel de verano, refrescante. Mezcla de whisky Jameson, ginger ale y un splash de limón.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "paloma-hibisco",
    "name": "Paloma Hibisco",
    "description": "Tequila infusionado en hibisco pomelo, limón, jarabe simple, soda.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "campari-spritz",
    "name": "Campari Spritz",
    "description": "Licor amargo, Prosecco, piel de naranja y soda.",
    "price": "₡4.950",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "fresh-house-mule",
    "name": "Fresh House Mule",
    "description": "Vodka Absolut, house ginger beer, hierbabuena, limón",
    "price": "₡4.950",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "cacique-of-the-house",
    "name": "Cacique of the House",
    "description": "Cacique infusionado con mango y fruta de la pasión, limón y soda.",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "daiquiris",
    "name": "Daiquiris",
    "description": "Desde cuba a nuestro país, tenemos variedad de sabores, pruébalos. · Sabores: Fresa / Maracuyá / Hierbabuena / Mango",
    "price": "₡4.350",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "gin-tonics",
    "name": "Gin & Tonics",
    "description": "Tanqueray Gin Limón, naranja importada, limón, fresa, hierbabuena · Tanqueray Gin, jalea de maracuyá, vainilla, limón, romero, naranja importada · Gin Bombay bramble, fresas, arándanos, frambuesa, limón, hierbabuena · Tanqueray Gin, slice de pepino y limón · Tanqueray Gin, canela, semillas de anís, cardamomo, enebro, limón · Tanqueray Gin, arándanos rojos, semillas de cilantro, piel de naranja y limón · Gin Naranja & Fresa · Tropical Passionfruit · Frutos Rojos · Pepino Limón · Gin Aromas · Gin Frutal",
    "price": "₡4.950",
    "category": "Cócteles",
    "art": "fire"
  },
  {
    "id": "red-sangria",
    "name": "Red Sangría",
    "description": "Red Sangría, disponible en Barbudos.",
    "price": "₡4.950",
    "category": "Sangrías",
    "art": "ribs"
  },
  {
    "id": "white-sangria",
    "name": "White Sangría",
    "description": "White Sangría, disponible en Barbudos.",
    "price": "₡4.950",
    "category": "Sangrías",
    "art": "ribs"
  },
  {
    "id": "blue-sangria",
    "name": "Blue Sangría",
    "description": "Blue Sangría, disponible en Barbudos.",
    "price": "₡4.950",
    "category": "Sangrías",
    "art": "ribs"
  },
  {
    "id": "con-sabor-natural-puedes-escoger",
    "name": "Con sabor natural puedes escoger:",
    "description": "Fresa Mango Maracuyá Piña Limonada con Hierbabuena Fresa con Hierbabuena",
    "price": "₡2.050",
    "category": "Bebidas Sin Alcohol",
    "art": "tacos"
  },
  {
    "id": "anis",
    "name": "Anís",
    "description": "Anís, disponible en Barbudos.",
    "price": "₡1.350",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "guayabiado",
    "name": "Guayabiado",
    "description": "Guayabiado, disponible en Barbudos.",
    "price": "₡1.550",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "pitufo-jagger",
    "name": "Pitufo Jagger",
    "description": "Pitufo Jagger, disponible en Barbudos.",
    "price": "₡2.900",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "bella-y-bestia",
    "name": "Bella y bestia",
    "description": "Bella y bestia, disponible en Barbudos.",
    "price": "₡2.900",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "aguardiente",
    "name": "Aguardiente",
    "description": "Aguardiente, disponible en Barbudos.",
    "price": "₡1.650",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "hypnotic",
    "name": "Hypnotic",
    "description": "Hypnotic, disponible en Barbudos.",
    "price": "₡2.900",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "miguelito",
    "name": "Miguelito",
    "description": "Miguelito, disponible en Barbudos.",
    "price": "₡1.250",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "semen-de-pitufo",
    "name": "Semen de Pitufo",
    "description": "Semen de Pitufo, disponible en Barbudos.",
    "price": "₡1.250",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "mamadita",
    "name": "Mamadita",
    "description": "Mamadita, disponible en Barbudos.",
    "price": "₡2.900",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "jaggger",
    "name": "Jaggger",
    "description": "Jaggger, disponible en Barbudos.",
    "price": "₡2.550",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "guaro",
    "name": "Guaro",
    "description": "Guaro, disponible en Barbudos.",
    "price": "₡1.350",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "chiliguaro",
    "name": "Chiliguaro",
    "description": "Chiliguaro, disponible en Barbudos.",
    "price": "₡1.250",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "chilimaracuya",
    "name": "Chilimaracuyá",
    "description": "Chilimaracuyá, disponible en Barbudos.",
    "price": "₡1.250",
    "category": "Shots",
    "art": "cocktail"
  },
  {
    "id": "imperial-silver-imp-light-ultra-pilsen-pilsen-6-0",
    "name": "Imperial, Silver, Imp Light, Ultra, Pilsen, Pilsen 6.0",
    "description": "Imperial, Silver, Imp Light, Ultra, Pilsen, Pilsen 6.0, disponible en Barbudos.",
    "price": "₡1.650",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "bavaria",
    "name": "Bavaria",
    "description": "Bavaria, disponible en Barbudos.",
    "price": "₡2.350",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "smirnoff",
    "name": "Smirnoff",
    "description": "Smirnoff, disponible en Barbudos.",
    "price": "₡2.350",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "coors-light",
    "name": "Coors Light",
    "description": "Coors Light, disponible en Barbudos.",
    "price": "₡2.200",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "corona",
    "name": "Corona",
    "description": "Corona, disponible en Barbudos.",
    "price": "₡2.200",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "sol",
    "name": "Sol",
    "description": "Sol, disponible en Barbudos.",
    "price": "₡2.200",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "heineken",
    "name": "Heineken",
    "description": "Heineken, disponible en Barbudos.",
    "price": "₡2.450",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "stella",
    "name": "Stella",
    "description": "Stella, disponible en Barbudos.",
    "price": "₡2.650",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "modelo",
    "name": "Modelo",
    "description": "Modelo, disponible en Barbudos.",
    "price": "₡2.200",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "vinos-por-copa",
    "name": "Vinos por copa",
    "description": "Tintos y Blancos",
    "price": "₡4.950",
    "category": "Cervezas y Vinos",
    "art": "lemonade"
  },
  {
    "id": "cafe-negro",
    "name": "Café Negro",
    "description": "Café Negro, disponible en Barbudos.",
    "price": "₡1.450",
    "category": "Bebidas Calientes",
    "art": "wings"
  },
  {
    "id": "cafe-con-leche",
    "name": "Café con Leche",
    "description": "Café con Leche, disponible en Barbudos.",
    "price": "₡1.650",
    "category": "Bebidas Calientes",
    "art": "wings"
  },
  {
    "id": "capuchino",
    "name": "Capuchino",
    "description": "Capuchino, disponible en Barbudos.",
    "price": "₡1.900",
    "category": "Bebidas Calientes",
    "art": "wings"
  },
  {
    "id": "expreso",
    "name": "Expreso",
    "description": "Expreso, disponible en Barbudos.",
    "price": "₡1.450",
    "category": "Bebidas Calientes",
    "art": "wings"
  }
];
