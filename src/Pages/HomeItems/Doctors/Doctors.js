import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import { BsSunriseFill } from "react-icons/bs";

const Doctors = () => {
    const [doctors,setDoctors]=useState([]);

    useEffect(()=>{
        fetch('./TopDoctors.JSON')
        .then(res=> res.json())
        .then(data=> setDoctors(data))
        
            },[])
    return (
        <div id="doctors" className="m-5 text-light fw-bold">
            <h3 className="text-light fw-bold"><BsSunriseFill /> Our Doctors <BsSunriseFill /></h3>
            <p>-------------------------------------------</p>


            <Row xs={1} md={2} lg={3} className="g-3 m-3 rounded">
            {
                doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}
                    ></Doctor> )
            }
            </Row>
        </div>
    );
};

export default Doctors;