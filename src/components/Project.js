import React from 'react'

function Project() {
    const openMail = () => {
        window.location.href = "mailto:zayanirfan8@gmail.com";
    }
    return (
        <div className='project container'>
            <h1>My Projects</h1>
            <div className="project-div">
                <img src={require('../assets/imgs/car poster.png')}></img>
                <div className='project-text'>
                    <h3>Car rental website (React.js)</h3>
                    <br></br>
                    <h4>Developed an appealing, dynamic landing page developed for users who love exotic cars.</h4>
                    <a href='https://github.com/Zayan-dev'>Explore on <img src={require('../assets/icons/icons8-github-64.png')}></img></a>
                </div>
            </div>
            <div className="project-div odd-div">
                <img src={require('../assets/imgs/original-490952952616298a41698770afd060f6.png')}></img>
                <div className='project-text'>
                    <h3>NEWS website (API + React.js)</h3>
                    <br></br>
                    <h4>Developed a website which uses News api to fetch latest news around the globe.</h4>
                    <a href='https://github.com/Zayan-dev'>Explore on <img src={require('../assets/icons/icons8-github-64.png')}></img></a>
                </div>
            </div>
            <div className="project-div">
                <img src={require('../assets/imgs/6b6a928bea7c17e61c20567400a75856.jpg')}></img>
                <div className='project-text'>
                    <h3>Responsive website clone</h3>
                    <br></br>
                    <h4>Developed a responsive website, through a skillful integration of HTML, CSS, JavaScript, and Bootstrap.</h4>
                    <a href='https://github.com/Zayan-dev'>Explore on <img src={require('../assets/icons/icons8-github-64.png')}></img></a>
                </div>
            </div>

            <div className='gmail'>
                <div>
                    <h4>A Project on mind?</h4>
                    <h1>Lets's <span>T</span>alk</h1>
                </div>
                <div onClick={openMail} className='gmail-circle'><a href='mailto:zayanirfan8@gmail.com'>Write a Message</a></div>
            </div>
        </div>
    )
}

export default Project
