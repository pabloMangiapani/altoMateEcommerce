import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from './CartContext';
import { WrapperCart, TitleCart, ContentCart, Product, ProductDetail, ImageCart, Details, PriceDetail, ItemCounter, ItemCounterContainer, ProductPrice, Top, InfoCart, TopButton,TopText,Bottom,Summary,SummaryTitle,SummaryItem,SummaryItemText,SummaryItemPrice,Button } from './styledComponents';
import FormatNumber from "../utils/FormatNumber";
import { collection, serverTimestamp, setDoc, doc } from 'firebase/firestore';
import db from '../utils/firebaseConfig';


const Cart = () => {
    const test = useContext(CartContext);
    const checkout = () => {
      let order = {
        buyer: {
          name: "comprador",
          email: "comprador@compras.com",
          phone: "123456789"
        },
        date: serverTimestamp(),
        items: test.cartList.map(item =>({
          id: item.idItem,
          title: item.nameItem,
          price: item.priceItem,
          qty: item.qtyItem
        })) ,
        total: test.calcTotal(),
     }
      console.log(order);

      const createOrderInFirestore = async () => {
        const newOrderRef = doc(collection(db, "orders"));
        await setDoc(newOrderRef, order);
        return newOrderRef;
      }

      createOrderInFirestore()
      .then(result => alert('your order has been created. please take note of the ID of your order.\n\n\nOrder ID: ' + result.id + '\n\n'))
      .catch(err => console.log(err));
  
    test.removeList();
    }
    return (
        <WrapperCart>
            <TitleCart>YOUR CART</TitleCart>
            <Top>
                <Link to='/'><TopButton>CONTINUE SHOPPING</TopButton></Link>
                {
                    (test.cartList.length > 0)
                    ? <TopButton type="filled" onClick={test.removeList}>DELETE ALL PRODUCTS</TopButton>
                    : <TopText>Your cart is empty</TopText>
                }
            </Top>
            {
            test.cartList.length > 0 && (
            <ContentCart>
                <Bottom>
                <InfoCart>
                {
                    test.cartList.length > 0 &&
                    test.cartList.map(item => 
                        <Product key={item.idItem}>
                    <ProductDetail>
                        <ImageCart src={item.imgItem} />
                        <Details>
                        <span>
                            <b>Product:</b> {item.nameItem}
                        </span>
                        <TopButton type="filled" onClick={() => test.deleteItem(item.idItem)}>DELETE</TopButton>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ItemCounterContainer>
                        <ItemCounter>{item.qtyItem} item(s)</ItemCounter>
                        <ItemCounter>$ {item.priceItem} </ItemCounter>
                        </ItemCounterContainer>
                        <ProductPrice>$ {test.calcTotalPerItem(item.idItem)}</ProductPrice>
                    </PriceDetail>
                    </Product>
                        )
                }
                </InfoCart>
                {
                    test.cartList.length > 0 &&
                        <Summary>
                            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                            <SummaryItem>
                                <SummaryItemText>Subtotal</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcSubTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem>
                                <SummaryItemText>Taxes Discount</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={-test.calcTaxes()} /></SummaryItemPrice>
                            </SummaryItem>
                            <SummaryItem type="total">
                                <SummaryItemText>Total</SummaryItemText>
                                <SummaryItemPrice><FormatNumber number={test.calcTotal()} /></SummaryItemPrice>
                            </SummaryItem>
                            <Button onClick={checkout}>CHECKOUT NOW</Button>
                        </Summary>
                }
            </Bottom>
                    
            </ContentCart>
            )
            }
        </WrapperCart>
    );
}

export default Cart;