import React from 'react';
import ReactDom from 'react-dom';

import FilterableProductTable from './component/FilterableProductTable';

const PRODUCTS =  [
  { name: '足球', price: '￥49.99', category: '体育用品', stocked: true },
  { name: '棒球', price: '￥39.99', category: '体育用品', stocked: false },
  { name: '篮球', price: '￥69.99', category: '体育用品', stocked: true },
  { name: 'IPhone 6s plus', price: '￥5899.00', category: '电子产品', stocked: false },
  { name: 'Samsung Galaxy S7', price: '￥6089.00', category: '电子产品', stocked: true },
  { name: 'Google Nexus 7', price: '￥4889.00', category: '电子产品', stocked: false }
];

ReactDom.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.querySelector('#example')
);