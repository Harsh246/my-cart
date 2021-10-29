import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
    constructor(){
super();
this.state = {
    property: [

        {
            price: 999,
            qty: 1,
            title: 'Mobile',
            id: 0
        },
        {
            price: 99,
            qty: 10,
            title: 'Watch',
            id: 1
        },
        {
            price: 9999,
            qty: 4,
            title: 'Laptop',
            id: 2
        }



    ]
}

    }


handleIncrease = (item)=>{
     

    const { property} = this.state;
    const index = property.indexOf(item);

    property[index].qty += 1;

    this.setState({
      property
    })
    }

    handleDecrease = (item) => {
const {property } = this.state;
const index = property.indexOf(item);
if(property[index].qty>0)
property[index].qty -=1;

this.setState({
    property
})

    }

    handleDelete = (id) => {
        const {property} = this.state;
        const items = property.filter( (item)=> item.id != id);
        this.setState({
            property: items
        
        })
    } 
    render() {
const {property} = this.state;

        return (<
            div className="cart" > {
                property.map((index) => {

                    return (
                        <CartItem
                            properties={index}
                            key={index.id}
                            onIncrease = {this.handleIncrease}
                            onDecrease  = {this.handleDecrease}
                            onDelete =  {this.handleDelete}

                        />
                    )

                })
            }


        </div>
        );

    }

}

export default Cart;
