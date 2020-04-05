import React, { Component } from 'react';

class Filters extends Component {
    render () {
        return (
            <div>
            <label for="book-type" name="book-type">Book Type:</label>
            <select 
            onChange={event => this.props.filter(event.target.value)}>
                <option value="">None</option>
                <option value="free-ebooks">free-ebooks</option>
                <option value="paid-ebooks">paid-ebooks</option>
                <option value="ebooks">ebooks</option>
                <option value="partial">partial</option>
                <option value="full">full</option>
            </select>            
                <label for="print-type" name="print-type">Book Type:</label>
                <select
                    onChange={event => this.props.filter(event.target.value)}
                    >
                    <option value="all">All</option>
                    <option value="books">Books</option>
                    <option value="magazines">Magazines</option>    
                </select>                
            </div>
        );
    }
}

export default Filters;