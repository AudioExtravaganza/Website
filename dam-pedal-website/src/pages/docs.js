import React, { Component } from 'react'
import Documentation from '../static-data/documentation.json'

class FunctionDoc extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div className='doc-function-div'>
                <span className='doc-function-name'>{this.props.name}</span>
                <span> (</span>
                {this.props.params.map((p, index) => (
                    <span className='doc-function-param-list'>{p['name']}{(this.props.params.length - 1 > index) ? (", "): ("")}
                    </span>
                ))}
                <span>)</span>
                <span className='doc-function-desc'> {this.props.desc}</span>
            {this.props.return == 'None' ? '': <span className='doc-function-returns'>Returns: {this.props.return}</span>}
            {this.props.params.length > 0 ? <span className='doc-function-returns'>Parameters:</span> : ""}
                {this.props.params.map((p, index) => (
                    <div className='doc-param-div'>
                        <span className='doc-param-name'>{p['name']}</span>
                        <span className='doc-param-type'> ({p['type']}) :</span>
                        <span className='doc-param-desc'>{p['desc']}</span>

                    </div>
                ))}
            </div>
        )   
    }
}    
class ClassDoc extends Component {
    
    constructor(props) {
        super(props)

    }

    render () {
        return (
            <div className='doc-class-div'> 
                <h2> <span className='doc-class-label'>Class</span>
                <span className='doc-class-name'> {this.props.name}</span> </h2>
                <span className='doc-class-desc'> {this.props.desc} </span>
                {this.props.functions.map((func, index) => (
                    <FunctionDoc 
                        name={func['name']}
                        type={func['type']}
                        desc={func['desc']}
                        return={func['return']}
                        params={func['params']}
                    />
                ))}
            </div>
        )
    }

}

class Docs extends Component {
    
    constructor(props) {
        super(props)

        this.state = { }
    }

    render() {
        return (
            <div>
            <h1 className='page-title'>Documentation</h1>
            <p className='paragraph-main'> Documentation for front facing functionality of the DAMPedal. Documentation for other functions can be found in the source code; however, calling a some function outside of the scope of the intended class can create issues with allocation on the server. Furthermore, behaviour invoked by these functions outside of the correct context is undefined.</p>
            {Documentation['classes'].map((classD, index) => (
                <ClassDoc
                    name={classD['name']} 
                    desc={classD['desc']}
                    functions={classD['functions']}
                />
            ))}
            </div>
        )

    }
}

export default Docs
