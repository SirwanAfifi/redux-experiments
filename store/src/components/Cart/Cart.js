import React from 'react';
import { removeFromCartAction } from '../../redux/actionCreators';

const Cart = (props) => {
    return <li className="list-group-item">
        {props.product.title}
        <button type="button"
            className="btn btn-danger"
            onClick={() => {
                props.store.dispatch(removeFromCartAction(props.product.productId))
            }}
        >X</button>

    </li>
}

export { Cart }