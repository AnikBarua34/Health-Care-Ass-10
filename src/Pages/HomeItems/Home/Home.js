import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div id="home">
           <Header></Header>
           <Banner></Banner>
           <Services></Services>
           <Doctors></Doctors>
           
        </div>
    );
};

export default Home;