import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/menu.css";

const Menu = () => {
  return (
    <div>
      {
        <Navbar collapseOnSelect className="menu" bg="light" expand="lg">
          <Container className="menu-nav">
            <Navbar.Brand className="menu-nav-title-sup" href="#home">
              BIANCHINIPHOTOS
            </Navbar.Brand>
            <Navbar.Brand className="menu-nav-title-inf" href="#home">
              BIANCHINI
            </Navbar.Brand>
            <Navbar.Toggle className="menu-toggle" aria-controls="navbarScroll" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link className="menu-nav-bar-btn" href="#link">
                  Portfólio
                </Nav.Link>
                <Nav.Link className="menu-nav-bar-btn" href="#link">
                  Contato
                </Nav.Link>
                <Nav.Link className="menu-nav-bar-btn" href="#link">
                  Sobre
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      }
    </div>
  );
};

export default Menu;
