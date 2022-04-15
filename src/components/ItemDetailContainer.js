import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const { products } = require("../utils/products");


const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);
  const { idItem } = useParams(); 

  //componentDidUpdate
  useEffect(() => {
    customFetch(2000, products.find(item => item.id === parseInt(idItem)))
      .then(result => setDatos(result))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <ItemDetail item = {datos} />
    </>
  );
};

export default ItemDetailContainer;