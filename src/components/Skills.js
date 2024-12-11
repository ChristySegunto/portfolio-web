import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

import './../App.css';
import './Skills.css'

const openbracket = '<';
const closebracket = '>';

function Skills({ theme, id }) {
    return (
        <div id={id} className={`Skills ${theme}`}>
            <Row className='skills-container'>
                <Row className='skills-title'>
                    <h4 className='skills-h4'>SKILLS OVERVIEW</h4>
                </Row>
                <Row className='flex-wrap justify-content-center skills-row'>
                    <Col className={`skills-col first`}>
                        <h3 className='skills-h3'>{openbracket}Transforming Ideas Into Reality{closebracket}</h3>
                    </Col> 
                    <Col className={`skills-col`}>
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0" className="skills-accordion">
                                <Accordion.Header className='skills-accordion-header'><span>01 </span> TOOLS I USE</Accordion.Header>
                                <Accordion.Body>
                                I utilize a range of tools to enhance my development and design workflows. For design, I work with <strong className='strong-custom'>Figma</strong> and <strong className='strong-custom'>Canva</strong> to create visually engaging user interfaces and prototypes. 
                                For version control, I rely on <strong className='strong-custom'>Git</strong> and <strong className='strong-custom'>GitHub</strong> to manage and collaborate on projects effectively. Additionally, I use <strong className='strong-custom'>Microsoft Visual Studio Code</strong> and <strong className='strong-custom'>Visual Studio</strong> for coding, 
                                while the <strong className='strong-custom'>Microsoft Office Suite (Excel, Word, PowerPoint, Access)</strong> supports my productivity and project documentation needs.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="skills-accordion">
                                <Accordion.Header className='skills-accordion-header'><span>02 </span> LANGUAGE I SPEAK</Accordion.Header>
                                <Accordion.Body>
                                I am proficient in <strong className='strong-custom'>JavaScript</strong>, with expertise in <strong className='strong-custom'>React</strong> for building dynamic UIs and <strong className='strong-custom'>Node.js</strong> for server-side development. 
                                I also have strong experience with <strong className='strong-custom'>Python</strong>, especially in building web applications with <strong>Django</strong>. 
                                Additionally, I am proficient in <strong className='strong-custom'>HTML, CSS, and PHP</strong>, ensuring I can handle full-stack development projects efficiently.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="skills-accordion">
                                <Accordion.Header className='skills-accordion-header'><span>03 </span> FRAMEWORKS I WORK WITH</Accordion.Header>
                                <Accordion.Body>
                                On the front-end, I specialize in <strong className='strong-custom'>React</strong> and <strong className='strong-custom'>Bootstrap</strong> for building responsive and interactive web applications. 
                                For back-end development, I primarily use <strong className='strong-custom'>Django</strong>, leveraging its power to build robust and scalable applications.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="3" className="skills-accordion">
                                <Accordion.Header className='skills-accordion-header'><span>04 </span> DATABASES I RELY ON</Accordion.Header>
                                <Accordion.Body>
                                I work with a wide range of database technologies to manage and store data effectively in modern applications. 
                                I have hands-on experience with <strong className='strong-custom'>Supabase</strong> for real-time, open-source databases, <strong className='strong-custom'>MySQL</strong> for relational database management, 
                                and <strong className='strong-custom'>Firebase</strong> for NoSQL solutions. Additionally, I work with <strong className='strong-custom'>SQL Server</strong> for applications requiring robust performance and scalability. 
                                My expertise includes designing and optimizing database schemas, and ensuring efficient data retrieval to meet the needs of different applications.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Row>
            
        </div>
    );
}

export default Skills;
