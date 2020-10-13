import React from 'react';
import Feedback from '../components/home/Feedback/Feedback';
import Footer from '../components/home/Footer/Footer';
import Header from '../components/home/header/Header';
import Services from '../components/home/Services/Services';
import Works from '../components/home/works/Works';

const  Home = () => {
    document.title="Creative Agency | Home"
    return (
        <div>
            <Header/>
            <Services/>
            <Works/>
            <Feedback/>
            <Footer/>
        </div>
    );
};

export default Home;