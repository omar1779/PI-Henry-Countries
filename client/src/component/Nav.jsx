/* import { NavLink } from 'react-router-dom'
import Search from './Search'
import './style/nav.css'

export default function Nav (props) {
    return (
        <nav className='nav'>
            <div className='container-title'>
            <NavLink to={'/'} className={'link'}>
                <h1 className='title-nav'>HENRY COUNTRIES</h1>
            </NavLink>
            </div>
            <Search/>
            <div className='container-list'>
                <ul className='container-list-ul'>
                    <li><a href="/home">Home</a></li>
                    <li><a href="/activity">Activity</a></li>
                    <li><a href="/aboutme">AboutMe</a></li>
                </ul>
            </div>
        </nav>
    )
} */
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search';

function NavScrollExample() {
    return (
        <Navbar bg="dark" expand="lg" className='fixed-top margin mb-2'>
        <Container fluid>
            <Navbar.Brand className='text-light' href="/">Henry Countries</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <Nav.Link className='text-light' href="/home">Home</Nav.Link>
                <Nav.Link className='text-light' href="/activity">Activity</Nav.Link>
                <Nav.Link className='text-light' href="/aboutme">About Me</Nav.Link>
            </Nav>
            <Search/>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}

export default NavScrollExample;
