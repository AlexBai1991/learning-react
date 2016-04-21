import React from 'react';

const ProductCategoryRow = React.createClass({
  render() {
    return (
      <tr><td colSpan="3" style={{ textAlign: 'center' }}>{this.props.category}</td></tr>
    );
  }
});

export default ProductCategoryRow;