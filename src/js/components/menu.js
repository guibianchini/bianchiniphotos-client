import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/menu.css'

const Menu = () => {

  return (
    <div>
      {
       <Navbar className="menu fixed-top" bg="light" expand="lg">
       <Container >
         <Navbar.Brand className="menu-nav-title" href="#home">BIANCHINIPHOTOS</Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
           <Nav className="me-auto">
             {/* <Nav.Link href="#home">Página Inicial</Nav.Link> */}
             <Nav.Link className="menu-nav-bar" href="#link">Portfólio</Nav.Link>
             <Nav.Link className="menu-nav-bar" href="#link">Contato</Nav.Link>
             <Nav.Link className="menu-nav-bar" href="#link">Sobre</Nav.Link>
             {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
             </NavDropdown> */}
           </Nav>
         </Navbar.Collapse>
       </Container>
     </Navbar>
      }
    </div>
  );
};

export default Menu;