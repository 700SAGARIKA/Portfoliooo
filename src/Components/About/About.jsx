import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'
const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={theme_pattern} alt=""/>
        </div>
        <div className="about-sections">
           <div className="about-left">
                
            </div>
            <div className="about-right">
                <div className="about-para">
                   <p>I am Sagarika Mishra, a B.Tech student in Computer Science at Silicon University, Bhubaneswar, with expertise in Python, Java, C, JavaScript, MySQL, and UI/UX design. My web development experience includes HTML, CSS, React, Node.js, and Angular.</p> 
                   <p>have interned as a Software Development Engineer at Bluestock Fintech and a MERN Stack Intern at Preplabs, contributing to projects like an IPO web app and a Cultfit clone. I am passionate about tech and continuous learning..</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML&&CSS</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>React Js</p><hr style={{width:"70%"}}/></div>
                    <div className="about-skill"><p>Javascript</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Node Js</p><hr style={{width:"50%"}}/></div>
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>0</h1>
                <p>years of experience</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>5</h1>
                <p>Projects Completed</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
    </div>
  )
}

export default About