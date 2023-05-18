import React from 'react'
// reactstrap components
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardTitle,
    Container,
    Row,
    Col
} from "reactstrap";

function Cards() {
    return (
        <div className="section section-dark text-center">
            <Container>
                <h2 className="title">La idea es poner cosas de ig acá</h2>
                <Row>
                    <Col md="4">
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                                    />
                                </a>
                            </div>
                            <CardBody >
                                <a  href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div  className="author" >
                                        <CardTitle  tag="h4">Publicacion 1</CardTitle>
                                    </div>
                                </a>
                                <p className="card-description text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus cursus velit eget tristique.
                                    Nam vel urna a diam volutpat blandit ut rutrum dui. Nullam quis malesuada massa, nec porttitor lacus.
                                    Praesent sit amet erat dui.
                                    Proin venenatis nec leo congue laoreet. Cras at interdum nunc. Donec blandit lorem sed.
                                </p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button
                                    className="btn-just-icon btn-neutral"
                                    color="link"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fa fa-instagram" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        src={require("assets/img/faces/clem-onojeghuo-3.jpg")}
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div className="author">
                                        <CardTitle tag="h4">Publicacion 2</CardTitle>
                                    </div>
                                </a>
                                <p className="card-description text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus cursus velit eget tristique.
                                    Nam vel urna a diam volutpat blandit ut rutrum dui. Nullam quis malesuada massa, nec porttitor lacus.
                                    Praesent sit amet erat dui.
                                    Proin venenatis nec leo congue laoreet. Cras at interdum nunc. Donec blandit lorem sed.
                                </p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button
                                    className="btn-just-icon btn-neutral"
                                    color="link"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fa fa-instagram" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col md="4">
                        <Card className="card-profile card-plain">
                            <div className="card-avatar">
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <img
                                        alt="..."
                                        src={require("assets/img/faces/erik-lucatero-2.jpg")}
                                    />
                                </a>
                            </div>
                            <CardBody>
                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                    <div className="author">
                                        <CardTitle tag="h4">Publicacion 3</CardTitle>
                                    </div>
                                </a>
                                <p className="card-description text-center">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus cursus velit eget tristique.
                                    Nam vel urna a diam volutpat blandit ut rutrum dui. Nullam quis malesuada massa, nec porttitor lacus.
                                    Praesent sit amet erat dui.
                                    Proin venenatis nec leo congue laoreet. Cras at interdum nunc. Donec blandit lorem sed.
                                </p>
                            </CardBody>
                            <CardFooter className="text-center">
                                <Button
                                    className="btn-just-icon btn-neutral"
                                    color="link"
                                    href="#pablo"
                                    onClick={(e) => e.preventDefault()}
                                >
                                    <i className="fa fa-instagram" />
                                </Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Cards