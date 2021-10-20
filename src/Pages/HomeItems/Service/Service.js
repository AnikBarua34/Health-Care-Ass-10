import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Service.css';
import { BsFillCartPlusFill } from "react-icons/bs";






const Service = ({service}) => {

const {img,name,description,id}=service;
    return (
        <div className="service-container">
            
  
    <Col className="card-body">
      <Card className="card" border="warning"> 
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>Name : {name}</Card.Title>
          <Card.Text>{description}</Card.Text>

          {/* dynamic route */}

          <Link to={`/booking/${id}`}
          ><button className="btn btn-dark">< BsFillCartPlusFill/> Book this Service</button></Link>
        </Card.Body>
      </Card>
    </Col>
  
          
        </div>
    );
};
export default Service;