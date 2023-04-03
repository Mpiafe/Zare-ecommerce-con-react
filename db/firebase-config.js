
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBAU_EflVZ6vKdp8Cb05fT_Kx_vHyDjaLg",
  authDomain: "deviaje-e6e8f.firebaseapp.com",
  projectId: "deviaje-e6e8f",
  storageBucket: "deviaje-e6e8f.appspot.com",
  messagingSenderId: "350090614690",
  appId: "1:350090614690:web:f60fcad96c9988643ec4fb"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;