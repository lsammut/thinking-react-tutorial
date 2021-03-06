import React, { Component } from 'react';

import SearchBar from '../components/search_bar';
import ProductTable from '../components/product_table';

export default class FilterableProductTable extends Component {
    constructor(props) {
        super(props);
        
        this.state = {filterText: '', inStockOnly: false}; 
    }

    handleFilterTextChange(filterText) {
        this.setState({filterText: filterText});
    }

    handleInStockChange(inStockOnly) {
        this.setState({inStockOnly: inStockOnly});
    }

    render() {
        return (
        <div>
            <SearchBar 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                onFilterTextChange={(text) => this.handleFilterTextChange(text)}
                onInStockChange={(flag) => this.handleInStockChange(flag)} />
            <ProductTable 
                products={this.props.products} 
                filterText={this.state.filterText}
                inStockOnly={this.state.inStockOnly}/>
        </div>
        );
    }
}

