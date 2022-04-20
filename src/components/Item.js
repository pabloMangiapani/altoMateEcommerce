import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';
import { Link } from 'react-router-dom';



const Item = ({ id, name, stock, price, pictureUrl }) => {
    return (
        <ProductContainer>
            <Circle />
            <Image src={pictureUrl} />
            <Info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon>
                    <DescriptionOutlined /><strong>{name}</strong>
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                <Link to={`/item/${id}`}><InfoOutlined />Details</Link>
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;
