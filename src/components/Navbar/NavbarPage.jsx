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
                        <Link to="/home"> Inicio </Link>
                        <Link to="/education"> Educación </Link>
                        <Link to="/projects"> Proyecto </Link>
                        <Link to="/contact"> Contacto </Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarPage;
