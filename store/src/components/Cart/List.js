import React from 'react';
import { Cart } from './Cart';

const CartList = (props) => {
    return <ul className="list-group">
        {props.carts.map(cart => <Cart key={cart.productId} store={props.store} product={cart} />)}
    </ul>
}

export { CartList }