import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {Outlet} from "react-router-dom";
import "./AppLayout.style.css"

const AppLayout = () => {
  return (
    <div>
      <Navbar bg="black" data-bs-theme="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img width="100px" src="https://1000logos.net/wp-content/uploads/2017/05/Netflix-symbol.jpg" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{maxHeight: "100px"}}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Outlet />
      {/* Router안에 있는 자손들을 보여줌 */}
    </div>
  );
};

export default AppLayout;
