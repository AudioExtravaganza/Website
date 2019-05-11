import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
class HeaderLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exact : (this.props.exact) ? (this.props.exact) : (false)
        
        }
    }

    render() {
        return (

            <NavLink className='nav-flex' to={this.props.path} activeClassName='active' exact={this.state.exact}> 
                <span>
                    {this.props.name} 
                </span>
            </NavLink>
        )
    }
}


class SelectorLink extends Component {
    constructor(props) {
        super(props)
        this.state = {
            exact : (this.props.exact) ? (this.props.exact) : (false),
            img : (this.props.img) || undefined 
        }
    }

    render() {
        let inner = ''
        if(this.state.img){
            inner = (<img src={this.state.img} className='selector-option-image'/>)
        }
        return (
            <NavLink className='selector-option' to={this.props.path} activeClassName='selector-option active' exact={this.state.exact}>
                <div className='selector-option-image-wrapper'>
                    {inner}
                </div>
                <span className='selector-option-span'>
                    {this.props.name} 
                </span>
            </NavLink>
        )
    }
}

export default HeaderLink
export { SelectorLink, HeaderLink }
