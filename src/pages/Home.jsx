import { Col, Container, Row } from "react-bootstrap";

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
            <section className="layout_padding">
                <Container>
                    <div className="heading_container">
                        <h2>Book A Table</h2>
                    </div>

                    <Row>
                        <Col xs={12} md={6}>
                            <form>
                                <div className="pt-3 pb-3">
                                    <input type="text" className="form-control" placeholder="Enter Your Full Name" />
                                </div>

                                <div className="pt-3 pb-3">
                                    <input type="text" className="form-control" placeholder="Enter Your Phone Number" />
                                </div>

                                <div className="pt-3 pb-3">
                                    <input type="email" className="form-control" placeholder="Enter Your Email" />
                                </div>

                                <div className="pt-3 pb-3">
                                    <select className="form-control">
                                        <option>How Many Persons?</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>

                                <div className="pt-3 pb-3">
                                    <input type="date" className="form-control" />
                                </div>

                                <div className="pt-3 pb-3">
                                    <button type="submit" className="button-link">
                                        Book Now
                                    </button>
                                </div>
                            </form>
                        </Col>

                        <Col xs={12} md={6}></Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}
