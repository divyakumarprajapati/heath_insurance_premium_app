import React from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import cartIcon from "../cart.svg";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Navbar className="bg-info">
      <Container className="justify-content-between">
        <Navbar.Brand href="#home">Get Premium</Navbar.Brand>

        <Button
          variant="link"
          onClick={() =>
            navigate(`${location.pathname === "/home" ? "cart" : "home"}`)
          }
        >
          {location.pathname === "/home" ? (
            <img src={cartIcon} alt="cart" width="30" />
          ) : (
            "Back to Home"
          )}
        </Button>
      </Container>
    </Navbar>
  );
};

export default Header;
