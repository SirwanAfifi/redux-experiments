import React from 'react';
import { Product } from './Product';

const ProductList = (props) => {
    return <div className="col-10">
        <div className="card-deck">
            {props.products.map(product => <Product
                store={props.store}
                product={product} />)}
        </div>
    </div>
}

export { ProductList }