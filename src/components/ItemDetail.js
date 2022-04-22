import ItemCount from "./ItemCount";
import { useState, useContext } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import CheckOut from "./CheckOut";
import { CartContext } from './CartContext';




const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
    test.addToCart(item, qty);
  }
  const tab = <>&nbsp;</>;

  return (
    <>
      {item.image ? 
        
          <Card style={{ width: '30rem' }} >
            <Card.Img variant="top" src={item.image[0]} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text style={{color: 'red'}}>${item.price}</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">UNIDADES DISPONIBLES:{tab}
                {item.stock}
              </small>
            </Card.Footer>
            {
                itemCount === 0
                ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                : <CheckOut />
            }
          </Card>
          
       : 
        <p>Cargando...</p>
      }
    </>
  );
};

export default ItemDetail;
