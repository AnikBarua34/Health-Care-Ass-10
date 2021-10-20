import React from 'react';
import { BsFillTelephoneForwardFill,BsFillAlarmFill,BsFillBrightnessHighFill,BsFillBagPlusFill,BsFillHeartFill,BsFillPinMapFill } from 'react-icons/bs';

const FreeTreatments = () => {
    return (
        <div className="notice-container m-5 p-5 bg-light text-primary fw-bold border border-warning border-5 rounded">
            <h2> <BsFillBrightnessHighFill /> <u>Notice!!</u> <BsFillBrightnessHighFill /> </h2>
                <h3>16 Dec 2021</h3>
            <h5><BsFillBagPlusFill /> Our All Doctors will see patients without Fee <BsFillBagPlusFill /></h5>
            <p><BsFillHeartFill /> Location : Max Hospital & Diagnoctic Ltd.</p>
            <p><BsFillPinMapFill /> Address: Late Alhaj Zahur Ahmed Chowdhury Rd, Chattogram</p>
            <p><BsFillAlarmFill />  Time : 7Am - 10Pm</p>
            <p> <u>Call for more details</u> </p>
            <p><BsFillTelephoneForwardFill /> 02 413 606 86</p>
            <p><BsFillTelephoneForwardFill /> 02 413 606 87</p>
            <p><BsFillTelephoneForwardFill /> 02 413 606 89</p>
            <p><BsFillTelephoneForwardFill /> 02 413 606 90</p>
        </div>
    );
};

export default FreeTreatments;