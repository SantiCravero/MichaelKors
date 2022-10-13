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

export default firestore;
