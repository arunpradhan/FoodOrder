import { Container, Row, Col } from "react-bootstrap";

import { addToCart, removeToCart } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { productList } from "../redux/productAction";
import { useEffect } from "react";

export default function Menu() {

    const dispatch = useDispatch();
    let data = useSelector((state) => state.productData);
    console.warn("data in menu component from saga...", data);
    
    // Call API's data on page load
    useEffect(() => {
       dispatch(productList())
    }, [])
    return (
        <>
            <section className="food_section layout_padding">
                <Container>
                    <Row className="align-items-center">
                        <Col>
                            <h2 style={{ textAlign: "center" }}>Our Menu</h2>
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
                            {
                                data.map((item) => (
                                <Col xs={12} md={4} key={item.id}>
                                    <div className="box">
                                        <div>
                                            <div className="img-box">
                                                <img src={`/images/${item.foodLocalImage}`} className="img-fluid" alt=""/>
                                            </div>
                                            <div className="detail-box">
                                                <h5>
                                                    {item.name}
                                                </h5>
                                                <p>
                                                    {item.description}
                                                </p>
                                                <div className="options">
                                                    <h6 className="align-content-center">
                                                        ${item.price}
                                                    </h6>
                                                    <button onClick={() => dispatch(addToCart(item))} className="button-link">
                                                        <i className="bi bi-cart4"></i> Add To Cart
                                                    </button>
                                                    <button onClick={() => dispatch(removeToCart(item.id))} className="button-link">
                                                        <i className="bi bi-trash"></i> Remove From Cart
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                ))
                            }
                            
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