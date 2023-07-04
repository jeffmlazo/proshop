import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function FormContainer({ children }) {
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
    >
      <Row>
        <Col>{children}</Col>
      </Row>
    </Container>
  );
}

export default FormContainer;
