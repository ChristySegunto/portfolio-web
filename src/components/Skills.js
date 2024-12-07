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
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1" className="skills-accordion">
                                <Accordion.Header className='skills-accordion-header'><span>02 </span> LANGUAGE I SPEAK</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2" className="skills-accordion">
                                <Accordion.Header className='skills-accordion-header'><span>03 </span> FRAMEWORKS I WORK WITH</Accordion.Header>
                                <Accordion.Body>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
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
