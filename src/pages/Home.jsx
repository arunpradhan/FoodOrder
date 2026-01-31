import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
    return (
        <>
            <Container-fluid>
                <Row className="align-items-center">
                    <Col>
                        <img src="/images/hero-bg.jpg" className="w-100" alt="Header Image" />
                    </Col>
                </Row>
            </Container-fluid>
            <Container className="offer_section">
                <Row className="align-items-center">
                    <Col xs={12} md={6}>
                        <div className="box">
                            <div className="offer-img-box">
                                <img src="images/o1.jpg" className="w-100" alt="" />
                            </div>
                            <div className="offer-details-box">
                                <h5>
                                    Tasty Thursdays
                                </h5>
                                <h6>
                                    <span>20%</span> Off
                                </h6>
                                <a href="" className="button-link">
                                    Order Now
                                </a>
                            </div>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="box">
                            <div className="offer-img-box">
                                <img src="images/o2.jpg" className="w-100" alt="" />
                            </div>
                            <div className="offer-details-box">
                                <h5>
                                    Pizza Days
                                </h5>
                                <h6>
                                    <span>12%</span> Off
                                </h6>
                                <a href="" className="button-link">
                                    Order Now
                                </a>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="layout_padding">
                <div class="heading_container">
                    <h2>
                        Book A Table
                    </h2>
                </div>
                <Row>
                    <Col xs={12} md={6}>
                        <div className="">
                            <form>
                                <div className="pt-3 pb-3"><input type="text" name="name" className="form-control" placeholder="Enter Your Full Name" /></div>
                                <div className="pt-3 pb-3"><input type="text" name="phonenumber" className="form-control" placeholder="Enter Your Phone Number" /></div>
                                <div className="pt-3 pb-3"><input type="email" name="email" className="form-control" placeholder="Enter Your Email" /></div>
                                <div className="pt-3 pb-3"><select className="form-control nice-select">
                                    <option value="">How Many Persons?</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select></div>
                                <div className="pt-3 pb-3"><input type="date" name="tabledate" className="form-control" placeholder="dd-mm-yyyy" /></div>
                                <div className="pt-3 pb-3"><button type="button" className="button-link">Book Now</button></div>
                            </form>
                        </div>
                    </Col>
                    <Col xs={12} md={6}></Col>
                </Row>
            </Container>
        </>
    );
}