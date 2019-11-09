import React from 'react';
import { Product } from './Product';

const ProductList = (props) => {
    return <div className="col-10">
        <div className="card-deck">
            {props.products.map(product => <Product imageUrl={product.imageUrl}
                title={product.title} description={product.description} />)}
        </div>
    </div>
}

export { ProductList }