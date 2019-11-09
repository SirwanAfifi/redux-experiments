import React from 'react';
import { addToCartAction } from '../../redux/actionCreators';

const Product = (props) => {
    const { carts } = props.store.getState();
    const found = carts.find(p => p.productId === props.product.productId);

    return <div className="card" style={{ width: "18rem;" }}>
        <img className="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOwzQUrAhqn2jmJU9bChTiJWb70uETG-tL_RTASwlSeSXvupGKA&s" />
        <div className="card-body">
            <h5 className="card-title">{props.product.title}</h5>
            <p className="card-text">{props.product.description}</p>
            <button type="button"
                onClick={() => {
                    props.store.dispatch(addToCartAction(props.product))
                }}
                disabled={found}
                className="btn btn-outline-info">+</button>
        </div>
    </div>
}
export { Product }