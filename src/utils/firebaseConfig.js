// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0LlMvyXFzJ3EMrum2Ks0h2GOyN1pYxxE",
  authDomain: "altomate-1d3ae.firebaseapp.com",
  projectId: "altomate-1d3ae",
  storageBucket: "altomate-1d3ae.appspot.com",
  messagingSenderId: "305613419257",
  appId: "1:305613419257:web:4638e061d4513433d0a828"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export default db;