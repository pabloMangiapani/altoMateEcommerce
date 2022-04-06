// const ItemListContainer = (props) => {
//     return (
//         <>
//         <div>
//             <span>{props.greeting}</span>
//         </div>
//         </>
//     );
// }

import { useEffect, useState } from "react"
import { Button } from '@material-ui/core';
import { AddCircleOutlined, RemoveCircleOutlined } from '@mui/icons-material';
import { ItemCounterContainer, ItemCounter } from './styledComponents';




const ItemListContainer = ({ stock = 20, initial = 1, onAdd} ) => {
    const [count, setCount] = useState(0);

    useEffect(() =>{
        setCount(initial);
    }, [] );

    const addItem = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    }

    const removeItem = () => {
        if (count > initial) {
            setCount(count - 1);
        }
    }

    return (
        <ItemCounterContainer>
        <Button variant="text" onClick={addItem}><AddCircleOutlined color="success" /></Button>
        <ItemCounter>{count}</ItemCounter>
        <Button variant="text" onClick={removeItem}><RemoveCircleOutlined color="secondary" /></Button>

        <div>
             <Button variant="contained" color="secondary" onClick={() => onAdd(count)}>Add to Cart</Button>
        </div>

        </ItemCounterContainer>
    )
}

export default ItemListContainer;