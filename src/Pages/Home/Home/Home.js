import React from 'react';
import Hero from '../Hero/Hero';
import Services from './../../Services/Services/Services';
import Toasts from './../Toasts/Toasts';

const Home = () => {
    return (
        <div>
            <Toasts></Toasts>
            <Hero></Hero>
            <Services></Services>
        </div>
    );
};

export default Home;