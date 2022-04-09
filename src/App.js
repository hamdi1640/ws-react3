import React from 'react';
import './App.css';
import {Nav,Navbar,Container,Carousel,Card,Button,Form }from "react-bootstrap"

function App() {
  return (
    <div className="App">
       <Navbar bg="black" variant="black">
  <div class="logo"></div>
            <img alt="" src="https://phoneky.co.uk/thumbs/screensavers/down/cars-transport/bmw_thj8s1zh.gif"></img>
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
    <div class="logo"></div>
            <img alt="" src="https://www.bmw-tunisia.com/content/dam/bmw/common/images/logo-icons/BMW_M/BMW_M_100px.png.asset.1583225507175.png"></img>
           
  </Navbar>
  <div>
  <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://i.gaw.to/vehicles/photos/40/26/402606-2022-bmw-4-series.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.bmw-tunisia.com/content/dam/bmw/common/home/teaser/bmw-4-series-convertible-m-automobiles-hometeaser-1680x756.jpg/jcr:content/renditions/cq5dam.resized.img.1680.large.time1621957231842.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://www.largus.fr/images/images/x6-restylage-illustration-avg.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
<div className='cards'>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBelqx1qJ6JZmKvffXAOU1tVLoCyuW6-X-0w&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <i class="fas fa-plus-circle"></i>
      <span class="qute">0</span>
      <i class="fas fa-minus-circle"></i>
      <i class="fas fa-trash-alt"></i>
      <i class="fas fa-heart"></i>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZo2L_DWG1uHTZnTGRqjumJravyafJG_poew&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <i class="fas fa-plus-circle"></i>
      <span class="qute">0</span>
      <i class="fas fa-minus-circle"></i>
      <i class="fas fa-trash-alt"></i>
      <i class="fas fa-heart"></i>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIEk_XNIpjTqN4DBG8EJ2AJiWPcITe2nhVpg&usqp=CAU" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <i class="fas fa-plus-circle"></i>
      <span class="qute">0</span>
      <i class="fas fa-minus-circle"></i>
      <i class="fas fa-trash-alt"></i>
      <i class="fas fa-heart"></i>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
<div>
<Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</div>
</div>
    
  </div>
    <h1>bmw M pawer</h1>
    
    </div>
  );
}

export default App;
