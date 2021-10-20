import React, { useEffect, useState } from 'react';
import { Col,Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Booking.css';


const Booking = () => {
    // const {id } = props.match.params;
    const {serviceId}=useParams();
    const [singleServices,setSingleServices]=useState([]);

    // This state is for Showing Details after click 
    const [singleService,setSingleService]=useState({});

    // This is for load data 
    useEffect(()=>{
        fetch('/OurServices.JSON')
        .then(res=> res.json())
        .then(data=> setSingleServices(data))

    },[])
// This is will work when data loaded
   useEffect(()=>{
       const foundService = singleServices.find(service=> service.id == serviceId)
       setSingleService(foundService);
       console.log(foundService)
   },[singleServices])

    
    return (
        <div className="booking-container mt-5 p-3">
            
            <Col className=" text-dark fw-bold">
      <Card className="" border="warning"> 
        <Card.Img className="img mx-auto mt-3 p-1" style={{width:300}} variant="top" src={singleService?.img} />
        <Card.Body>
          <Card.Title>Service Name : {singleService?.name}</Card.Title>
          <Card.Text>{singleService?.description}</Card.Text>
          <HashLink to="/home#services"><button className="btn btn-danger">Back To Home</button> </HashLink>
        </Card.Body>
      </Card>
    </Col>    
        </div>
    );
};

export default Booking;