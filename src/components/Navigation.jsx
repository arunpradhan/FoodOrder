import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux"
import {productSearch} from '../redux/productAction'

export default function Navigation() {

  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  console.warn("navigation", result);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">FoodOrder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='order-2 order-md-1' />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <div>
              <input type='text' name='search' onChange={(event) => dispatch(productSearch(event.target.value))} className="form-control" placeholder='Search Food...'/>
            </div>
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/menu" className="nav-link">Menu</Link>
            <Link to="/book-order" className="nav-link">Book Order</Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to="/cart" className="nav-link cart-count-btn order-1 order-md-2">
          Cart <i className="bi bi-cart4"></i> 
          <span className='cart-count'>{result.length}</span>
        </Link>
      </Container>
    </Navbar>
  );
}