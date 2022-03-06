import React from 'react';
import {Navbar,Nav,Container,Form,FormControl,Button} from "react-bootstrap";
import { Link } from "react-router-dom";


 const NavBar = () => {
     return(

        <div>
        
  <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#"><img className = "logo" src = "logoMovieAddict.jpg" alt = "Movie Addict "/></Navbar.Brand>
    <Nav className="me-auto">
      {/* <Nav.Link href="#home">Home</Nav.Link> */}
      <Link to='/' style={{textDecoration:'none',color:'white'}}>Movie</Link>
      {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      

    </Nav>
    {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button className = "navbarButtonSearch" variant="outline-success">Search</Button>
      </Form> */}
    </Container>
  </Navbar>
        </div>
     )
 };
 export default NavBar;