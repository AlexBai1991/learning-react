'use strict';

import React from 'react';
import ReactDom from 'react-dom';

const PRODUCTS = [
  { name: '足球', price: '￥49.99', category: '体育用品', stocked: true },
  { name: '棒球', price: '￥39.99', category: '体育用品', stocked: false },
  { name: '篮球', price: '￥69.99', category: '体育用品', stocked: true },
  { name: 'IPhone 6s plus', price: '￥5899.00', category: '电子产品', stocked: false },
  { name: 'Samsung Galaxy S7', price: '￥6089.00', category: '电子产品', stocked: true },
  { name: 'Google Nexus 7', price: '￥4889.00', category: '电子产品', stocked: false }
];

/**
 * @Structure
 * 
 * FilterableProductTable
 *  SearchBar
 *  ProductTable
 *    ProductCategoryRow
 *    ProductRow
 */

// SearchBar
let SearchBar = React.createClass({
  handleChange() {
    this.props.onUserInput(
      this.refs.filterTextInput.value,
      this.refs.isStockOnlyInput.checked
    );
  },
  render() {
    return (
      <form>
        <input 
          type="text" 
          placeholder="Search..." 
          value={this.props.filterText} 
          ref="filterTextInput"
          onChange={this.handleChange} 
          />
        <br/>
        <label style={{cursor: 'pointer'}}>
          <input 
            type="checkbox" 
            checked={this.props.isStockOnly} 
            ref="isStockOnlyInput"
            onChange={this.handleChange}
            />
            Only show products in stock
        </label>
      </form>
    );
  }
});

// ProductCategoryRow
let ProductCategoryRow = React.createClass({
  render() {
    return (
        <tr>
          <th colSpan="2">{this.props.category}</th>
        </tr>
    );
  }
});

// ProductRow
let ProductRow = React.createClass({
  render() {
    let name = !this.props.product.stocked ? this.props.product.name : <span style={{color: 'red'}}>{this.props.product.name}</span>
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    );
  }
});

// ProductTable
let ProductTable = React.createClass({
  // filterText
  render() {
    let rows = [], lastCategory = null;
    let products = this.props.products;
    products.forEach(product => {
      // 只展现filter的商品
      if (product.name.indexOf(this.props.filterText) === -1 || (this.props.isStockOnly && !product.stocked)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table cellSpacing="0">
        <thead>
          <tr>
            <th>名字</th>
            <th>价格</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

// FilterableProductTable
let FilterableProductTable = React.createClass({
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
        <SearchBar 
          filterText={this.state.filterText} 
          isStockOnly={this.state.isStockOnly}
          onUserInput={this.handleUserInput}
          />
        <ProductTable 
          products={this.props.products} 
          filterText={this.state.filterText} 
          isStockOnly={this.state.isStockOnly} 
          />
      </div>
    );
  }
});

// render
ReactDom.render(
  <FilterableProductTable products={PRODUCTS}/>,
  document.querySelector('#example') 
);
