import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function MyFooter() {

    return (
        <div className="fixed-bottom">
            <Navbar expand="lg" bg="dark" data-bs-theme="dark">
                <Container>
                    <Nav className="me-auto">
                        <Nav.Link href="mailto:landon.creel@icloud.com">email</Nav.Link>
                        <Nav.Link href="https://github.com/lwcreel">GitHub</Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/landon-creel-149859177">LinkedIn</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}