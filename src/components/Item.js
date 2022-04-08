import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined } from '@mui/icons-material';
import { ProductContainer, Circle, Image, Info, Icon } from './styledComponents';



const Item = ({ name, stock, price, pictureUrl }) => {
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
                    <InfoOutlined />Details
                </Icon>
            </Info>
        </ProductContainer>
    );
}

export default Item;
