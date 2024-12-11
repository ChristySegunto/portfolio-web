import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import './../App.css';
import './Contact.css'

import { FaFacebook, FaGithub, FaInstagramSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const openbracket = '<';
const closebracket = '>';

function Contact({ theme, id }) {
    return (
        <div id={id} className={`Contact ${theme}`}>
            <Row className='contact-container'>
                <Row className='contact-title'>
                    <h4 className='contact-h4'>CONTACT</h4>
                </Row>
                <Row className='d-flex'>
                    <Row className='contact-message'>
                        <h4>LET'S TRANSFORM YOUR IDEAS INTO REALITY</h4>
                        <div className='contact-icons'>
                            
                            <a
                                href="https://github.com/ChristySegunto/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-icon"
                            >
                                <FaGithub className='icon-custom'/>
                            </a>
                            <a
                                href="https://www.facebook.com/christysgnt/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-icon"
                            >
                                <FaFacebook className='icon-custom'/>
                            </a>
                            <a
                                href="https://www.instagram.com/christyseconds/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-icon"
                            >
                                <FaInstagramSquare className='icon-custom'/>
                            </a>
                            <a
                                href="mailto:christysgnt.work@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-icon"
                            >
                                <SiGmail className='icon-custom'/>
                            </a>
                        </div>
                    </Row>
                </Row>
            </Row>
        </div>
    );
}

export default Contact;

