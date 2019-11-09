import React, { Component } from 'react';
import { store } from "./redux/store";
import {
  loadProductDataAction,
  loadCartDataAction,
  loadCategoryDataAction
} from "./redux/actionCreators";
import { Layout } from './components/Shared/Layout';
import { Header } from './components/Shared/Header';
import { ProductList } from './components/Product/List';
import { CategoryList } from './components/Category/List';
import { Loading } from './components/Shared/Loading';

export default class App extends Component {
  componentDidMount() {

    Promise.all([
      fetch('http://localhost:3500/categories?_limit=20'),
      fetch('http://localhost:3500/products?_limit=20'),
      fetch('http://localhost:3500/carts?_limit=20'),
    ])
      .then(([categories, products, carts]) => {
        return {
          categories: categories.json(),
          products: products.json(),
          carts: carts.json()
        }
      })
      .then(async (response) => {
        store.dispatch(loadCategoryDataAction(await response.categories));
        store.dispatch(loadProductDataAction(await response.products));
        store.dispatch(loadCartDataAction(await response.carts));
      });

    store.subscribe(() => {
      console.log(store.getState())
      this.forceUpdate()
    });
  }

  render() {
    const { categories, products, productLoading } = store.getState();

    if (productLoading) {
      return <Loading />
    }

    return (
      <Layout>
        <Header />
        <div className="row">
          <CategoryList categories={categories} />
          <ProductList products={products} />
        </div>
      </Layout>
    );
  }
}