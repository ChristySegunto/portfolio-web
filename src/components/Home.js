import React from 'react';

import { Row, Col } from 'react-bootstrap';
import './../App.css';
import Typewriter from "typewriter-effect";


const openbracket = '<';
const closebracket = '>';

function Home({ theme, id }) {
  return (
    <div className={`Home ${theme}`} id={id}>
      <Row className='flex-wrap justify-content-center home-row'>
        <Col xs={12} md={8} lg={7} className="home-col">

            <div className='name-div'>
              <h4 className='home-h4'>
                {openbracket}
                <Typewriter
                  options={{
                    strings:["Hello", "Kumusta?", "Hola", "Bonjour", "Halló", "Nǐ hǎo", "Aloha", "Ciao", "Konichiwa", "Anyeong", "Salam"],
                    autoStart: true,
                    loop: true,
                    delay: 20,
                    deleteSpeed: 50,
                  }}
                />
                {closebracket}
              </h4>
              
              {/* <h4 className='home-h4'>{openbracket}Hello!{closebracket}</h4> */}

              <h1 className='home-h1'>I'M CHRISTY.</h1>
              <p className='home-p'>Specializing in Website Design and Development</p>
            </div>

          
        </Col>
        <Col xs={12} md={4} lg={3}className="home-col img col-5 ">
          <div className='home-image'></div>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
