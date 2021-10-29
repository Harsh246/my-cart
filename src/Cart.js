import React from 'react';
import CartItem from './CartItem';


const Cart = (props) => {
   
 
const {properties} = props;
  return (
           <div className="cart" > {
            properties.map((index) => {

                    return (
                       
                      <CartItem
                            properties={index}
                            key={index.id}
                            onIncrease = {props.onIncrease}
                            onDecrease  = {props.onDecrease}
                            onDelete =  {props.onDelete}

                        />
                    )

                })
            }
             </div>
         );

  

}

export default Cart;
