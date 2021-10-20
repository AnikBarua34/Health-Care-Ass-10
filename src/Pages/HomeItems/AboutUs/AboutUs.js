import React from 'react';
import { BsTrophyFill } from "react-icons/bs";

const AboutUs = () => {
    return (
        <div className="mt-4 p-4">
            <div className="p-3 bg-light text-primary fw-bold border border-warning border-3 rounded">
            <h1><BsTrophyFill /> OUR STORY <BsTrophyFill /></h1>
            </div>

            <div className="mt-4 p-3 bg-light text-dark border border-warning border-3 rounded">
                <p>Chittagong officially known as Chattogram is a major coastal seaport city and financial center in southeastern Bangladesh. The city has a population of 4.5 million, making it the second largest city in the country. After achieving the independence in 1971, the health sector of Bangladesh required a drastic improvement in health care services. Today HealthCare Hospital and diagnostics limited is one of the leading hospitals in Bangladesh improving and providing healthcare services kind-heartedly and the safest way possible.

                    Located at the heart of Chattogram, city, HealthCare Hospital and Diagnostics limited have started out its journey in September 2015 with an aim to provide the best healthcare services in the port city of Chittagong. This Healthcare facility is formed by the merge of the best doctors in the city with the aim of giving quality health care services to the society. HealthCare Hospital and Diagnostic limited make great efforts for continuous quality improvement and comply with international standards to implement quality systems and maintain the quality services under international standards. HealthCare Hospital and Diagnostics limited combines the use of the latest medical technology and highly specialized doctors in order to provide high-quality treatment to all our patients. We always tend to keep our Patient’s health as our Priority.

                    As a responsible corporate citizen, HealthCare Hospital takes the spirit of leadership well beyond business, and it has embraced the responsibility of keeping Bangladesh healthy by setting free Medical Camps at a different time of the year.</p>
            </div>

            <div className="mt-2 p-3 bg-light text-dark border border-warning border-3 rounded">
                <h5>Website Owner</h5>
                <p>ANIK BARUA TURJOY</p>
            </div>
            
        </div>
    );
};

export default AboutUs;