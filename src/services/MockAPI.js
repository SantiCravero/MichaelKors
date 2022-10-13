const dataProducts = [
  {
    id: 1,
    title: "Yacht-Master",
    price: 29999.00,
    subtitle: "Relojes para hombre",
    category: "hombres",
    img: "/assets/watches/watch1.png",
    stock: 8,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 2,
    title: "Air-King",
    price: 14999.00,
    subtitle: "Relojes para hombre",
    category: "hombres",
    img: "/assets/watches/watch2.webp",
    stock: 15,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 3,
    title: "Air-Most",
    price: 13999.00,
    subtitle: "Relojes para mujeres",
    category: "mujeres",
    img: "/assets/watches/watch3.webp",
    stock: 20,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 4,
    title: "DateJust 36",
    price: 69995.00,
    subtitle: "Relojes para mujeres",
    category: "mujeres",
    img: "/assets/watches/watch4.webp",
    stock: 5,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 5,
    title: "GMT-Master II",
    price: 99985.00,
    subtitle: "Relojes de oro",
    category: "oro",
    img: "/assets/watches/watch5.webp",
    stock: 12,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 6,
    title: "Day-Date 40",
    price: 119999.00,
    subtitle: "Relojes de oro",
    category: "oro",
    img: "/assets/watches/watch6.webp",
    stock: 3,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 7,
    title: "Cellini MoonPhase",
    price: 84999.00,
    subtitle: "Relojes de oro",
    category: "oro",
    img: "/assets/watches/watch7.webp",
    stock: 7,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 8,
    title: "Lady DateJust",
    price: 39999.00,
    subtitle: "Relojes para mujeres",
    category: "mujeres",
    img: "/assets/watches/watch8.webp",
    stock: 13,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
];

export default function getProducts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dataProducts);
    }, 1500);
  });
}

export function getSingleProduct(idItem) {
  return new Promise((res, rej) => {
    let itemFind = dataProducts.find((item) => {
      return item.id === Number(idItem);
    });
    setTimeout(() => {
      if (itemFind) res(itemFind);
      else rej(new Error("item no encontrado"));
    }, 2000);
  });
}


export function getProductsByCategory(cat) {
  return new Promise((res, rej) => {
    let itemFind = dataProducts.filter((item) => {
      return item.category === cat;
    });
    setTimeout(()=>{
      if (itemFind) res(itemFind);
      else rej(new Error("item no encontrado"));
    }, 1500)
  });
}