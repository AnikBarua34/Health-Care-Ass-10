import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';
import { BsFillCalendarPlusFill } from "react-icons/bs";

const Services = () => {
    const [services,setServices]=useState([]);


    useEffect(()=>{
fetch('./OurServices.JSON')
.then(res=> res.json())
.then(data=> setServices(data))

    },[])
    return (
        <div id="services">
            <div  className="mt-3 fw-bold text-light">
            <h2><BsFillCalendarPlusFill /> Our Services <BsFillCalendarPlusFill /></h2>
            <p>-------------------------------------------</p>
            </div>
            

            <div>
            <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                services.map(service=> <Service key={service.id} service={service}
                ></Service>)
            }
            </Row>
            </div>
            
        </div>
    );
};

export default Services;