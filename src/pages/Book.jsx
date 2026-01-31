import { Container, Row, Col } from "react-bootstrap";

export default function Book() {
    return (
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
    );
}