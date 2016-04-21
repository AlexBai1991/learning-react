import React from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = React.createClass({
  render() {
    let rows = [], lastCategory = null;

    this.props.products.forEach(product => {
      if (product.name.indexOf(this.props.filterText) === -1 || (this.props.isStockOnly && product.stocked)) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
    return (
      <table>
        <thead>
          <tr>
            <th>名字</th>
            <th>价格</th>
            <th>状态</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
});

export default ProductTable;