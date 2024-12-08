import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import './../App.css';

const openbracket = '<';
const closebracket = '>';

function Home({ theme, id }) {
  return (
    <div className={`Home ${theme}`} id={id}>
      <Row className='flex-wrap justify-content-center'>
        <Col className="home-col">
          <div className='name-div'>
            <h4 className='home-h4'>{openbracket}Hello!{closebracket}</h4>
            <h1 className='home-h1'>I'M CHRISTY.</h1>
            <p className='home-p'>Specializing in Website Design and Software Development</p>
          </div>
        </Col>
        <Col className="home-col img col-5 ">
          <div className='home-image'></div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
