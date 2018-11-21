import React, { Component } from 'react';

import SearchBar from '../components/search_bar';
import ProductTable from '../components/product_table';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        this.state = { // initial state of application
            filterText: '', 
            inStockOnly: false}; 
    }

    render() {
        return (
        <div>
            <SearchBar 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}/>
            <ProductTable products={this.props.products} 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}/>
        </div>
        );
    }
}

