import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'
import * as BooksAPI from '../../BooksAPI'

class MainPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			books: []
		}
	}

	componentDidMount() {
		this.fetchBooks();
  	}

  	//implemented with the help of MyReads Walkthrough of Ryan Waite
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
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
            	<div className="list-books-content">
              		<BookShelf
              			title='Currently Reading'
              			books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
              			key = 'currentlyReading'
              			moveShelf = {this.moveShelf}
          			/>
          			<BookShelf
              			title='Want to Read'
              			books={this.state.books.filter(book => book.shelf === 'wantToRead')}
              			key = 'wantToRead'
              			moveShelf = {this.moveShelf}
          			/>
          			<BookShelf
              			title='Read'
              			books={this.state.books.filter(book => book.shelf === 'read')}
              			key = 'read'
              			moveShelf = {this.moveShelf }
          			/>
            	</div>
            	<div className="open-search">
              		<Link to="/search">Add a book</Link>
            	</div>
          	</div>
		);
	}
}

export default MainPage