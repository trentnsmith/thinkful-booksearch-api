import React, { Component } from 'react';
import SearchInput from './SearchInput';
import Filters from './Filters';
import ResultsList from './ResultsList';



const searchUrl = (search, printFilter, bookFilter) => {
  const address = 'https://www.googleapis.com/books/v1/volumes?';
  const url = `${address}q=${search}&filter=${bookFilter ||
    'ebooks'}&printType=${printFilter || 'all'}`;
  console.log(url);
  return url;
};

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      books: [],
      search: '',
      printType: '',
      bookType: ''
    }
  }

  componentDidMount() {
    const url = searchUrl(
      this.state.search,
      this.state.printType,
      this.state.bookType
    );
    fetch(url, {
      method: 'GET',
      apiKey: 'AIzaSyBI37FSJb_uyut9Jqv7aFIAHJdwVlyE4gY',
      headers: {
        "Content-Type": "application/json"
      }
    });
    .then(response => response.json())
    .then(data =>
      data.items.map(items => {
        const bookInfo = {
          title: items.volumeInfo.title,
          author: items.volumeInfo.authors,
          image: items.volumeInfo.imageLinks.smallThumbnail,
          price: items.saleInfo.saleability,
          description: items.volumeInfo.description
        };
        this.setState({ books: [...this.state.books, bookInfo] });
        return bookInfo
      }));
      bookFilters = filter => {
        this.setState({ 
          bookType: filter,
          printType: filter
        });
      };

  }

  render () {
    return (
      <div className='App'>
        <header className="App-header">
          <h1>Google Book Search</h1>
        </header>
        <section>
          <SearchInput />
        </section>
        <section>
          <Filters filter={filter => this.printTypeFilter(filter), this.bookTypeFilter(filter)} />
        </section>
        <ResultsList books={this.state.books} />
      </div>
    );
  }
}

export default App;