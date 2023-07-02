import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Summary = () => {
  return (
   <Container>
    <Row className='pt-3'>
      <Col xs={7} md={7} >
        <Row>
          <Col className='border h-450'>ist col</Col>
        </Row>
        <Row>
          <Col className='border h-450'> 2nd col</Col>
        </Row>
      </Col>
      <Col xs={5} md={5} >
      <Row>
          <Col className='border h-450'>3rd col</Col>
        </Row>
        <Row>
          <Col className='border h-450'>4th col</Col>
        </Row>
      </Col>
    </Row>
   </Container>
  )
}

export default Summary
