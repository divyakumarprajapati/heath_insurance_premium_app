import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Navbar className="bg-body-tertiary ">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">Get Premium</Navbar.Brand>
        <Button variant="link" onClick={() => navigate("cart")}>
          Cart
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
