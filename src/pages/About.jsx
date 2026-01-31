import { Col, Container, Row } from "react-bootstrap";
import '../App.css';

export default function About() {
    return (
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <div className="img-box">
                        <img src="/images/about-img.png" alt="About Us" />
                    </div>
                </Col>
                <Col xs={12} md={6} className="d-flex align-items-center">
                    <div>
                        <h2>We are FoodOrder</h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                            in some form, by injected humour, or randomised words which don't look even slightly believable. If you
                            are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in
                            the middle of text. All
                        </p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}