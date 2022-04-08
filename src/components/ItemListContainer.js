// const ItemListContainer = (props) => {
//     return (
//         <>
//         <div>
//             <span>{props.greeting}</span>
//         </div>
//         </>
//     );
// }

import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import customFetch from "../utils/customFetch";
import { useEffect, useState } from "react";
const { products } = require("../utils/products");

const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);

  //componentDidUpdate
  useEffect(() => {
    customFetch(2000, products)
      .then((result) => setDatos(result))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <ItemList items={datos} />
      <ItemCount stock={5} initial={1} onAdd={0} />
    </>
  );
};

export default ItemListContainer;
