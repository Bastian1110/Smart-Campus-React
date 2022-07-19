import React from 'react';
import Footer from '../components/Footer';

function Comunidad() {
    return (
        <>
        <h1 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-100 py-4 px-10">Comunidad</h1>
        <div className='width: 100% display:block position:fixed'>
            <p className='text-2xl font-sans text-lime-700 font-bold my-20 mx-60'> ARQ
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'>  Arquitecto</button> 
            </p>
            <p className='text-2xl font-sans text-lime-700 font-bold my-20 mx-60'> LUB
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Urbanismo </button> 
            </p>
            <p className='text-2xl font-sans text-lime-700 font-bold my-20 mx-60'> IC
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Ingeniero Civil </button> 
            </p>
            <p className='text-2xl font-sans text-red-700 font-bold my-20 mx-60'> LEC 
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Economía </button> 
            </p>
            <p className='text-2xl font-sans text-red-700 font-bold my-20 mx-60'> LRI
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Relaciones Internacionales </button> 
            </p>
            <p className='text-2xl font-sans text-red-700 font-bold my-20 mx-60'> LED
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Derecho </button> 
            </p>
            <p className='text-2xl font-sans text-red-700 font-bold my-20 mx-60'> LTP
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Gobierno y Transformación Pública  </button> 
            </p>
            <p className='text-2xl font-sans text-violet-900 font-bold my-20 mx-60'> LC
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Comunicación </button> 
            </p>
            <p className='text-2xl font-sans text-violet-900 font-bold my-20 mx-60'> LEI
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Inovación Educativa </button> 
            </p>
            <p className='text-2xl font-sans text-violet-900 font-bold my-20 mx-60'> LPE
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Periodismo </button> 
            </p>
            <p className='text-2xl font-sans text-violet-900 font-bold my-20 mx-60'> LAD
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Arte Digital </button> 
            </p>
            <p className='text-2xl font-sans text-violet-900 font-bold my-20 mx-60'> LDI
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Diseño </button> 
            </p>
            <p className='text-2xl font-sans text-violet-900 font-bold my-20 mx-60'> LLE
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Licenciado en Letras Hispanicas </button> 
            </p>
            <p className='text-2xl font-sans text-sky-600 font-bold my-20 mx-60'> IMT
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Ingeniero en Mecatrónica </button> 
            </p>
            <p className='text-2xl font-sans text-sky-600 font-bold my-20 mx-60'> IDM
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Ingeniero en Ciencia de Datos y Matemáticas </button> 
            </p>
            <p className='text-2xl font-sans text-sky-600 font-bold my-20 mx-60'> INA
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Ingeniero en Nanotecnología </button> 
            </p>
            <p className='text-2xl font-sans text-sky-600 font-bold my-20 mx-60'> IAL
                <button type="button" className='text-2xl font-sans text-gray-700 mx-20'> Ingeniero en Alimentos </button> 
            </p>
        </div>

        <Footer/>
        </>
    );
}

export default Comunidad;