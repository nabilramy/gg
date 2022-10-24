import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./style.css";


// import "bootstrap/dist/css/bootstrap.min.css";
import { useContext, useEffect, useState } from "react";
// import { useAuth } from "../../scripts/App/auth";
// import { useElement } from "../../scripts/App/elementToShow";
// import SideMenu from "../SideMenu";
// import Notification from "../Notification";

import Button from "react-bootstrap/Button";

// import StorageAvailable from "../SideMenu/storageAvailable";
// import { useEffect } from "react";

function MainHeader() {
  // const navigate = useNavigate();
  // const auth = useAuth();
  // const element = useElement();

  const [headerClassName, setHeaderClassName] = useState("");

  const handleScroll = (headerClassName) => {
    if (headerClassName !== "menuscroll" && window.pageYOffset >= 100) {
      setHeaderClassName("menuscroll");
    } else if (headerClassName === "menuscroll" && window.pageYOffset < 100) {
      setHeaderClassName("");
    }
  };

  // function useOutsideAlerter(ref) {
  //   useEffect(() => {
  //     /**
  //      * Alert if clicked on outside of element
  //      */
  //     function handleClickOutside(event) {
  //       if (ref.current && !ref.current.contains(event.target)) {
  //         alert("You clicked outside of me!");
  //       }
  //     }
  //     // Bind the event listener
  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       // Unbind the event listener on clean up
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, [ref]);
  // }

  useEffect(() => {
    window.onscroll = () => handleScroll(headerClassName);
  }, [headerClassName]); // IMPORTANT, This will cause react to update depending on change of this value

  // const handleLogout = () => {
  //   auth.logout();
  // };
  // const handleScrollUpRegister = () => {
  //   window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  //   element.elementToShow("sign-up");
  // };
  // const handleScrollUpSignIn = () => {
  //   window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  //   element.elementToShow("sign-in");
  // };

  return (
    <Row className={`justify-content-center header-top ${headerClassName}`}>
      <Col md={10}>
        <Navbar expand="lg" sticky="top">
          <Navbar.Brand>
            <Link to="/">
              <img
                src="/img/logo.svg"
                alt="logo"
                className="logo d-none d-lg-block"
              />
              <img
                src="/img/logo-mobile.svg"
                alt="logo"
                className="logo-mobile d-block d-lg-none"
              />
            </Link>
          </Navbar.Brand>
          <Button
            variant="outline-secondary"
            className="custom-secondary d-block d-lg-none"
          >
            <img src="/img/avatar.svg" className="avatar" alt="avatar" />
          </Button>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <i className="fas fa-bars"></i>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="">
              <Nav>
                <NavLink to="/marketplace" className="nav-link" end>
                  Marketplace
                </NavLink>
              </Nav>
              <Nav>
                <NavLink to="/news" className="nav-link" end>
                  News
                </NavLink>
              </Nav>
              <Nav>
                <NavLink to="/events" className="nav-link" end>
                  Events
                </NavLink>
              </Nav>
              <Nav>
                <NavLink to="/token" className="nav-link" end>
                  Token
                  <i class="fas fa-circle d-none d-md-none"></i>
                </NavLink>
              </Nav>
              <Nav>
                <NavLink to="/whitepaper" className="nav-link" end>
                  Whitepaper
                </NavLink>
              </Nav>
              <Button
                variant="primary"
                className="custom-primary d-none d-lg-block"
              >
                Discover
              </Button>
              <Button
                variant="outline-secondary"
                className="custom-secondary d-none d-lg-block"
              >
                <img src="/img/avatar.svg" className="avatar" alt="avatar" />
                12456669
              </Button>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}

export default MainHeader;
