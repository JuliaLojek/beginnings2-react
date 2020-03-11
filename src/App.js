import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import Article from './Article';
import Comments from './Comments';
import Footer from './Footer';

const CONTENT = {
  title: 'My Awesome Blog',
  commentsTitle: 'Comments:',
  footer: 'copyright 2020'
}

class App extends Component {
  state = {
    postDetails: {},
    loader: false,
    error: false
  };
  componentDidMount() {
    this.setState({loader: true})
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data => this.setState({postDetails: data, loader: false}))
      .catch(error => this.setState({error: true, loader: false}));
  };
  render() {
    return (
      <main>
        <Header
          title = {CONTENT.title}
        />
        <Article
          loader = {this.state.loader}
          error = {this.state.error}
          title = {this.state.postDetails.title}
          text = {this.state.postDetails.body}
        >
        </Article>
        <Comments
          title = {CONTENT.commentsTitle}
        />
        <Footer
          text = {CONTENT.footer}
        />
      </main>
    );
  }
}

export default App;
