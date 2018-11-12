import React from 'react'
import { Link } from 'react-router-dom'
import Books from '../Books'
import * as BooksAPI from '../../BooksAPI'

class SearchPage extends React.Component {
	state = {
		booksSearch: [],
		query: '',
		books: []
	}
	updateQuery = (query) => {
		this.setState({ query : query })
	}
	searchBooks = (query) => {
		if(query) {
			BooksAPI.search(query).then((booksSearch) => {
				if(booksSearch.length) {
					booksSearch = booksSearch.filter((book) => (book.imageLinks)&&(book.authors))
					booksSearch.forEach(a => {
						let filter = this.state.books.filter(h => h.id === a.id);
						if(filter[0]){
							a.shelf = filter[0].shelf;
						}
					})
					this.setState({ booksSearch })
				}
			})
		} else {
			this.setState({ booksSearch: [], query: '' })
		}
	}
	componentDidMount() {
		this.fetchBooks();
  	}
  	moveShelf = (books, shelf) => {
  		BooksAPI.update(books, shelf)
  		.then(resp => {
  			books.shelf = shelf;
  			this.setState(state => ({
  				books: state.books.filter(a => a.id !== books.id).concat({ books })
  			}))
  			this.fetchBooks()
  		});
  	}
  	//fetch all the books in a function to reuse the code
  	fetchBooks = () => {
  		BooksAPI.getAll().then((book) => {
	    this.setState({books: book})
	  	})
  	}

	render() {
		return(
		  <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search">Close</Link>
              <div className="search-books-input-wrapper">
                <input
                	type="text"
                	placeholder="Search by title or author"
                	value={this.state.query}
                	onChange={e => {
                		this.updateQuery(e.target.value);
                		this.searchBooks(e.target.value)
                	}}
            	/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {
              	this.state.query && this.state.booksSearch.map((book) => (
              		<Books books={book} key={book.id} moveShelf={this.moveShelf}/>
          		))
              }
              </ol>
            </div>
          </div>
		);
	}
}

export default SearchPage;
