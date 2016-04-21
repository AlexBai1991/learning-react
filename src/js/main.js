'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import mockData from '../../mock/mock';

// 引入mock数据
const DATA = mockData.data;

// Comment
let Comment = React.createClass({
  render() {
    return (
      <div className="comment">
        <h2 className="comment-author" data-id={this.props.id}>{this.props.author}</h2>
        <p>{this.props.children}</p>
      </div>
    );
  }
});

// CommentList
let CommentList = React.createClass({
  render() {
    let commentNodes = this.props.data.map(item => {
      return (
        <Comment author={item.author} key={item.id} id={item.id}>
          {item.text}
        </Comment>
      );
    });
    return (
      <div className="comment-list">
        {commentNodes}
      </div>
    );
  }
});
// CommentForm
let CommentForm = React.createClass({
  render() {
    return (
      <div className="comment-form">
        <form className="comment-form">
          <input type="text" placeholder="Your name." /><br/>
          <input type="text" placeholder="Your comment." />
          <input type="submit" value="Post" />
        </form>
      </div>
    );
  }
});
// CommentBox
let CommentBox = React.createClass({
  getInitialState() {
    console.log('getInitialState', 'is excuted the first time when the component is created.');
    return { data: [] };
  },
  componentDidMount() {
    console.log('componentDidMount', 'is called automatically by React after a component is rendered for the first time.');
    // TODO: 这里应该从服务器请求数据.
    this.setState({ data: data });  
  },
  render() {
    return (
      <div className="comment-box">
        <h1>CommentBox</h1>
        <CommentList data={this.state.data}/>
        <CommentForm />
      </div>
    );
  }
});

// render
/*
ReactDom.render(
  <CommentBox data={DATA}/>,
  document.querySelector('#example')
);*/
console.log(React);

import './product';