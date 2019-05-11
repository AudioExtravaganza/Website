import React, { Component } from 'react'

class Home extends Component {
    
    constructor(props) {
        super(props)

        this.state = { }
    }

    render() {

        return (
            <div>
                <h2 className='page-title'> The Project </h2>
                <p className='paragraph-main'> The DAM Pedal is a collection of open source libraries designed to give musicians an accessible way to build and use a multi-effects pedal. </p>

                <h3 className='centered-text'> Features </h3>
                <ul className='u-list'>
                    <li> Dynamic audio routing </li>
                    <li> Modular effects </li>
                    <li> Robust effect heirarchy </li>
                    <li> Simple OSC signalling </li>
                    <li> Easy to create effect chains </li>
                    <li> Integrated looping </li>
                </ul>
                
                
            </div>
        )
    }
}

export default Home
