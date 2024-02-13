import React from 'react'

function Hero() {
    return (
        <div className='container hero'>

            <div className="inner-cont">
                <div className='text'>
                    <h1>Hello<img className='hey' src={require('../assets/icons/icons8-waving-hand-emoji-48.png')}></img></h1>
                    <h1>I'm <span className='hero-z'>Z</span>ayan</h1>
                    <br></br>
                    <h3><span className='hero-front'>I am a frontend developer,</span><br></br>Infusing Love and Code into Every Website I Create.</h3>
                    <br />
                    <div className='icons'>
                        <a href='https://github.com/Zayan-dev'><img src={require('../assets/icons/icons8-github-64.png')}></img></a>
                        <a href='https://www.linkedin.com/in/zayancodes'><img src={require('../assets/icons/icons8-linkedin-50.png')}></img></a>
                    </div>
                </div>

                <div className='blob'>

                </div>
            </div>

            <div className='techstack'>
                <h3>Tech Stack | </h3>
                <div className='tech-icons'>
                    <img src={require('../assets/icons/icons8-react-native-48.png')}></img>
                    <img src={require('../assets/icons/icons8-bootstrap-48.png')}></img>
                    <img src={require('../assets/icons/icons8-html-48.png')}></img>
                    <img src={require('../assets/icons/icons8-css-48.png')}></img>
                    <img src={require('../assets/icons/icons8-js-48.png')}></img>
                    <img className='postman-icon' src={require('../assets/icons/icons8-postman-api-64.png')}></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
