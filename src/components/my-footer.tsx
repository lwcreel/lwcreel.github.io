import { Container, Nav, Navbar, NavLink } from "react-bootstrap";

// Three short links: always shown in a row, no collapse/hamburger.
export default function MyFooter() {
  return (
    <Navbar expand bg="dark" data-bs-theme="dark" fixed="bottom">
      <Container fluid>
        <Nav className="me-auto">
          <NavLink href="mailto:landon.creel+web@protonmail.com">email</NavLink>
          <NavLink href="https://github.com/lwcreel">GitHub</NavLink>
          <NavLink href="https://www.linkedin.com/in/landon-creel-149859177">
            LinkedIn
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}
