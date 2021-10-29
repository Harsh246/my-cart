import React from 'react';

class CartItem extends React.Component {
    render() {
        
        const{ price , qty , title} = this.props.properties;
        return (




            <div className="cart-item" >

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
                         
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/155829/minus.svg"
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://www.svgrepo.com/show/243868/delete.svg"
                        />

                    </div>

                </div>




            </div>
        );
    }
}


export default CartItem;

