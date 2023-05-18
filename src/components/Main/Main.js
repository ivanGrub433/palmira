import React from 'react';
import Contact from './Contact';
import Cards from './Cards';
import AboutUs from './AboutUs';
import Ambientaciones from './Ambientaciones'


function Main() {
    return (
        <div className="main">
            <AboutUs />
            <Ambientaciones />
            <Cards />
            <Contact />
        </div>
    );
}
export default Main

