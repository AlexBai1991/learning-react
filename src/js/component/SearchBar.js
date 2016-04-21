import React from 'react';

const SearchBar = React.createClass({
  handleFilterTextInput(e) {
    let filterText = this.refs.filterText.value,
      isStockOnly = this.refs.isStockOnly.checked;
    this.props.handleUserInput(filterText, isStockOnly);
  },
  render() {
    return (
      <form>
        <input 
          type="text" 
          value={this.props.filterText} 
          ref="filterText"
          onChange={this.handleFilterTextInput}
          /><br/>
        <label>
          <input 
            type="checkbox" 
            checked={this.props.isStockOnly} 
            ref="isStockOnly"
            onChange={this.handleFilterTextInput}
            />
            &nbsp;只显示在售的商品
        </label>
      </form>
    );
  }
});

export default SearchBar;