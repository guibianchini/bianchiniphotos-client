import { Card, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/footer.css";

const Footer = () => {
  return (
    <div>
      <Card body className="footer">
        <Nav>
          <Nav.Item>
            <Nav.Link className="footer-link" href="instagram" target="_blank">Instagram</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link className="footer-link" href="whatsapp" target="_blank">Whatsapp</Nav.Link>
          </Nav.Item>
        </Nav>
      </Card>
    </div>
  );
};

export default Footer;
