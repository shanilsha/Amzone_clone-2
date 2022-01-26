import React, { forwardRef } from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';
import StarIcon from '@material-ui/icons/Star';
import FlipMove from 'react-flip-move';
import {Card, CardContent, Typography } from '@material-ui/core';



const CheckoutProduct =forwardRef(
    ({id,hideButton,quantity,title,image,price,rating},ref) =>{

    const[{basket},dispatch] = useStateValue();

    console.log("this is basket>>>>",basket)

    const removeFromBasket = () => {
        //remove item from basket
        dispatch({
            type:"Remove_from_basket",
            id: id,
            disabledButton:false
        });
    }
    return (

        <Card>
            <CardContent>
            <Typography>
        <div ref={ref}  className="checkoutProduct">
            <img className="checkoutProduct_image" src={image} alt=""></img>

            <div  className="checkoutProduct_info">
                <p className="checkoutProduct_title"> {title} </p>

                <p className="checkoutProduct_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div  className="checkoutProduct_rating">
               {
                 Array(rating)
                 .fill()
                 .map((_,i) => (
                     <p>⭐
                     </p>
                 ))} 

            </div>
            

            
             {!hideButton&&
             (
          
              <button onClick={removeFromBasket}>Remove From Basket</button>
             )
             }


            </div>
            
        </div>
        </Typography>
        </CardContent>
        </Card>
    );
}
);

export default CheckoutProduct
