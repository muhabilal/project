import React from "react";
import aboutimg from '../Images/about.jpg';
import Container from 'react-bootstrap/Container';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './About.css';

export const About = (props) => {
  return (
    <div className="about-main" id="about-section" >
        <div className="mob-screen">
          <Container className="container-abt-mob">
            <Row>
            <Col className="custom-col">
            <img src={aboutimg} alt="About Image" className="abt-img" />
          </Col>
            </Row>
            <Row>
            <Col>
            <div className="about-text-main">
              <h2>About Us</h2>
              <div className="bar"></div>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <Container>
                  <Row>
                    <Col>
                      <ul className="custome-list">
                        {props.data
                          ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </Col>
                    <Col>
                      <ul className="custome-list">
                        {props.data
                          ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
            </Row>
          </Container>
        </div>
      <Container className="container-abt">
        <Row className="row-main">
          <Col className="custom-col">
            <img src={aboutimg} alt="About Image" className="abt-img" />
          </Col>
          <Col>
            <div className="about-text-main">
              <h2>About Us</h2>
              <div className="bar"></div>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <Container>
                  <Row>
                    <Col>
                      <ul className="custome-list">
                        {props.data
                          ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </Col>
                    <Col>
                      <ul className="custome-list">
                        {props.data
                          ? props.data.Why.map((d, i) => (
                            <li key={`${d}-${i}`}>{d}</li>
                          ))
                          : "loading"}
                      </ul>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
