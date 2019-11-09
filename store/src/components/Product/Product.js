import React from 'react';

const Product = (props) => {
    return <div className="card" style={{ width: "18rem;" }}>
        <img className="card-img-top p-3" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyOwzQUrAhqn2jmJU9bChTiJWb70uETG-tL_RTASwlSeSXvupGKA&s" />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            <button type="button"
                onClick={props.addToCart}
                className="btn btn-outline-info">+</button>
        </div>
    </div>
}
export { Product }