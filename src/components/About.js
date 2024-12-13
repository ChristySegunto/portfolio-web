import React from 'react';
import { Row, Col } from 'react-bootstrap';
import './../App.css';
import './About.css'


function About({ theme, id }) {
    return (
        <div id={id} className={`About ${theme}`}>
        <Row className='flex-wrap about-row'>
            <Col xs={12} md={6} className={`about-col first`}>
                <h4 className='about-h4'>ABOUT</h4>
            </Col>
            <Col xs={12} md={6} className={`about-col second`}>
                <p className='about-p'>
                    Hello, I'm Christy! I'm passionate about website design and development. 
                    I love building things and creating innovations! 
                    I'm an aspiring full-stack developer from Pamantasan ng Lungsod ng Maynila.
                    <br/><br/>
                    A fun fact about me: I often find myself deeply attached to the apps I build. 
                    Each project starts with a vision—an idea that I'm determined to bring to life. 
                    For me it’s not just about the features I’ve coded or the bugs I've fixed. 
                    It’s about the journey—the countless hours spent debugging, testing, and 
                    crying (out of frustration hahaha). Each small success and every obstacle I overcome becomes a part of me. 
                    The system stops being just lines of code; it becomes a reflection of my effort, my learning, and my growth.
                    <br/><br/>
                    And when the project is finally finished, it feels like a part of me is missing. 
                    I know that the system will work as it was designed, and others will use it, 
                    but I can’t help but feel a bit sad. It's like saying goodbye to a chapter of my life. 
                    It’s hard to explain to someone who doesn’t feel the same way, but I’ve realized that 
                    I don’t just build apps—I build connections with them.
                    <br/><br/>
                    This emotional attachment is what drives me to always do my best, 
                    to pour a bit of myself into every line of code. 
                    Even after a project is finished, I’ll look back at it and think, 
                    “This is a part of me, and it always will be.”
                </p>
            </Col>
        </Row>
        </div>
    );
}

export default About;
