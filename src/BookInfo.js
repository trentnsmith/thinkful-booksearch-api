import React, { Component } from 'react';

class BookInfo extends Component {
    render() {
        return (
            <li>
                <img src={this.props.books.image} alt="book image" />
                <h2>{this.props.books.title}</h2>
                <h3>{this.props.books.author}</h3>
                <h4>{this.props.books.description}</h4>
            </li>
        );
    }
}

export default BookInfo;