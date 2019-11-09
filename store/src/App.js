import React, { Component } from 'react';
import { store } from "./redux/store";
import { loadProductDataAction, loadCartDataAction } from "./redux/actionCreators";

export default class App extends Component {
  componentDidMount() {

    Promise.all([fetch('http://localhost:3500/products?_limit=20'),
    fetch('http://localhost:3500/carts?_limit=20')])
      .then(([products, carts]) => {
        return {
          products: products.json(),
          carts: carts.json()
        }
      })
      .then(async (response) => {
        store.dispatch(loadProductDataAction(await response.products));
        store.dispatch(loadCartDataAction(await response.carts));
      });

    store.subscribe(() => {
      console.log(store.getState())
      this.forceUpdate()
    });
  }

  render() {
    const { products, productLoading } = store.getState();

    if (productLoading) {
      return <div className="spinner-border">
        <span className="sr-only">Loading...</span>
      </div>
    }

    return (
      <div className="container">
        <ul className="nav">
          <li className="nav-item">
            <a classclassName="nav-link active" href="#">Home</a>
          </li>
        </ul>
        {products.map(product => <li key={product.productId}>{product.title}</li>)}
      </div>
    );
  }
}