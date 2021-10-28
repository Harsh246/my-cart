import React from 'react';

class CartItem extends React.Component {
    render() {
        return (
            <div className="cart-item" >

                <div className="left-block">
                    <img src="" alt="image" style={{
                        height: 310,
                        width: 310,
                        borderRadius: 4,
                        background: '#ccc'
                    }} />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>MOBILE</div>
                    <div style={{ color: '#777' }}>Rs 999 </div>
                    <div style={{ color: '#777' }}>Qty: 01 </div>
                    <div className="cart-item-actions">
                        <img
                            alt="increase"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/992/992651.svg"
                            onClick={this.increaseQuantity}
                        />
                        <img
                            alt="decrease"
                            className="action-icons"
                            src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xMS41IDBjNi4zNDcgMCAxMS41IDUuMTUzIDExLjUgMTEuNXMtNS4xNTMgMTEuNS0xMS41IDExLjUtMTEuNS01LjE1My0xMS41LTExLjUgNS4xNTMtMTEuNSAxMS41LTExLjV6bTAgMWM1Ljc5NSAwIDEwLjUgNC43MDUgMTAuNSAxMC41cy00LjcwNSAxMC41LTEwLjUgMTAuNS0xMC41LTQuNzA1LTEwLjUtMTAuNSA0LjcwNS0xMC41IDEwLjUtMTAuNXptLTYuNSAxMGgxM3YxaC0xM3YtMXoiLz48L3N2Zz4="
                        />
                        <img
                            alt="delete"
                            className="action-icons"
                            src="https://image.flaticon.com/icons/svg/1214/1214428.svg"
                        />

                    </div>

                </div>




            </div>
        );
    }
}


export default CartItem;

