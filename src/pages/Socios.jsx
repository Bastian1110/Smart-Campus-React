import React from 'react';
import Footer from '../components/Footer';
import NSocios from '../components/NSocios';

function Socios() {
    return (
        <>
        <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-100 py-4 px-10">Socios</h2>
        <NSocios/>
        <Footer/>  
        </>
    );
}

export default Socios;