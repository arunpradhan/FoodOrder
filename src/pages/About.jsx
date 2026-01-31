import { Col, Container, Row } from "react-bootstrap";
import "../App.css";

export default function About() {
    return (
        <>
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
            <section>
                <Container>
                    <Row className="align-items-center">
                        <div className="mt-5"><h5 className="heading_container">Social Media Platform For Travelers</h5></div>
                        <div className="mb-5">
                            <p>
                                This is a kind of travel app idea that started with the popular travel forums where people post queries on various aspects and engage in conversation on various travel issues and related topics. Some of these travel forums now have turned to successful travel-based social platforms.
                            </p>
                            <p>
                                Until now, there has been very limited number of travel-based social media apps and a very few of them actually have global audience and consistent engagement. Obviously, you cannot make your social platform lucrative to all travelers as the taste focus on particular travel issues and contents largely differ from one platform to another.
                            </p>
                            <p>                            
                                A travel based social platform should allow incorporating GPS based maps, tools for planning itinerary, location-based image and video sharing, integrated review and rating system for travel accommodations and other facilities, a budget travel guide for backpackers, etc.
                            </p>
                        </div>
                    </Row>
                </Container>
            </section>
        </>
    );
}
