import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

export default function About() {
  return (
    <section className="about_section">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="order-2 order-md-1">
            <div className="img-box">
              <img
                src="/images/about-img.png"
                alt="About FoodOrder company"
                className="img-fluid" // Responsive + Bootstrap-recommended
              />
            </div>
          </Col>

          <Col
            xs={12}
            md={6}
            className="d-flex align-items-center order-1 order-md-2"
          >
            <div>
              <h2 className="pt-5 pb-3">We are FoodOrder</h2>
              <p className="mb-5">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
