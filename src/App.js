import React, { Component } from 'react';
import './App.css';

import Products from './components/products';
import FilterableProductTable from './components/filterable_product_table';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FilterableProductTable products={Products} />
      </div>
    );
  }
}

export default App;
