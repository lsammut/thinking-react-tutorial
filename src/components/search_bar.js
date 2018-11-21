import React from 'react';

class SearchBar extends React.Component {
    constructor (props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }

    handleFilterTextChange(event) {
        this.props.onFilterTextChange(event.target.value);
    }

    handleInStockChange(event) {
        this.props.onInStockChange(event.target.checked);
    }

    render() {
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;

        return (
        <form>
            <input 
                type="text" 
                placeholder="Search..." 
                value={this.props.filterText}
                onChange={this.handleFilterTextChange} />
            <p>
            <input 
                type="checkbox" 
                checked={this.props.inStockOnly} 
                onChange={this.handleInStockChange} />
                {' '}
                Only show products in stock
            </p>
        </form>
        );
    }
}

export default SearchBar;