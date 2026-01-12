import {
  NavbarCollapse,
  Container,
  Nav,
  Navbar,
  NavLink,
  NavbarToggle,
} from "react-bootstrap";

export default function MyFooter() {
  return (
    <>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="bottom">
        <Container fluid>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="mailto:landon.creel+web@protonmail.com">
                email
              </NavLink>
              <NavLink href="https://github.com/lwcreel">GitHub</NavLink>
              <NavLink href="https://www.linkedin.com/in/landon-creel-149859177">
                LinkedIn
              </NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </>
  );
}
