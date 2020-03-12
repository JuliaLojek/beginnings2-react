import React, { Component } from 'react';
import HomeList from './HomeList';
import './Home.css';

class Home extends Component {
  state = {
    postList: [],
    loader: false,
    error: false
  };
  componentDidMount() {
    this.setState({loader: true})
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({postList: data, loader: false}))
      .catch(error => this.setState({error: true, loader: false}));
  };
  render() {
    return (
      <main>
        <h2 className="list-title">Read our awesome posts:</h2>
        {this.state.loader === true ? "loading..." : null}
        {this.state.error ? "oh no, an error! I can't load post data :(" : null}
        <HomeList items={this.state.postList} />
      </main>
    );
  }
}

export default Home;
