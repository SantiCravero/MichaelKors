// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  getDoc,
  where,
  query,
  addDoc,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBm7qDSCZwhSGjlZj7HAXPpVEjWaaEUcAA",
  authDomain: "michaelkors-aa681.firebaseapp.com",
  projectId: "michaelkors-aa681",
  storageBucket: "michaelkors-aa681.appspot.com",
  messagingSenderId: "1068047155218",
  appId: "1:1068047155218:web:97f9f1494d129596d3d8cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export async function getProducts() {
  const collectionRef = collection(firestore, "relojes");
  let snapShotDB = await getDocs(collectionRef);

  let dataDocs = snapShotDB.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function getSingleProduct(idParams) {
  try {
    const docRef = doc(firestore, "relojes", idParams);
    const docSnapShot = await getDoc(docRef);
    return { ...docSnapShot.data(), id: docSnapShot.id };
  } catch (error) {
    console.error(error);
  }
}

export async function getProductsByCategory(catParams) {
  const collectionRef = collection(firestore, "relojes");
  const queryCategory = query(collectionRef, where("category", "==", catParams));

  const respuesta = await getDocs(queryCategory);
  
  let dataDocs = respuesta.docs.map((documento) => {
    let docFormateado = { ...documento.data(), id: documento.id };
    return docFormateado;
  });
  return dataDocs;
}

export async function createBuyOrder(orderData){
  const collectionRef = collection(firestore, "orders")
  let respuesta = await addDoc(collectionRef, orderData)

  // este seria el numero de ticket de tu compra
  return respuesta.id
}


// SIRVE PARA ENVIAR EL ARRAY DE DATOS AUTOMATICAMENTE A FIREBASE
// FALTA COLOCAR BOTON EN ALGUN LADO Y PASARLE LA FUNCION

// export async function exportDataToFirestore(){
//   const dataProducts = [
//     {
//       id: 1,
//       title: "Yacht-Master",
//       price: 29999.00,
//       subtitle: "Relojes para hombre",
//       category: "hombres",
//       img: "/assets/watches/watch1.png",
//       stock: 8,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 2,
//       title: "Air-King",
//       price: 14999.00,
//       subtitle: "Relojes para hombre",
//       category: "hombres",
//       img: "/assets/watches/watch2.webp",
//       stock: 15,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 3,
//       title: "Air-Most",
//       price: 13999.00,
//       subtitle: "Relojes para mujeres",
//       category: "mujeres",
//       img: "/assets/watches/watch3.webp",
//       stock: 20,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 4,
//       title: "DateJust 36",
//       price: 69995.00,
//       subtitle: "Relojes para mujeres",
//       category: "mujeres",
//       img: "/assets/watches/watch4.webp",
//       stock: 5,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 5,
//       title: "GMT-Master II",
//       price: 99985.00,
//       subtitle: "Relojes de oro",
//       category: "oro",
//       img: "/assets/watches/watch5.webp",
//       stock: 12,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 6,
//       title: "Day-Date 40",
//       price: 119999.00,
//       subtitle: "Relojes de oro",
//       category: "oro",
//       img: "/assets/watches/watch6.webp",
//       stock: 3,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 7,
//       title: "Cellini MoonPhase",
//       price: 84999.00,
//       subtitle: "Relojes de oro",
//       category: "oro",
//       img: "/assets/watches/watch7.webp",
//       stock: 7,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//     {
//       id: 8,
//       title: "Lady DateJust",
//       price: 39999.00,
//       subtitle: "Relojes para mujeres",
//       category: "mujeres",
//       img: "/assets/watches/watch8.webp",
//       stock: 13,
//       detail: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae necessitatibus dicta minima eligendi incidunt consequuntur nesciunt, et laborum sed veniam iste voluptate in saepe aspernatur eveniet magnam veritatis dolore repellendus!"
//     },
//   ];

//   const collectionRef = collection(firestore, "relojes")

//   for (let item of dataProducts){
//     delete item.id
//     const newDoc = await addDoc(collectionRef, item)
//     console.log(newDoc)
//   }
// }

export default firestore;
