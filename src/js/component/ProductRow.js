import React from 'react';

const ProductRow = React.createClass({
  render() {
    let name = this.props.product.stocked ? <span style={{color: 'red'}}>{this.props.product.name}</span> : this.props.product.name;
    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
        <td>{this.props.product.stocked ? '已售完': '在售中'}</td>
      </tr>
    );
  }
});

export default ProductRow;