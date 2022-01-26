import React from 'react'
import "./Subtotal.css";
import  CurrencyFormat from 'react-currency-format';
import { useStateValue } from './StateProvider';
import { getBasketTotal } from './reducer';
import {useHistory} from 'react-router-dom';



function Subtotal() {
    const history =useHistory();
    const [{basket},dispatch] = useStateValue();
    return (
        <div className="subtotal">
        <CurrencyFormat
            renderText={(value) => (
                <span>
                 <p>
                 subtotal({basket.length} item):<strong>{value}</strong>
                 </p>
                    <small className="subtotal_gift">
                    <input type="checkbox"/>This order contain a gift
                    </small>
                </span>
            
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹"}
            />
            <button onClick={e => history .push('/payment')}>Procced to checkout</button>
        </div>
    );
                          
}

export default Subtotal
