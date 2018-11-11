import React from 'react'
import Books from './Books'
import * as BooksAPI from '../BooksAPI'

class BookShelf extends React.Component {
  state = {
    query: ''
  }
	render() {
    console.log(this.props.books);
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((data) => 
              <li key={data.id}>{<Books books={data} key={data.id}/>}
              </li>
            )}
          </ol>
        </div>
      </div>  
		);
	}
}

export default BookShelf;