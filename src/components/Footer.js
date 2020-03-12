import React, {Component} from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
        <footer><p>{this.props.text}</p></footer>
        )
    }
}