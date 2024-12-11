import './App.css';
import { Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { IoSunnySharp, IoMoonSharp } from "react-icons/io5";

import { Link, animateScroll as scroll } from 'react-scroll';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const openbracket = '<';
const closebracket = '>';




function App() {
	const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

	const toggleTheme = () => {
		const newTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	useEffect(() => {
		document.body.className = theme;
	}, [theme]);

	return (
		<div className={`App ${theme}`}>
			<Navbar expand="lg" className={`navbar ${theme}`}>
				<Container fluid className={`nav-container ${theme}`}>
					<Navbar.Brand className={`christylogo`} href="#home">{openbracket}C{closebracket}</Navbar.Brand>
					<Navbar.Toggle className={`nav-toggle ${theme}`} aria-controls="navbarScroll" data-bs-target='#navbarScroll'>
						<FaBars />
					</Navbar.Toggle>
					<Navbar.Collapse id="navbarScroll">
						<Nav className="me-auto nav-custom">
							<Link 
								to="home" 
								className='nav-link link-custom'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Home
							</Link>
							<Link 
								to="about" 
								className='nav-link link-custom'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								About
							</Link>
							<Link 
								to="skills" 
								className='nav-link link-custom'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Skills
							</Link>	
							<Link 
								to="projects" 
								className='nav-link link-custom'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Projects
							</Link>	
							<Link 
								to="contact" 
								className='nav-link link-custom'
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								Contact
							</Link>	

						</Nav>

					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Home theme={theme} id="home" />
			<About theme={theme} id="about" />
			<Skills theme={theme} id="skills" />
			<Projects theme={theme} id={"projects"} />
			<Contact theme={theme} id="contact"/>

			<Button 
				variant="outline-primary" 
				onClick={toggleTheme} 
				className="theme-toggle-btn"
			>
				{theme === 'light' ? <IoMoonSharp /> : <IoSunnySharp />}
			</Button>
		</div>
	);
}

export default App;
