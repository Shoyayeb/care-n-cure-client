import React from 'react';
import Doctors from '../Doctors/Doctors';
import Faq from '../Faq/Faq';
import Hero from '../Hero/Hero';
import Services from './../Services/Services';
import Toasts from './../Toasts/Toasts';

const Home = () => {
    return (
        <div>
            <Toasts></Toasts>
            <Hero></Hero>
            <Services></Services>
            <Faq id="#faq"></Faq>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;