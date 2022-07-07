import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Logo from "../assets/Logo.jpg"

function NavBar(){
    return(
        <nav>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <img src={Logo} className="img-responsive w-10 inline-block"/>
                <a className="font-bold text-2xl lg:text-2xl float-left " href="#">
                    CEM Inteligente
                </a>
                <div className="block lg:hidden">
                    <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    </button>
                </div>
                <div className="hidden lg:block">
                    <ul className="inline-flex">
                        <li><Link to="/" className="px-4 hover:text-gray-800">Home</Link></li>
                        <li><Link to="/nosotros" className="px-4 hover:text-gray-800">Nosotros</Link></li>
                        <li><Link to="/explora" className="px-4 hover:text-gray-800">Explora</Link></li>
                        <li><Link to="/opina" className="px-4 hover:text-gray-800">Opina</Link></li>
                        <li><Link to="/comunidad" className="px-4 hover:text-gray-800">Comunidad</Link></li>
                        <li><Link to="/socios" className="px-4 hover:text-gray-800">Socios</Link></li>
                    </ul>
                </div>
            </div>
    </nav>
    );

}
export default NavBar;


//<img src={Logo} className="w-16 inline-block px-2" />