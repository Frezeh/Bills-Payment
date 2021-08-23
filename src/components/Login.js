import React, { useState } from "react";
import "../Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { loginUser } from "../redux/ActionCreators";
import { useDispatch } from 'react-redux';
import { FormGroup, Input, Label, Button, Form, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors, actions } from 'react-redux-form';
import { postFeedback } from '../redux/ActionCreators';
// import axios from "axios";

export default function Login() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const creds = ({ username: username, password: password });
  const dispatch = useDispatch();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(creds));
  }

  const required = (val) => val && val.length;
  const maxLength = (len) => (val) => !(val) || (val.length <= len);
  const minLength = (len) => (val) => (val) && (val.length >= len);
  const isNumber = (val) => !isNaN(Number(val));
  const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);

  const handleRegister = (values) => {
    dispatch(postFeedback(values));
    dispatch(actions.reset('feedback'));
}

  return (
    <div className="rightside col-lg-12" style={{ backgroundColor: "purple" }}>
      <h4 style={{ textAlign: 'center', fontWeight: 500, fontSize: "2rem", color: "#fff" }}>Welcome to FX Tracker</h4>
      <div className="login__box">

        <Form onSubmit={handleSubmit} className="a__form">
          <h3>Log in</h3>
          <FormGroup className="form-group">
            <Label htmlFor="username" className="spacing__text">Username</Label>
            <Input type="text" id="username" name="username" value={username}
              onChange={e => setUsername(e.target.value)} />
          </FormGroup>
          <FormGroup className="form-group">
            <Label htmlFor="password" className="spacing__text">Password</Label>
            <Input type="password" id="password" name="password" value={password}
              onChange={e => setPassword(e.target.value)} />
          </FormGroup>
          <p></p>
          <Button type="submit" value="submit" className="btn btn-primary btn-lg btn-block">Login</Button>
          <p style={{ textAlign: 'right', fontWeight: 500, fontSize: "1.5rem" }}>
            {/* Button that appears like an Anchor */}
            <button type="button" className="link-button" onClick={toggleModal}>
              Register
            </button>
          </p>
        </Form>
      </div>
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Register</ModalHeader>
        <ModalBody>
          <LocalForm model="feedback" onSubmit={(values) => handleRegister(values)}>
            <Row className="form-group">
              <Label htmlFor="firstname" md={2}>First Name</Label>
              <Col md={10}>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Control.text model=".firstname" id="firstname" name="firstname"
                  placeholder="First Name"
                  className="form-control"
                  validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".firstname"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="lastname" md={2}>Last Name</Label>
              <Col md={10}>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Control.text model=".lastname" id="lastname" name="lastname"
                  placeholder="Last Name"
                  className="form-control"
                  validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".lastname"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 characters',
                    maxLength: 'Must be 15 characters or less'
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="telnum" md={2}>Contact Tel.</Label>
              <Col md={10}>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Control.text model=".telnum" id="telnum" name="telnum"
                  placeholder="Tel. Number"
                  className="form-control"
                  validators={{
                    required, minLength: minLength(3), maxLength: maxLength(15), isNumber
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".telnum"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 numbers',
                    maxLength: 'Must be 15 numbers or less',
                    isNumber: 'Must be a number'
                  }}
                />
              </Col>
            </Row>
            <Row className="form-group">
              <Label htmlFor="email" md={2}>Email</Label>
              <Col md={10}>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Control.text model=".email" id="email" name="email"
                  placeholder="Email"
                  className="form-control"
                  validators={{
                    required, validEmail
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".email"
                  show="touched"
                  messages={{
                    required: 'Required',
                    validEmail: 'Invalid Email Address'
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="bvnnum" md={2}>BVN</Label>
              <Col md={10}>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Control.text model=".bvnnum" placeholder="BVN Number" id="bvnnum" name="bvnnum" className="form-control"
                  validators={{
                    required, minLength: minLength(11), maxLength: maxLength(11), isNumber
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".bvnnum"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be 11 numbers',
                    maxLength: 'Must be 11 numbers',
                    isNumber: 'Must be a number'
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Label htmlFor="address" md={2}>Address</Label>
              <Col md={10}>
                {/* eslint-disable-next-line react/jsx-pascal-case */}
                <Control.text id="address" name="address" className="form-control"
                  model=".address"
                  placeholder="Address"
                  validators={{
                    required, minLength: minLength(3)
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".address"
                  show="touched"
                  messages={{
                    required: 'Required',
                    minLength: 'Must be greater than 2 characters',
                  }}
                />
              </Col>
            </Row>

            <Row className="form-group">
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" onClick={() => dispatch(actions.submit('feedback'))}>
                  Register
                </Button>
              </Col>
            </Row>
          </LocalForm>
        </ModalBody>
      </Modal>
    </div>
  );
}