import React from 'react';
import { Carousel } from 'react-bootstrap';
import pic1 from '../../../Images/Banner/pic1.png';
import pic2 from '../../../Images/Banner/pic2.jpg';
import pic3 from '../../../Images/Banner/pic3.png';
import pic4 from '../../../Images/Banner/pic4.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className="banner mt-5">
            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic4}
      alt="First slide"
      
    />
   
  </Carousel.Item>

  {/* item 2 */}
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic3}
      alt="Second slide"
    /> 
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic2}
      alt="Third slide"
    />
  
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={pic1}
      alt="Fourth slide"
    />
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;