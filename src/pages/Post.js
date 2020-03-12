import React, { Component } from 'react';
import './Home.css';
import Article from '../components/Article';
import Comments from '../components/Comments';

class Post extends Component {
  state = {
    postDetails: {},
    loader: false,
    error: false
  };
  componentDidMount() {
    this.setState({loader: true})
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`)
      .then(response => response.json())
      .then(data => this.setState({postDetails: data, loader: false}))
      .catch(error => this.setState({error: true, loader: false}));
  };
  render() {
    return (
      <main>
        <Article
          loader = {this.state.loader}
          error = {this.state.error}
          title = {this.state.postDetails.title}
          no = {this.props.match.params.id}
          text = {this.state.postDetails.body}
        >
        </Article>
        <Comments>Comments:</Comments>
      </main>
    );
  }
}

export default Post;
