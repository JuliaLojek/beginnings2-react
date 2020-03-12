import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class Header extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
    };
    static defaultProps = {
        title: "Our Awesome Blog"
    };
    
    render() {
        return (
        <header>
            <h1><Link to="/">{this.props.title}</Link></h1>
        </header>
        )
    }
}