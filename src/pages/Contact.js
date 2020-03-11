import React, { Component } from 'react';
import './Home.css';
import './Contact.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CONTENT = {
  title: 'My Awesome Blog',
  commentsTitle: 'Comments:',
  footer: 'copyright 2020'
}

class Contact extends Component {
  render() {
    return (
      <main>
        <Header
          title = {CONTENT.title}
        />
        <div className="contact">Jestem podstroną kontaktową, siemanko!</div>
        <Footer
          text = {CONTENT.footer}
        />
      </main>
    );
  }
}

export default Contact;