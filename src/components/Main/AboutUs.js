import React from 'react'
// reactstrap components
import {
    Button,
    Container,
    Row,
    Col
} from "reactstrap";

function AboutUs() {
    return (
        <div className="section text-center">
            <Container>
                <Row>
                    <Col className="ml-auto mr-auto" md="8">
                        <h2  className="title">Sobre nosotros</h2>
                        <h5 className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit quam nec purus maximus tempus. Nulla pellentesque pharetra nibh vitae interdum. Donec tristique commodo rhoncus. Fusce sem massa, sollicitudin non ultricies et, eleifend in odio. Donec feugiat viverra varius. Maecenas iaculis, risus et fermentum scelerisque, ante risus pretium eros, vel venenatis mi felis sit amet urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec ullamcorper, ipsum vitae rutrum ultricies, sapien nulla posuere nulla, vitae faucibus purus mauris quis arcu. Aenean et ante dui.
                        </h5>
                        <br />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-album-2" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">Beautiful Gallery</h4>
                                <p className="description">
                                    Spend your time generating new ideas. You don't have to
                                    think of implementing.
                                </p>
                                <Button className="btn-link" color="info" href="#pablo">
                                    See more
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-bulb-63" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">New Ideas</h4>
                                <p>
                                    Larger, yet dramatically thinner. More powerful, but
                                    remarkably power efficient.
                                </p>
                                <Button className="btn-link" color="info" href="#pablo">
                                    See more
                                </Button>
                            </div>
                        </div>
                    </Col>
                    <Col md="4">
                        <div className="info">
                            <div className="icon icon-info">
                                <i className="nc-icon nc-sun-fog-29" />
                            </div>
                            <div className="description">
                                <h4 className="info-title">Delightful design</h4>
                                <p>
                                    Find unique and handmade delightful designs related items
                                    directly from our sellers.
                                </p>
                                <Button className="btn-link" color="info" href="#pablo">
                                    See more
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs