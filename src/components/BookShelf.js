import React from 'react'
import Books from './Books'

class BookShelf extends React.Component {
	render() {
    console.log(this.props.books);
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((data) => <li><Books books={data} key={data.id}/></li> )}
          </ol>
        </div>
      </div>  
		);
	}
}

export default BookShelf;