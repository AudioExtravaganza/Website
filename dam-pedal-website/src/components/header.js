import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavLink extends Component {
    constructor(props) {
        super(props)
    
    }

    render() {
        return (

            <Link className='nav-flex' to={this.props.path} activeClassName='active'> 
                <span>
                    {this.props.name} 
                </span>
            </Link>
        )
    }
}
class Header extends Component {

    constructor(props) {
        super(props)

        this.state = { }
    }

    render() {
        return (
            <header>
                <h1> Digital Audio Manipulation Pedal </h1>
                <nav>
                    <NavLink path='/' name = 'Home' />
                    <NavLink path='/about' name = 'About' />
                    <NavLink path='/explore' name = 'Explore' />
                    <NavLink path='/create' name = 'Create' />
                </nav>
            </header>
        )
    }
}

export default Header
