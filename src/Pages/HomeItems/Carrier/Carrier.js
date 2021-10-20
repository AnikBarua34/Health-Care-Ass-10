import React from 'react';
import './Carrier.css';
import { BsAwardFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Carrier = () => {
    return (
        <div className="mt-5 p-5">
            <div className="bg-success m-2 p-3 rounded  border border-warning border-3">
            <h2><BsAwardFill /> CURRENT OPPURTUNITIES <BsAwardFill /> </h2>
            </div>

            <div className="bg-light mt-5 p-5 rounded  border border-warning border-3">
                <p>HealthCare has published a job circular and invited application from the interested and eligible candidates for the posts of Management Trainee Program 2021.Application can be submitted until May 10, 2021. Candidates age limit 30 years.The candidates educational qualification must be MBA/MBM/MSS/Masters degree in Economics, Accounting, Mathematics, Statistics, Finance, Marketing, Computer Science, Human Resources, Management, Public Administration, International Relations, Law or any related discipline from a reputed public or private university.</p>
            </div>
            <div className="button">
            <button className="btn btn-danger mt-5"> <Link to ="/home">Go to Home</Link> </button>
            </div>
            
            
        </div>
    );
};

export default Carrier;