import React from 'react';
import { Navbar, Container, NavbarToggler, Collapse, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
import LoginModal from '../components/auth/LoginModal';

function AppNavbar() {
  return (
    <>
      <Navbar color="white" expand="lg" className="stiky-top">
        <Container>
          <Link to="/" className="text-black text-decoration-none">
            Yeon BLOG
          </Link>
          <NavbarToggler />
          <Collapse isOpen={true} navbar>
            <Nav className="ml-auto d-flex justify-content-around" navbar>
              {false ? (
                <h1 className="text-black">authLink</h1>
              ) : (
                // <h1 className="text-black">guestLink</h1>
                <LoginModal />
              )}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default AppNavbar;
