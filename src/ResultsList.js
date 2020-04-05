import React, { Component } from 'react';
import BookInfo from './BookInfo';

class ResultsList extends Component {
    render() {
        return(
            <section>
                <ul>
                    <BookInfo />
                </ul>
            </section>
        );
    }
}

export default ResultsList;