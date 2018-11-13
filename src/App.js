import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from 'react-router'
import * as BooksAPI from './BooksAPI'
import MainPage from './components/pages/MainPage.js'
import SearchPage from './components/pages/SearchPage.js'
import './App.css'

class BooksApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: []
    }
  }

  //fetch all the books in a function to reuse the code
  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
    this.setState({ books })
    })
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

  render() {
    return (
      <Switch>
        <Route exact path="/" render={() => (<MainPage books={this.state.books} moveShelf={this.moveShelf}/>)} />
        <Route exact path="/search" render={() => (<SearchPage books={this.state.books} moveShelf={this.moveShelf}/>)} />
      </Switch>
    )
  }
}

export default BooksApp
