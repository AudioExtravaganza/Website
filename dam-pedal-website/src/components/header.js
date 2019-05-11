import React, { Component } from 'react'
import HeaderLink from './custom-links'
import { Link } from 'react-router-dom'
class Header extends Component {

    constructor(props) {
        super(props)

        this.state = { 
            opened : false,
        }
        this.expand = this.expand.bind(this)
        this.shrink = this.shrink.bind(this)
    }
    
    expand(e){
        this.setState({
            opened : true,
        })
    }

    shrink(e){
        this.setState({
            opened : false,
        }) 
    }

    render() {
        return (
            <header>
                <button className='nav-context-button' onClick={this.state.opened ? this.shrink : this.expand}>
                    <i className='material-icons large-icon'>menu </i> 
                </button> 
                <Link to='/'>
                    <h1> DAM Pedal </h1>
                </Link>
                <nav className={this.state.opened ? '' : 'closed'} onClick={this.shrink}> 
                    <HeaderLink path='/' name='Home' exact={true}/>
                    <HeaderLink path='/team' name='Team' />
                    <HeaderLink path='/docs' name='Docs' />
                    <HeaderLink path='/explore' name ='Explore' />
                    <HeaderLink path='/create' name ='Create' />
                </nav>
            </header>
        )
    }
}

export default Header
