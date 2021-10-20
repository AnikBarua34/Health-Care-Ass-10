import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({doctor}) => {
    const {name,title,img} = doctor;
    return (
        <div className="doctors-container text-dark">

          {/* using bootstrap card  */}
          
            <Col className="card-body border">
      <Card className="card" border="warning"> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>{title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
        </div>
    );
};

export default Doctor;