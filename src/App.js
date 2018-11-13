import React from 'react'
import { Route } from 'react-router-dom'
import { Switch, Route } from 'react-router'
import MainPage from './components/pages/MainPage.js'
import SearchPage from './components/pages/SearchPage.js'
import './App.css'

class BooksApp extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ MainPage }/>
        <Route exact path="/search" component={ SearchPage }/>
      </Switch>
    )
  }
}

export default BooksApp
