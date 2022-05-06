import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@mui/icons-material';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link} from 'react-router-dom'





const CartWidget = () => {
    const test = useContext(CartContext);

    return (
        <Badge badgeContent={test.calcItemsQty()} color="secondary" >
            <Link to='Cart' style={{textDecoration: "none", color: "white"}}>Cart</Link>
            <ShoppingCartOutlined />
        </Badge>
    );
}

export default CartWidget;