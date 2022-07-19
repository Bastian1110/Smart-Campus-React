import React from "react";
import One from '../assets/images/One.jpg';
import Two from '../assets/images/Two.jpg';
import Three from '../assets/images/Three.jpg';

import SimpleImageSlider from "react-simple-image-slider";


const images = [
    { url: One },
    { url: Two },
    { url: Three }
  ];

  function NHero(){
    return(
        <div className="pt-10 pb-[18rem]">
            <div className="container mx-auto px-6 ">
                <div className="pt-10">
                    <SimpleImageSlider
                        width={'40%'}
                        height={'40%'}
                        images={images}
                        showNavs={true}
                    />
                </div>
                <div className="float-right w-[40%] py-20  font-bold">
                    <h2>CEM es un campus maduro, sólido y
                        con experiencia. Tiene el potencial, la
                        voluntad e inteligencia para renovarse
                        en función de las necesidades y las
                        capacidades de los contexts locales,
                        regionales y nacionales.
                    </h2>
                </div>
            </div>
        </div>
    );
}
export default NHero;

/* */