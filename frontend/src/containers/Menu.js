import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

function Menu(props) {

  const handleLogout = (event) => {
    props.logoutUser();  
  }
    
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Django React</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {/* <Nav className="mr-auto">
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav> */}          
            {
              props.isAuthenticated ? (
                <Nav className="ml-auto">
                  <Link to="/logout" onClick={handleLogout}><Button variant='danger'>Logout</Button></Link>
                </Nav>
              ) : (
                <Nav className="ml-auto">
                  <Link to="/login"><Button variant='info'>Login</Button></Link>
                  <Link to="/signup"><Button variant='success'>Signup</Button></Link>
                </Nav>
              )
            }
        </Navbar.Collapse>
    </Navbar>
  )
}

Menu.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logoutUser })(Menu);

