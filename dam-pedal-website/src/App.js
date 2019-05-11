import React, { Component } from 'react'

import './stylesheets/base.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Template from './pages/template'
import Home from './pages/home'
import Team from './pages/team'
import Explore from './pages/explore'
import Create from './pages/create'
import Header from './components/header.js'
import Docs from './pages/docs'
class App extends Component {
    render() {
        return (
            <Router>
            <div className="App">
                <Header />
                <main>
                    <Route path='/' exact component={Home} />
                    <Route path='/team' component={Team} />
                    <Route path='/docs' component={Docs} />
                    <Route path='/explore' component={Explore} />
                    <Route path='/create' component={Create} />
                </main>
            </div>
            </Router>
        )
    }
}

export default App
