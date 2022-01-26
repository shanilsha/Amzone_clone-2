import React from 'react';
import { useStateValue } from './StateProvider';
import CheckoutProduct from "./CheckoutProduct";
import './Checkout.css';
import Subtotal from './Subtotal';
import  CurrencyFormat from 'react-currency-format';
import './Footer';
import FlipMove from 'react-flip-move';


function Checkout() {
    const [{basket,user},dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
            <img className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt=""></img>
            {basket.length === 0 ? (
                <div>
                    <h1>Your Amazon Basket is empty </h1>
                    <p>
                       You have no items in your basket.
                       To buy one or more items,Click
                       "Add to basket". 
                    </p>
                    
                </div>
                
            ):(
               <div>
                   
                   
                   <h2 className="checkout_title">Your Amazon basket</h2>
                   <FlipMove>
                   
                   {/* list of checkout product*/}
                   {basket.map(item =>(
                       <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                       />
                       
                   ))}
                   </FlipMove>
               </div> 

            )}
            </div>
            {basket.length > 0 &&(
                <div className="checkout_right">
                    
                    <Subtotal></Subtotal>
                </div>
            )}
        </div>
        

        
    );
    
}

export default Checkout
