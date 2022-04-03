import { Badge } from '@material-ui/core';
import { ShoppingCartOutlined } from '@mui/icons-material';

const CartWidget = () => {
    return (
        <Badge badgeContent={6} color="secondary" >
            <ShoppingCartOutlined color="warning" />
        </Badge>
    )
}

export default CartWidget;