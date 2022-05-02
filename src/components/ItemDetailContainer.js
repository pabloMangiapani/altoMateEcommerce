import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "../utils/firebaseConfig";



const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams(); 

  //componentDidUpdate
  useEffect(() => {
    const fetchFromFireStoreOne = async (idItem) => {
      const docRef = doc(db, "products", idItem);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
      } else {
        console.log("No exist this item");
      }
  }
  fetchFromFireStoreOne(idItem)
        .then(result => setDatos(result))
        .catch(err => console.log(err))
}, []);

  return (
    <>
      <ItemDetail item = {datos} />
    </>
  );
};

export default ItemDetailContainer;