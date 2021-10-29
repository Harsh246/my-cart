import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component{
    render()
    {
  
        const property = [

            {
                price : 999,
                qty: 1,
                title: 'Mobile',
                id:0
            },
            {
                price : 99,
                qty: 10,
                title: 'Watch',
                id:1
            },
            {
                price : 9999,
                qty: 4,
                title: 'Laptop',
                id:2
            }


            
        ];


        return(
<div className="cart"> 
{
property.map((index) => {

return(
<CartItem 
properties={index}
key={index.id}
/>
)

})
}


</div>
        );

    }

}

export default Cart;
