import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './../App.css';
import './About.css'

const openbracket = '<';
const closebracket = '>';

function About({ theme, id }) {
    return (
        <div id={id} className={`About ${theme}`}>
        <Row className='flex-wrap about-row'>
            <Col xs={12} md={6} className={`about-col first`}>
                <h4 className='about-h4'>ABOUT</h4>
            </Col>
            <Col xs={12} md={6} className={`about-col second`}>
                <p className='about-p'>
                    Hello, I'm Christy! I am passionate about website and software development. I love building things and making innovations! I am an aspiring full stack developer from Pamantasan ng Lungsod ng Maynila.
                    <br/><br/><br/>
                    Hello, I'm Christy! I am passionate about website and software development. I love building things and making innovations! I am an aspiring full stack developer from Pamantasan ng Lungsod ng Maynila.
                </p>
            </Col>
        </Row>
        </div>
    );
}

export default About;
