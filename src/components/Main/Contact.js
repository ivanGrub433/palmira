import React from 'react';
import ReactDatetime from "react-datetime";
// reactstrap components
import {
    Button,
    Form,
    FormGroup,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Container,
    Row,
    Col
  } from "reactstrap";

function Contact() {
  return (
    <div className="section landing-section">
    <Container>
      <Row>
        <Col className="ml-auto mr-auto" md="8">
          <h2 className="text-center">Contactanos</h2>
          <Form className="contact-form">
            <Row>
              <Col md="6">
                <label>Name</label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-single-02" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Name" type="text" />
                </InputGroup>
              </Col>
              <Col md="6">
                <label>Email</label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="nc-icon nc-email-85" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input placeholder="Email" type="text" />
                </InputGroup>
              </Col>
            </Row>
            <Col md="5">
              <label>datetimepicker</label>
              <Row>
                  <FormGroup>
                    <InputGroup className="date" id="datetimepicker">
                      <ReactDatetime
                        inputProps={{
                          placeholder: "Datetime Picker Here"
                        }}
                      />
                      <InputGroupAddon addonType="append">
                        <InputGroupText>
                          <span className="glyphicon glyphicon-calendar">
                            <i aria-hidden={true} className="fa fa-calendar" />
                          </span>
                        </InputGroupText>
                      </InputGroupAddon>
                    </InputGroup>
                  </FormGroup>
              </Row>
            </Col>
            <label>Message</label>
            <Input
              placeholder="Tell us your thoughts and feelings..."
              type="textarea"
              rows="4"
            />
            <Row>
              <Col className="ml-auto mr-auto" md="4">
                <Button className="btn-fill" color="danger" size="lg">
                  Send Message
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  </div>
  )
}

export default Contact