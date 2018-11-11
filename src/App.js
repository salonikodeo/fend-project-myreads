import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage.js'
import SearchPage from './components/pages/SearchPage.js'

class BooksApp extends React.Component {
  state = {
  
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={ MainPage }/>
        <Route exact path="/search" component={ SearchPage }/>
      </div>
    )
  }
}

export default BooksApp
