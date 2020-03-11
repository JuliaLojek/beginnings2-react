import React, { Component } from 'react';
import './Home.css';
import './About.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CONTENT = {
  title: 'My Awesome Blog',
  commentsTitle: 'Comments:',
  footer: 'copyright 2020'
}

class About extends Component {
  render() {
    return (
      <main>
        <Header
          title = {CONTENT.title}
        />
        <div className="about">Jestem podstroną o nas, oto my!</div>
        <Footer
          text = {CONTENT.footer}
        />
      </main>
    );
  }
}

export default About;