import React from 'react';

import { Row, Col, Container } from 'react-bootstrap';
import './../App.css';

const openbracket = '<';
const closebracket = '>';

function Projects({ theme, id }) {
  return (
    <div className={`Projects ${theme}`} id={id}>
        This is projects
    </div>
  );
}

export default Projects;
