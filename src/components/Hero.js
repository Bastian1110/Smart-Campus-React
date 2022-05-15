import React from "react";
import ReactPlayer from "react-player";

//Insert the revelant stuff about MetaVerse Campus & Info 
function Hero(){
    return(
        <div className="py-10 bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="container mx-auto px-6">
                <div className="relative pt-[50%] bg-white">
                    <ReactPlayer 
                        className="absolute top-0 left-0" 
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        playing='true'
                        width='100%'
                        height='100%'/>
                </div>
                
                <div className="">
                    <h2 className="text-4xl font-bold mb-2 text-white">
                        Campus Virtual
                    </h2>
                    <h3 className="text-2xl mb-8 text-gray-200">
                        Adentrate en el campus virtual para participar en distintas actividades.
                    </h3>
                </div>

                <button class="bg-white font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider">
                    ¡Entrar!
                </button>
            </div>
        </div>
    );
}
export default Hero;