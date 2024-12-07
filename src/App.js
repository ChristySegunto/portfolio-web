import './App.css';
import { Nav, Navbar, Container, NavLink, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from 'react-scroll';

import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';

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
							{/* <NavLink href="#projects" className='nav-link link-custom'>Projects</NavLink> */}
						</Nav>
						<Button variant="outline-primary" onClick={toggleTheme}>
							{theme === 'light' ? 'Dark' : 'Light'} Mode
						</Button>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<Home theme={theme} id="home" />
			<About theme={theme} id="about" />
			<Skills theme={theme} id="skills" />
		</div>
	);
}

export default App;
