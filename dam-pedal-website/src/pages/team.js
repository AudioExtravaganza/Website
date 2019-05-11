import React, { Component } from 'react'
import GitHubMark from '../images/GitHub-Mark-120px-plus.png'
import LinkedIn from '../images/In-Blue-128.png'
import TeamImg from '../images/team.jpg'
import Mason from '../images/mason.jpg'
import Martin from '../images/martin.jpg'
class Card extends Component {
    constructor(props){
        super(props)

    }

    render (){
        return (
            <div>
            <div id={this.props.id} className='contact-card-anchor'>
            </div>
            <div className="contact-card">
                <div className='contact-image'>
                        <img src={this.props.image} />
                </div>
                <h2> {this.props.name} </h2>
                <p> {this.props.bio ? this.props.bio : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae sapien turpis. Nulla semper libero eget rhoncus consequat. Nunc molestie nunc id elementum aliquam. Suspendisse potenti. Proin tellus nibh, varius luctus ante nec, dictum efficitur dolor. Quisque sodales orci faucibus, iaculis nulla sed, efficitur enim. Vivamus arcu sapien, imperdiet non cursus eu, posuere in elit. Nam placerat, arcu nec porttitor semper, sapien lectus tincidunt diam, sed sodales purus odio sed risus. Aenean viverra est eget massa congue, id varius tellus bibendum. In hac habitasse platea dictumst. Suspendisse potenti. Nullam eget tristique eros, vitae laoreet felis. Morbi et dictum orci. Aliquam placerat maximus aliquam."}
            
                </p>
                <div className='contact-info'>
                        <div>
                            <a href={"mailto:" + this.props.email}>
                                <i className='material-icons contact-icon'> email </i>
                                {/* <span className='contact-info-item'>{this.props.email}</span> */}
                            </a>
                        </div>
                        <div>
                            <a href={'https://github.com/'+this.props.github}>
                                <img className='contact-icon' src={GitHubMark} />
                                {/*<span className='contact-info-item'>{this.props.github}</span> */}
                            </a>
                        </div>
                        <div>
                            <a href={this.props.linkedin}>
                                <img className='contact-icon' src={LinkedIn} />
                                {/*<span className='contact-info-item'>Mason Sidebottom</span>*/}
                            </a>
                        </div>
                </div>
            </div>
            </div>
        )
    }
}

class Team extends Component {
    
    constructor(props) {
        super(props)
        let x = Mason
        this.state = {
            cards : [
            (<Card
                kay={'alex-card'}
                id='alex'
                name='Alex Niebur'
                bio={undefined}
                email='niebura@oregonstate.edu'
                github='---'
                linkedin='---'
                image={undefined}
                />),
            (<Card
                key={'martin-card'}
                id='martin'
                name='Martin Barker'
                bio="4th-year Computer Science / Cybersecurity student at Oregon State University graduating June 2019. I currently work as QA Intern at MoxiWorks in Seattle [Summer 2018 - Present] I worked part time as Student Engineer for OSU's Radio / TV station KBVR FM/TV from 2016 to 2018. I've been a DJ at KBVR FM for the past 4 years, and in my spare time upload records online and work on projects to benefit the online music community."
                email='barkemar@oregonstate.edu'
                github='MartinBarker'
                linkedin='https://www.linkedin.com/in/martinbarker99'
                image={Martin}
                />),
            (<Card
                key={'devon-card'}
                id='devon'
                name='Devon Cash'
                bio={undefined}
                email='cashd@oregonstate.edu'
                github='---'
                linkedin='---'
                image={undefined}
                />),
            (<Card
                key={'ben-card'}
                id='ben'
                name='Ben Windheim'
                bio={undefined}
                email='windheib@oregonstate.edu'
                github='---'
                linkedin='---'
                image={undefined}
                />),
            (<Card 
                key={'mason-card'}
                id='mason'
                name='Mason Sidebottom'
                bio={undefined}
                email='sidebotm@oregonstate.edu'
                github='MasonSidebottom'
                linkedin='https://www.linkedin.com/in/mason-sidebottom-778751132/'
                image={Mason}
                />),
            ]
        
        }
    }

    render() {
        return (
            <div>
                <h1 className='page-title'> The Team</h1>
                <img src={TeamImg} className='img-large'/>
                <div className='contact-links'>
                    <span><a href='#alex'> Alex Niebur </a>&bull;</span>
                    <span><a href='#martin'> Martin Barker </a>&bull;</span>
                    <span><a href='#devon'> Devon Cash </a>&bull;</span>
                    <span><a href='#ben'> Ben Windheim </a>&bull;</span>
                    <span><a href='#mason'>Mason Sidebottom</a> </span>
                </div>
                {this.state.cards}
            </div>
        )
    }
}

export default Team
