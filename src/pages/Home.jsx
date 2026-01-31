import { Col, Container, Row } from "react-bootstrap";
import Book from "./Book";

export default function Home() {
    return (
        <>

            {/* HERO SECTION */}
            <section className="hero-section">
                <Container fluid className="hero-section-container">
                    <Row className="align-items-center">
                        <Col>
                            <img
                                src="/images/hero-bg.jpg"
                                className="w-100"
                                alt="Restaurant banner"
                            />
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* OFFER SECTION */}
            <section className="offer_section">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={6}>
                            <div className="box">
                                <div className="offer-img-box">
                                    <img src="/images/o1.jpg" className="w-100" alt="Tasty Thursdays offer" />
                                </div>
                                <div className="offer-details-box">
                                    <h5>Tasty Thursdays</h5>
                                    <h6><span>20%</span> Off</h6>
                                    <button className="button-link">Order Now</button>
                                </div>
                            </div>
                        </Col>

                        <Col xs={12} md={6}>
                            <div className="box">
                                <div className="offer-img-box">
                                    <img src="/images/o2.jpg" className="w-100" alt="Pizza Days offer" />
                                </div>
                                <div className="offer-details-box">
                                    <h5>Pizza Days</h5>
                                    <h6><span>12%</span> Off</h6>
                                    <button className="button-link">Order Now</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* BOOK A TABLE SECTION */}
            <Book/>

        </>
    );
}
