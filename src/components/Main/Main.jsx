import React from 'react';
import MainBodyContent from './MainBodyContent';
import Contact from './Contact';
import Hero from './Hero';

const Main = props => {
    return (
        <>
            <Hero />
            <MainBodyContent />
            <Contact />
        </>
    );
};

export default Main;