import { data } from "autoprefixer";
import dataProducts from "./MockAPI";

function getProducts() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(dataProducts);
    }, 1000);
  });
}

export default getProducts;
