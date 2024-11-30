import {
  NavbarCollapse,
  Container,
  Nav,
  NavbarBrand,
  Navbar,
  NavLink,
  NavbarToggle,
} from "react-bootstrap";

export default function MyNavbar() {
  return (
    <div className="fixed-top">
      <Navbar expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
          <NavbarBrand href="/">Landon Creel</NavbarBrand>
          <NavbarToggle aria-controls="basic-navbar-nav" />
          <NavbarCollapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/resume">Resume</NavLink>
              <NavLink href="/training-log">Training Log</NavLink>
              <NavLink href="/blog">Blog</NavLink>
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}
