import React, { Component } from 'react';
import './Home.css';
import './Default.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CONTENT = {
  title: 'My Awesome Blog',
  commentsTitle: 'Comments:',
  footer: 'copyright 2020'
}

class Default extends Component {
  render() {
    return (
      <main>
        <Header
          title = {CONTENT.title}
        />
        <div className="default">
            <h3>o nie, 404!</h3>
            Nie mamy (jeszcze) takiej podstrony :(
        </div>
        <Footer
          text = {CONTENT.footer}
        />
      </main>
    );
  }
}

export default Default;