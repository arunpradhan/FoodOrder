import { Container, Row, Col } from "react-bootstrap";

import { addToCart, emptyCart, removeToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";

export default function Menu() {

    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in menu component from saga...", data);
    
    const foodMenu = {
        name: "Delicious Pizza",
        type: "Pizza",
        price: 20
    }
    return (
        <>
            <section className="food_section layout_padding">
                <Container>
                    <Row className="align-items-center">
                        <Col xs={12} md={12} lg={10} xl={10} xxl={10}>
                            <h2 style={{ textAlign: "center" }}>Our Menu</h2>
                        </Col>
                        <Col xs={12} md={12} lg={2} xl={2} xxl={2}>
                            <h6>
                                <a onClick={() => dispatch(emptyCart())} style={{ textDecoration: "underline", cursor: "pointer" }}>Clear Cart</a> | 
                                <a onClick={() => dispatch(productList())} style={{ textDecoration: "underline", cursor: "pointer" }}>Get Product</a> | 
                            </h6>
                        </Col>
                    </Row>
                    <Row className="align-items-center">
                        <Col xs={12} md={12}>
                            <ul className="filters_menu">
                                <li className="active">All</li>
                                <li>Burger</li>
                                <li>Pizza</li>
                                <li>Pasta</li>
                                <li>Fries</li>
                            </ul>
                        </Col>
                    </Row>
                    <div className="filters-content">
                        <Row>
                            
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f1.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Delicious Pizza
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $20
                                                </h6>
                                                <button onClick={() => dispatch(addToCart(foodMenu))} className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </button>
                                                <button onClick={() => dispatch(removeToCart(foodMenu))} className="button-link">
                                                    Remove From Cart
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f2.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Delicious Burger
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $15
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f3.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Delicious Pizza
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $10
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f4.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Delicious Pasta
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $30
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f5.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                French Fries
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $14
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f6.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Tasty Pizza
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $12
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f7.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Tasty Burger
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $18
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f8.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Tasty Burger
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $25
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} md={4}>
                                <div className="box">
                                    <div>
                                        <div className="img-box">
                                            <img src="images/f9.png" className="img-fluid" alt=""/>
                                        </div>
                                        <div className="detail-box">
                                            <h5>
                                                Delicious Pasta
                                            </h5>
                                            <p>
                                                Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque
                                            </p>
                                            <div className="options">
                                                <h6 className="align-content-center">
                                                    $52
                                                </h6>
                                                <a href="" className="button-link">
                                                    <i className="bi bi-cart4"></i> Buy
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>

                        </Row>
                        <Row className="mt-5 align-items-end">
                            <Col xs={12} lg={4} md={6}>
                                <ul className="pagination">
                                    <li>First Page</li>
                                    <li>Next</li>
                                    <li>Previous</li>
                                    <li>Last Page</li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>
        </>
    );
}