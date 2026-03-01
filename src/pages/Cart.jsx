import { Container, Row, Col } from "react-bootstrap";
import { emptyCart, removeToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cartData);
    let cartAmount = cartData.length && cartData.map(item=> item.price).reduce((prev, next) => prev + next)
    
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
                    <Col xs={12} md={6} lg={9} xl={9} xxl={9}>
                        <table className="table table-responsive">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartData.map((item) => (
                                        <tr key={item.id}>
                                            <td>{item.name}<br/><span style={{fontSize: "12px"}}>Category: ({item.type})</span></td>
                                            <td>${item.price}</td>
                                            <td>1</td>
                                            <td>
                                                <button onClick={() => dispatch(removeToCart(item.id))} className="button-link">
                                                    <i className="bi bi-trash"></i> Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Col>

                    <Col xs={12} md={6} lg={3} xl={3} xxl={3}>
                        <div>Amount: ${cartAmount}</div>
                        <div>Discount (5%): ${cartAmount/5}</div>
                        <div>Total: ${cartAmount - (cartAmount/5)}</div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}