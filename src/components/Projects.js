import React, { useRef, useState } from "react";

import { Row, Col, Container, Image, Card } from 'react-bootstrap';
import './../App.css';
import './Projects.css';
import drrms from './../images/drrms.png';
import dentalsol from './../images/dentalsolution.png';
import autofleet from './../images/autofleet.png';
import portfolio from './../images/portfolio.png';



function Projects({ theme, id }) {
    const projectData = [
        {
          title: "Disaster Risk Reduction Management System",
          description:
            "A web-based system for managing Rapid Assessment of Damages Report (RADaR Files) for DEPED Central Office using Decision Tree and Neural Network Algorithm",
          image: drrms,
        },
        {
          title: "Dental Solutions",
          description:
            "A centralized clinic management software for Dental Solutions to store patient's data and to retrieve patient's data with Face Recognition using FaceNet Algorithm.",
          image: dentalsol,
        },
        {
          title: "AutoFleet",
          description:
            "AutoFleet is a fleet management that provides real-time vehicle tracking, rental scheduling, and maintenance monitoring, ensuring efficient and seamless management of fleets.",
          image: autofleet,
        },
        {
          title: "Portfolio Website",
          description:
            "A personal portfolio to showcase professional projects and achievements.",
          image: portfolio,
        },
      ];

  return (
    <div className={`Projects ${theme}`} id={id}>
        <Row className='flex-wrap projects-row'>
            <Col xs={12} md={12} lg={4} className={`projects-col first`}>
                <h4 className='projects-h4'>PROJECTS</h4>
            </Col>
            <Col xs={12} md={12} lg={8} className={`projects-col second`}>
                <Row xs={1} md={2} className="g-4">
                {projectData.map((project, idx) => (
                    <Col key={idx} className="mb-4">
                        <Card>
                        <Card.Img variant="top" src={project.image} className="project-image"/>
                        <Card.Body>
                            <Card.Title className="project-title">{project.title}</Card.Title>
                            <Card.Text className="project-text">{project.description}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
                </Row>
            </Col>
        </Row>
        

        
    </div>
  );
}

export default Projects;
