import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import db from "../utils/firebaseConfig";


const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  //componentDidUpdate
  useEffect(() => {
      const fetchFromFireStore = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const dataFromFirestore =  querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
    }));
    return dataFromFirestore;    
  }
  fetchFromFireStore()
    .then(result => setDatos(result))
    .catch(err => console.log(err));

  }, [idCategory]);

  const onAdd = (qty) =>{
    alert ("You have selected " + qty + " items.");
  }
  
  return (
    <>
      <ItemList items={datos} />
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
