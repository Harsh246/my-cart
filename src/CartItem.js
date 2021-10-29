import React from 'react';

class CartItem extends React.Component {
    render() {
       // console.log('this.props', this.props);
        const{ price , qty , title} = this.props.properties;
       
         //  console.log('this.props.onIncrease', this.props.onIncrease());
 return (
            <div className="cart-item" >
{this.props.jsx}
                <div >
                    <img style={{
                        height: 130,
                        width: 130,
                        borderRadius: 4,
                        background: '#ccc'
                    }} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: '#777' }}>Rs {price} </div>
                    <div style={{ color: '#777' }}>Qty: {qty }</div>
                    <div className="cart-item-actions">
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/71781/plus.svg"
                           onClick= { ()=> this.props.onIncrease(this.props.properties) }
                         
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/155829/minus.svg"
                            onClick= { ()=> this.props.onDecrease(this.props.properties) }
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/243868/delete.svg"
                            onClick = {()=> this.props.onDelete(this.props.properties.id)}
                        />

                    </div>

                </div>

            </div>
        );
    }
}


export default CartItem;

