import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-dark text-light py-3 mt-auto">
            <Container>
                <Row>
                    <Col><Link to="/" className="nav-link">Home</Link></Col>
                    <Col><Link to="/about" className="nav-link">About</Link></Col>
                    <Col><Link to="/book-order" className="nav-link">Book Order</Link></Col>
                </Row>
                <Row className='border-top mt-3 mb-3 pt-4'>
                    <Col className="text-center">
                        <p className="mb-0">&copy; 2026 FoodOrder.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}