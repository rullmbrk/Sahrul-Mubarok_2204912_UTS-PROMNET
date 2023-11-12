import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ServicesComp = () => {
  return (
    <div className=" services min-vh-100 d-flex align-items-center" id="about me">
      {" "}
      {/* min vh untuk ukuran web div */}
      <Container>
        <Row className="mb-5">
          <Col>
            <h1 className="text-center fw-bold" data-aos="fade-up">
              About Me
            </h1>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
            a human being who is trying to become a human being who is beneficial to other human beings.
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          {" "}
          {/* ketika diukuran large(lg) tetep 3, kalo ukuran < 768 jadi 2, justify agar saat mengecil dia ada ditengah */}
          
          <Col className="text-center py-4 px-3" data-aos="fade-up" data-aos-delay="400">
             <i class="fa fa-calendar fs-2 mb-3" ></i>
            <h5 className="fw-bold">Birth</h5>
            <p>was born in Tangerang city on November 27th</p>
          </Col>
          <Col className="text-center py-4 px-3" data-aos="fade-up" data-aos-delay="600">
            <i class="fa-solid fa-graduation-cap fs-2 mb-3"></i>
            <h5 className="fw-bold">education history</h5>
            <p>TK Al-Istiqomah, SDN Hastakarya, SDN Karyamukti, SMP Al-Islam Boarding School, SMA Al-Islam Boarding School, Universitas Pendidikan Indonesia S1 Pendidikan Ilmu Komputer
            </p>
          </Col>
          <Col className="text-center py-4 px-3" data-aos="fade-up" data-aos-delay="800">
            <i class="fa-solid fa-location-dot fs-2 mb-3"></i>
            <h5 className="fw-bold">Address</h5>
            <p>Jl Geger Arum Bawah No.161, RT.007/RW001, Isola, Kec. Sukasari, Kota Bandung, Jawa Barat 40154</p>
          </Col>
          
        </Row>
      </Container>
    </div>
  );
};

export default ServicesComp;