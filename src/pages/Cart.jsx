import { Container, Row, Col } from "react-bootstrap";
import { emptyCart } from "../redux/action";
import { useDispatch } from "react-redux";

export default function Cart() {
    const dispatch = useDispatch();
    return (
        <section className="layout_padding">
            <Container>
                <div className="heading_container">
                    <h2>Cart Page</h2>
                    <h6>
                        <a onClick={() => dispatch(emptyCart())} style={{ textDecoration: "underline", cursor: "pointer" }}>Clear Cart</a>
                    </h6>
                </div>

                <Row>
                    <Col xs={12} md={6}>

                    </Col>

                    <Col xs={12} md={6}></Col>
                </Row>
            </Container>
        </section>
    );
}