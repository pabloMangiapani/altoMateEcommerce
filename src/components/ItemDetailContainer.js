import ItemDetail from "./ItemDetail";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
const { products } = require("../utils/products");


const ItemDetailContainer = () => {
  const [datos, setDatos] = useState([]);

  //componentDidUpdate
  useEffect(() => {
    customFetch(2000, products[1])
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