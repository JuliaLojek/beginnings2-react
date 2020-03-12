import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Menu.css';

export default class Menu extends Component {
    render() {
        return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About us</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        )
    }
}