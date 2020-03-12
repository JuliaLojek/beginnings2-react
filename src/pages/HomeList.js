import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class HomeList extends Component {
  renderPostList = () => 
    this.props.items.map(el => {
      return <div key={el.id} className="single-post">
        <h3 className="post-list-title"><Link to={`/post/${el.id}`}>{el.title}</Link></h3>
        <p className="post-list-body">{el.body}</p>
      </div>
    });
  
  render() {
    return this.renderPostList();
  }
}

export default HomeList;
