import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbarr() {
  return (
  
    <Navbar className='bgb'  style={{padding:'2px'}} >
            <Container fluid>
                <Navbar.Brand href="#" ><img src={"youtube_400425 (1).png"} style={{width:"50px"}}/> </Navbar.Brand>
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                >
                    <div className='nav'><Nav.Link href="#action1">Movies</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link></div>

                </Nav>
        <Form className="d-flex" style={{marginLeft:"0"}}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>
    </Container>
  </Navbar>
  )
}

export default Navbarr