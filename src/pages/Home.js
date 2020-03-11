import React, { Component } from 'react';
import './Home.css';
import Header from '../components/Header';
import Article from '../components/Article';
import Comments from '../components/Comments';
import Footer from '../components/Footer';

const CONTENT = {
  title: 'My Awesome Blog',
  commentsTitle: 'Comments:',
  footer: 'copyright 2020'
}

class Home extends Component {
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

export default Home;
