import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    navigate("/");
  };
  return (
    <Navbar className="bg-primary" expand="lg">
      <Container>
        <Navbar.Brand className="text-white" href="/">
          FakeShop
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link className="text-white" href="/">
              <i class="fa-solid fa-house"></i> Home
            </Nav.Link>
            {user ? (
              <button
                onClick={logout}
                className="btn btn-danger text-white mx-3"
              >
                <i class="fa-solid fa-right-from-bracket"></i> Logout
              </button>
            ) : (
              <>
                <Nav.Link className="text-white mx-3" href="/login">
                  <i class="fa-solid fa-arrow-right-to-bracket"></i> Login
                </Nav.Link>
                <Nav.Link className="text-white" href="/register">
                  <i class="fa-solid fa-user-plus"></i> Register
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
