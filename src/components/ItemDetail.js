import ItemCount from "./ItemCount";
// import { DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from './styledComponents';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";



const ItemDetail = ({ item }) => {
  const onAdd = (qty) => {
    alert("You have selected " + qty + " items.");
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
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">UNIDADES DISPONIBLES:{tab}
                {item.stock}
              </small>
            </Card.Footer>
            <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
          </Card>
          
       : 
        <p>Cargando...</p>
      }
    </>
  );
};

export default ItemDetail;
