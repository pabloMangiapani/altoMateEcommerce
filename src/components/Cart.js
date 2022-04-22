import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ItemCounter, ItemCounterContainer, ProductPrice } from './styledComponents';



const Cart = () => {
    const test = useContext(CartContext);

    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <button onClick={test.removeCart}>DELETE ALL</button>

            {
            test.cartList.length > 0 && (
            <ContentCart>
                {
                    test.cartList.map(item => 
                        <Product>
                    <ProductDetail>
                        <ImageCart src={item.image[0]} />
                        <Details>
                        <span>
                            <b>Product:</b> {item.name}
                        </span>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ItemCounterContainer>
                        <ItemCounter>3 </ItemCounter>
                        </ItemCounterContainer>
                        <ProductPrice>$ {item.price}</ProductPrice>
                    </PriceDetail>
                    </Product>
                        )
                }
                    
            </ContentCart>
            )
            }
        </WrapperCart>
    );
}

export default Cart;