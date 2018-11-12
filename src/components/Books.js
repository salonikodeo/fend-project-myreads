import React from 'react'
import * as BooksAPI from '../BooksAPI'

class Books extends React.Component {
  render() {
    return(
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url("${this.props.books.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select
              onChange={(event) => {this.props.moveShelf(this.props.books, event.target.value)}}
              value={this.props.books.shelf || "none"}
            >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.books.title}</div>
        <div className="book-authors">{this.props.books.authors}</div>
      </div>
    );
  }
}

export default Books;