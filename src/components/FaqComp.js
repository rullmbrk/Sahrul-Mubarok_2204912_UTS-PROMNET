import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqComp = () => {
  return (
    <div className="faq" id="contact">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center fw-bold" data-aos="fade-up">Yang biasa ditanyakan</h2>
            <p className="text-center" data-aos="fade-up" data-aos-delay="200">
             
            </p>
          </Col>
        </Row>
        <Row className="row-cols-lg-2 row-cols-1 g-4">
          <Col data-aos="fade-up" data-aos-delay="400">
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Apa saja kesibukan akhir-akhir ini?
                </Accordion.Header>
                <Accordion.Body>
                  Masih sibuk mencari bekal akhirat
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Kenapa gak potong rambut?
                </Accordion.Header>
                <Accordion.Body>
                  Belum mau
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="600">
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>Kapan nikah?</Accordion.Header>
                <Accordion.Body>
                  Kapan-kapan, jika sudah waktunya
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col data-aos="fade-up" data-aos-delay="800">
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>Bagaimana cara menghubungi?</Accordion.Header>
                <Accordion.Body>
                Bisa menghubungi whatsapp 0857xxxxxxxx, dm instagram rull_almbrk, facebook ...
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FaqComp;