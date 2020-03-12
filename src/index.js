import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from'react-router-dom';
import './index.css';
import Menu from './components/Menu';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Default from './pages/Default';
import * as serviceWorker from './serviceWorker';
import Post from './pages/Post';

const CONTENT = {
    title: "Our Awesome Blog",
    footer: "copyright 2020"
};

ReactDOM.render(
    <BrowserRouter>
        <Menu />
        <Header
        />
        <Switch>       
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/post/:id" component={Post} />
            <Route component={Default} />
        </Switch>
        <Footer
          text = {CONTENT.footer}
        />
    </BrowserRouter>, document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
