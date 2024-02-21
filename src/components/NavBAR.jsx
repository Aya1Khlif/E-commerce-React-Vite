
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'; 
export default function NavBAR() {
  return (
    <div>
           <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">logo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-uppercase">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">about</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
