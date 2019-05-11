import React, { Component } from 'react'

class Effect extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            parameterForms : [],
            name : '',
            desc : '',
        }
        this.addParameter = this.addParameter.bind(this)
        this.removeParameter = this.removeParameter.bind(this)
        this.handleName = this.handleName.bind(this)
        this.handleDesc = this.handleDesc.bind(this)
    }
    
    addParameter(e){
        let temp = this.state.parameterForms
        temp.push(<EffectParameter />)

        this.setState({parameterForms : temp })
    
    }

    removeParameter(i){
        let temp = this.state.parameterForms
        console.log(temp, i)
        this.setState({parameterForms : temp})

    }

    handleName(e){
        this.setState({name : e.value })
    }
    
    handleDesc(e){
        this.setState({desc : e.value })
    }
    render() 
    {
        let effectImg = 'https://images.unsplash.com/photo-1486475554424-2fa50cd59f18'
        effectImg = 'https://images.unsplash.com/photo-1506704888326-3b8834edb40a'
        return (
            <div>
            <div className={'background-wrapper'}>
                <img src={effectImg} className={'background-image'} alt='background' />
            </div>
            <div className='effect-card'>
                <form>
                    <div className='card-title'>
                        <input type='text' placeholder='Effect Name' value={this.state.name} onChange={this.handleName} />
                    
                    </div>
                    <div className='card-content'>
                        <textarea className='description' placeholder='Description' value={this.state.desc} onChange={this.handleDesc} />
                        { this.state.parameterForms.map( (item, i) => {
                            return (
                                <div key={i}>
                                    {item}
                                </div>
                            )
                        })}

                        <input type='button' onClick={this.addParameter} value='Add Parameter' />

                        <input type='submit' value='Submit' />
                    </div>
                </form>
            </div>
            </div>
        )
    }
}

class EffectParameter extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            name : '',
            low : 0,
            high: 1
        }
        this.handleName = this.handleName.bind(this)
        this.handleLow = this.handleLow.bind(this)
        this.handleHigh = this.handleHigh.bind(this)
    }
    
    handleName(e){
        this.setState({name : e.value })
    }
    handleLow(e){
        this.setState({low : e.value })
    }
    handleHigh(e){
        this.setState({high : e.value })
    }
    render() {
        return (
            <div className='effect-parameter-card'>
                <div className='card-title'>
                    <input type='text' value={this.state.name} placeholder='Parameter Name' onChange={this.handleName} />
                </div>
                <div className='card-content-flex'> 

                    <div className='card-content-flex-elem'>
                        <label className='input-label-above'>LOW</label>
                        <input type='number' className='align-right' value={this.state.low} onChange={this.handleLow} />
                    </div>

                <div className='card-content-flex-elem'> &nbsp;
                    
                    <div className='knob-inner'>
                            &nbsp;
                        </div> 
                    </div>
                    
                    <div className='card-content-flex-elem'>
                        <label className='input-label-above'>HIGH</label>
                        <input type='number' value={this.state.high} onChange={this.handleHigh} />
                    </div>

                </div>
                    <input type='button' value='Remove' className='remove-button'/>
                {/*
                    name, range low, range high,
                */}
            </div>

        )

    }

}

export default Effect
