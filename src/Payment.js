import React, { useState,useEffect } from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {link, useHistory} from "react-router-dom"
import { Link } from '@material-ui/core';
import {CardElement,useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from "react-currency-format";
import {getBasketTotal} from "./reducer";
import axios from './axios';
import Orders from './Orders';
import {db} from './firebase'; 




function Payment() {
    const [{basket, user },dispatch] = useStateValue();

    const history= useHistory();

    
    const stripe = useStripe();
    const elements =useElements();

    const [succeeded,setSucceeded] = useState(false);
    const [processing,setProcessing] = useState("");

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);

    //stripe
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() =>{
        //generate the special stripe secret which allows usto charge a customer

        const getClientSecret = async () =>{
            const response = await axios ({
                method: 'post',
                //stripe expects the total in a currencies submits.
                url : `/payments/create?total=${getBasketTotal(basket) * 100}`
            });

            setClientSecret(response.data.clientSecret)

            

        }

        getClientSecret();

    },[basket])

    console.log(getBasketTotal(basket)* 100)

    console.log("the secret is>>>>",clientSecret)
    


    const handleSubmit = async (event) =>{
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({paymentIntent }) =>{

            //paymentIntent =payment confirmation

            db
             .collection('users')
             .doc(user.uid)
             .collection('orders')
             .doc(paymentIntent.id)
             .set({
                basket:basket,
                amount:paymentIntent.amount,
                created:paymentIntent.created
            })

        
            

            setSucceeded(true);
            setError(null);
            setProcessing(false)

            dispatch({
                type:"Empty_basket"
            })
            

            history.replace('/orders')
        })



    }

    const handleChange = event =>{
        //listen for changes in the cardElement
        //and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message :"");

    }
    



    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Basket(<Link to="/checkout">{basket.length} Items</Link>)
                </h1>
                {/*payment -delivery address*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{(user.email)}</p>
                        <p> 123 React world</p>
                        <p>Angel,kerala </p>
                    </div>
                </div>

                {/*payment - review item*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review items & delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => (
                             <CheckoutProduct
                             id={item.id}
                             title={item.title}
                             image={item.image}
                             price={item.price}
                             rating={item.rating}
                            />
                        ))}
                    </div>

                </div>

                {/* payment - payment method*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method </h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}></CardElement>
                            <div className="payment_priceContainer">
                            <CurrencyFormat
                            renderText={(value) => (
                                <h3>Order Total:{value}</h3>
                          
            
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={"text"}
                            thousandSeparator={true}
                            prefix={"₹"}
                            />
                            <button disabled={processing || disabled || succeeded}>
                            <span>{processing ? <p>processing</p> : "Buy Now"}</span>
                            </button>

                            </div>
                            {/*errors*/}
                            {error && <div>{error}</div>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment