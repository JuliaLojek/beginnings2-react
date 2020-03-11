import React, {Component} from 'react';

export default class Comments extends Component {
    state = {
        name: '',
        comment: '',
        commentList: []
    };

    handleChangeName = (event) => {
        this.setState({name: event.target.value});
    };
    handleChangeComment = (event) => {
        this.setState({comment: event.target.value});
    };
    handleSubmit = (event) => {
        this.setState({commentList: [
            ...this.state.commentList, {
                name: this.state.name,
                comment: this.state.comment
            }
        ], name: '', comment: ''});
        event.preventDefault();
    }
    renderComments = () => 
        this.state.commentList.map(el => {
            return <div key={el.name} className="single-comment">
                <h4>{el.name}</h4>
                <p>{el.comment}</p>
            </div>
        });

    render() {
        return (
        <div className="comments">
            <h3>Tell us what you think!</h3>
            <form onSubmit={this.handleSubmit}>
                <label>Name:
                    <br />
                    <input type="text" value={this.state.name} onChange={this.handleChangeName} required />
                </label>
                <br />
                <label>Your comment:
                    <br />
                    <textarea value={this.state.comment} onChange={this.handleChangeComment} required />
                </label>
                <br />
                <input type="submit" value="Send!"/>
            </form>
            <h3>{this.props.title}</h3>
            {this.renderComments()}
        </div>
        )
    }
}