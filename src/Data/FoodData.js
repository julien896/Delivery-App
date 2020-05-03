export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
  });
}

export const foodItems = [
  {
    name: "Calabresa Pizza",
    img: "/img/calabresa.jpg",
    section: "Pizza",
    price: 1
  },
  {
    name: "Fugazzeta Pizza",
    img: "/img/fugazzeta.png",
    section: "Pizza",
    price: 1.5
  },
  {
    name: "Margherita Pizza",
    img: "/img/margherita.jpg",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/mozzarela.jpg",
    name: "Mozzarella Pizza",
    section: "Pizza",
    price: 2
  },
  {
    img: "/img/napolitana.png",
    name: "Napoles Pizza",
    section: "Pizza",
    price: 3
  },
  { img: "/img/provolone.jpg", name: "Pizza Provolone",section: "Pizza", price: 3 },
  {
    img: "/img/roman.jpg",
    name: "Roman Pizza",
    section: "Pizza",
    price: 2.5
  },
  {
    img: "/img/sicilian.jpg",
    name: "Sicilian Pizza",
    section: "Pizza",
    price: 1
  },
  {
    price: 1,
    name: "Soda",
    section: "Drinks",
    choices: ["Coke", "Sprite", "Root Beer"]
  }
  
];

export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
