import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./Navbar.module.css"; 

function NavbarPage() {
    return (
        <>
            <Navbar className={styles.navbar} data-bs-theme="dark">
                <Container className={styles.container}>
                    <Link to="/home">Ricardo Goicochea </Link>
                    <Nav className={styles.nav}>
                        <Link to="/home">Home</Link>
                        <Link to="/education"> Education</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPage;
