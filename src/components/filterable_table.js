import React, { Component } from 'react';

import SearchBar from '../components/search_bar';
import ProductTable from '../components/product_table';

export default class FilterableProductTable extends Component {
    render() {
        return (
        <div>
            <SearchBar />
            <ProductTable products={this.props.products} />
        </div>
        );
    }
}

