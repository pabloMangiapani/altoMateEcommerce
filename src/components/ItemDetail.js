import ItemCount from "./ItemCount";
import { Button } from '@material-ui/core';
import { useState } from 'react';
import { Link } from 'react-router-dom'
// import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import CheckOut from "./CheckOut";




const ItemDetail = ({ item }) => {
  const [itemCount, setItemCount] = useState(0);

  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
    setItemCount(qty);
  };
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
            {/* <ItemCount stock={item.stock} initial={1} onAdd={onAdd} /> */}
          </Card>
          
       : 
        <p>Cargando...</p>
      }
    </>
  );
};

export default ItemDetail;
