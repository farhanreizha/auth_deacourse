import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="primary" variant="light">
        <Container>
          {sessionStorage.getItem("username") ? (
            <Nav.Link href="/forgotpassword" className="text-white">forgot</Nav.Link>
          ) : (
            <>
              <Nav.Link href="/" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link
               className="text-white"
                href="/register"
              >
                Register
              </Nav.Link>
            </>
          )}
          <Nav.Link
            href={`/${sessionStorage.getItem("username") ? "logout" : "login"}`}
            className="text-white"
          >
            {sessionStorage.getItem("username") ? "Logout" : "Login"}
          </Nav.Link>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              {sessionStorage.getItem("username")
                ? `Hi, ${sessionStorage.getItem("username")}`
                : ""}
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
