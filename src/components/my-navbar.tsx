"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  NavbarCollapse,
  Container,
  Nav,
  NavbarBrand,
  Navbar,
  NavLink,
  NavbarToggle,
} from "react-bootstrap";

const links = [
  { href: "/", label: "Home" },
  { href: "/resume", label: "Resume" },
  { href: "/training-log", label: "Training Log" },
  { href: "/blog", label: "Blog" },
];

export default function MyNavbar() {
  const pathname = usePathname();
  // "/blog" stays highlighted on individual posts (/blog/<id>)
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <div className="fixed-top">
      {/* collapseOnSelect closes the mobile menu after a link is tapped */}
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" collapseOnSelect>
        <Container>
          <NavbarBrand as={Link} href="/">
            Landon Creel
          </NavbarBrand>
          <NavbarToggle aria-controls="site-navbar-nav" />
          <NavbarCollapse id="site-navbar-nav">
            <Nav className="me-auto">
              {links.map(({ href, label }) => (
                <NavLink
                  key={href}
                  as={Link}
                  href={href}
                  eventKey={href}
                  active={isActive(href)}
                  aria-current={isActive(href) ? "page" : undefined}
                >
                  {label}
                </NavLink>
              ))}
            </Nav>
          </NavbarCollapse>
        </Container>
      </Navbar>
    </div>
  );
}
