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
          			/>
          			<BookShelf
              			title='Want to Read'
              			books={this.state.books.filter(book => book.shelf === 'wantToRead')}
              			key = 'wantToRead'
          			/>
          			<BookShelf
              			title='Read'
              			books={this.state.books.filter(book => book.shelf === 'read')}
              			key = 'read'
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