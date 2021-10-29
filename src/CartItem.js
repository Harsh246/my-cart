import React from 'react';

const CartItem = (props) => {

    // console.log('this.props', this.props);
    const { price, qty, title } = props.properties;

    //  console.log('this.props.onIncrease', this.props.onIncrease());
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
                <div style={{ color: '#777' }}>Qty: {qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://www.svgrepo.com/show/71781/plus.svg"
                        onClick={() => props.onIncrease(props.properties)}

                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://www.svgrepo.com/show/155829/minus.svg"
                        onClick={() => props.onDecrease(props.properties)}
                    />
                    <img
                        alt="delete"
                        className="action-icons"
                        src="https://www.svgrepo.com/show/243868/delete.svg"
                        onClick={() => props.onDelete(props.properties.id)}
                    />

                </div>

            </div>

        </div>
    );
}



export default CartItem;

