import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from '../BookShelf'

class MainPage extends React.Component {
	render() {
		return(
			<div className="list-books">
	            <div className="list-books-title">
	              <h1>MyReads</h1>
	            </div>
            	<div className="list-books-content">
              		<BookShelf
              			title='Currently Reading'
              			books={this.props.books.filter(book => book.shelf === 'currentlyReading')}
              			key = 'currentlyReading'
              			moveShelf = {this.props.moveShelf}
          			/>
          			<BookShelf
              			title='Want to Read'
              			books={this.props.books.filter(book => book.shelf === 'wantToRead')}
              			key = 'wantToRead'
              			moveShelf = {this.props.moveShelf}
          			/>
          			<BookShelf
              			title='Read'
              			books={this.props.books.filter(book => book.shelf === 'read')}
              			key = 'read'
              			moveShelf = {this.props.moveShelf }
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