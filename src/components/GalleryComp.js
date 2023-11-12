import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import Gallery1 from "../assets/gallery/smp.jpeg";
import Gallery3 from "../assets/gallery/sma.jpeg";
import Gallery2 from "../assets/gallery/univ.jpeg";

const GalleryComp = () => {
  return (
    <div className="gallery min-vh-100 d-flex align-items-center" id="gallery">
      <Container>
        <Row>
          <Col>
            <h1
              className="text-center fw-bold py-3 pt-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              education history documentation
            </h1>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-1 row-cols-sm-1 row-cols-1 g-5">
          {" "}
          {/* tata letak foto (lg 3 = 3 berjajar) g(gutter) jarak antar foto*/}
          <Col>
            <img src={Gallery1} alt="smp" className="w-100"
              data-aos="flip-down" data-aos-delay="200"
            />
          </Col>
          <Col>
            <img src={Gallery2} alt="sma" className="w-100"
              data-aos="flip-down" data-aos-delay="400"
            />
          </Col>
          <Col>
            <img src={Gallery3} alt="univ" className="w-100"
              data-aos="flip-down" data-aos-delay="600"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default GalleryComp;