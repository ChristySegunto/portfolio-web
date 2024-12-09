import React, { useRef, useState } from "react";

import { Row, Col, Container, Image } from 'react-bootstrap';
import './../App.css';
import './Projects.css';
import drrms from './../images/drrms.png';
import dentalsol from './../images/dentalsolution.png';
import "swiper/css";
import "swiper/css/effect-cards";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const openbracket = '<';
const closebracket = '>';

function Projects({ theme, id }) {
  return (
    <div className={`Projects ${theme}`} id={id}>
        <Row className='flex-wrap projects-row'>
            <Col xs={12} md={6} lg={4} className={`projects-col first`}>
                <h4 className='projects-h4'>PROJECTS</h4>
            </Col>
            <Col xs={12} md={6} lg={8} className={`projects-col second`}>

            </Col>
        </Row>

        
    </div>
  );
}

export default Projects;
