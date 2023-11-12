import React from "react";
import {Container, Row, Col} from "react-bootstrap";

const HeroComp = () => {
    return (
    <div className="hero min-vh-100 w-100" id="home">
        <Container>
            <Row>
                <Col>
                    <h1 className="text-white text-center fs-1 animate__animated animate__fadeInUp">Hi, I'm Sahrul Mubarok</h1>
                    <p className="text-white text-center text-white-50 animate__animated animate__fadeInUp animate_delay-1s"> "don't think to be the best, but think to do the best"</p>
                </Col>
            </Row>
        </Container>
    </div>
    );
};

export default HeroComp;