import React from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

// FilterableProductTable
const FilterableProductTable = React.createClass({
  getInitialState() {
    return {
      filterText: '',
      isStockOnly: false
    };
  },
  handleUserInput(filterText, isStockOnly) {
    this.setState({
      filterText: filterText,
      isStockOnly: isStockOnly
    });
  },
  render() {
    return (
      <div className="filterable-product-table">
        <h1>Filterable Product Table</h1>
        <SearchBar filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} handleUserInput={this.handleUserInput} />
        <ProductTable products={this.props.products} filterText={this.state.filterText} isStockOnly={this.state.isStockOnly} />
      </div>
    );    
  }
});

export default FilterableProductTable;
