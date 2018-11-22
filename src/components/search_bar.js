import React from 'react';

class SearchBar extends React.Component {
    
    handleFilterTextChange(event) {
        this.props.onFilterTextChange(event.target.value);
    }

    handleInStockChange(event) {
        this.props.onInStockChange(event.target.checked);
    }

    render() {
        return (
        <form>
            <input 
                type="text" 
                placeholder="Search..." 
                value={this.props.filterText}
                onChange={(event) => this.handleFilterTextChange(event)} 
            />
            <p>
            <input 
                type="checkbox" 
                checked={this.props.inStockOnly} 
                onChange={(event) => this.handleInStockChange(event)} />
                {' '}
                Only show products in stock
            </p>
        </form>
        );
    }
}

export default SearchBar;