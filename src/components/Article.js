import React, {Component} from 'react';

export default class Article extends Component {
    render() {
        return (
        <article>
            {this.props.loader ? 'loading...' : null}
            {this.props.error ? "oh no, an error! I can't load post data :(" : null}
            <h3>{this.props.title}</h3>
            <h5>id: {this.props.no}</h5>
            {this.props.text}
        </article>
        )
    }
}