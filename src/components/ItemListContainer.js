
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import db from "../utils/firebaseConfig";


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
      const fetchFromFireStore = async (idCategory) => {
        let q;
        if (idCategory) {
          q = query(collection(db, "products"), where('categoryId', '==', idCategory));
      } else {
          q = query(collection(db, "products"), orderBy('name'));
      }
      const querySnapshot = await getDocs(q);
      const dataFromFirestore =  querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return dataFromFirestore;    
  }
  fetchFromFireStore(idCategory)
    .then(result => setDatos(result))
    .catch(err => console.log(err));

  }, [idCategory]);

  
  return (
    <>
      <ItemList items={datos} />
    </>
  );
};

export default ItemListContainer;
