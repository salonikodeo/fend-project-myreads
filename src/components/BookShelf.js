import React from 'react'
import Books from './Books'

class BookShelf extends React.Component {
	render() {
		return(
			<div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((data) => 
              <li key={data.id}>  
                {
                  <Books books={data} key={data.id} moveShelf={this.props.moveShelf}/>
                }
              </li>
            )}
          </ol>
        </div>
      </div>  
		);
	}
}

export default BookShelf;