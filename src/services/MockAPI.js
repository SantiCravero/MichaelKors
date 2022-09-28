const dataProducts = [
  {
    id: 1,
    title: "Yacht-Master",
    price: 29999.99,
    subtitle: "Relojes de hombre",
    category: "hombres",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126655-0002.png?imwidth=840",
    amount: 1,
    stock: 8,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 2,
    title: "Air-King",
    price: 14999.99,
    subtitle: "Relojes de hombre",
    category: "hombres",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126719blro-0002.png?imwidth=840",
    amount: 1,
    stock: 15,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 3,
    title: "Air-Most",
    price: 13999.99,
    subtitle: "Relojes de mujeres",
    category: "mujeres",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m226658-0001.png?imwidth=840",
    amount: 1,
    stock: 20,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 4,
    title: "DateJust 36",
    price: 69999.99,
    subtitle: "Relojes de mujeres",
    category: "mujeres",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126233-0039.png?impolicy=v6-upright&imwidth=840",
    amount: 1,
    stock: 5,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 5,
    title: "GMT-Master II",
    price: 99999.99,
    subtitle: "Relojes de oro",
    category: "oro",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m126720vtnr-0001.png?impolicy=v6-upright&imwidth=840",
    amount: 1,
    stock: 12,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 6,
    title: "Day-Date 40",
    price: 119999.99,
    subtitle: "Relojes de oro",
    category: "oro",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m228348rbr-0037.png?impolicy=v6-upright&imwidth=840",
    amount: 1,
    stock: 3,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 7,
    title: "Cellini MoonPhase",
    price: 84999.99,
    subtitle: "Relojes de oro",
    category: "oro",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m50535-0002.png?impolicy=v6-upright&imwidth=840",
    amount: 1,
    stock: 7,
    detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
  },
  {
    id: 8,
    title: "Lady DateJust",
    price: 39999.99,
    subtitle: "Relojes de mujeres",
    category: "mujeres",
    img: "https://content.rolex.com/dam/2022/upright-bba-with-shadow/m278274-0035.png?impolicy=v6-upright&imwidth=840",
    amount: 1,
    stock: 25,
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
    }, 1500);
  });
}


export function getProductsByCategory(cat) {
  return new Promise((res, rej) => {
    let itemFind = dataProducts.filter((item) => {
      return item.category === cat;
    });
    if (itemFind) res(itemFind);
    else rej(new Error("item no encontrado"));
  });
}