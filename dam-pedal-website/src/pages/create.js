import React, { Component } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'
import { SelectorLink } from '../components/custom-links'
import Effect from '../components/effect'
function Temp() {
    return <h1> Temp </h1>
}

class Create extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            selectorStyle : 'large-selector',
        }
    }
    
    componentDidMount(){
        if(this.props.location.pathname !== this.props.match.path){
            this.setState({selectorStyle : 'collapsed-selector'})
        }
    }

    componentDidUpdate(previous){
        if(this.props.location !== previous.location && 
            this.props.location !== this.props.match.path){
 
            this.setState({selectorStyle : 'collapsed-selector'})
 
        }
        if(this.props.location.pathname === this.props.match.path && 
            this.props.location !== previous.location){
        
            this.setState({selectorStyle : 'large-selector'})

        }
    }


    render() {
        let chainImg = 'https://images.unsplash.com/photo-1528724977141-d90af338860c'
        let effectImg = 'https://images.unsplash.com/photo-1486475554424-2fa50cd59f18'
        let sceneImg = 'https://images.unsplash.com/photo-1550602003-c89e9c05f972'
        return (
            <div>
                <h1 className='page-title centered-text'>Create</h1>
               <div className={this.state.selectorStyle}>
                    <SelectorLink name='Effect' path={`${this.props.match.path}/effect`} img={effectImg}/>
                    <SelectorLink name='Chain' path={`${this.props.match.path}/chain`} img={chainImg}/>
                    <SelectorLink name='Scene' path={`${this.props.match.path}/scene`} img={sceneImg}/>
                </div>

                <Route path={`${this.props.match.path}/effect`} component={Effect}/>
                <Route path={`${this.props.match.path}/chain`} component={Temp}/>
                <Route path={`${this.props.match.path}/scene`} component={Temp}/>

            </div>
        )
    }
}

export default Create
