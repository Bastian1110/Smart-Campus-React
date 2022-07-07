import React from 'react';
import NHero from '../components/NHero';
import Footer from '../components/Footer';

function Nosotros() {
    return (
        <>
            <h2 className="text-4xl font-bold text-white bg-gradient-to-r from-blue-500 to-blue-100 py-4 px-6">Nosotros</h2>
            <NHero />
            <div className="px-24 pb-10 pt-4">
                <p>
                La palabra campus proviene del latín y significa llanura, es en el siglo XX que el uso de la palabra se
                extiende y adopta su significado actual: un conjunto de edificios y espacios abiertos en los que se
                desarrolla la vida universitaria.
                </p>
                <p>
                Como estudiantes, profesores y colaboradores pasamos gran parte de nuestro día entre aulas, clases,
                libros, plazas, espacios naturales, árboles, jardines, biblioteca, laboratorios, teatro, cafeterías, áreas de
                esparcimiento, tiendas y áreas deportivas haciendo comunidad universitaria.
                Su ambiente nos deleita y nos invita a caminar entre sus pasillos dejando atrás el estrés y el ajetreo.Leer
                un libro o conversar bajo la sombra de un árbol es la cotidianidad. El campus nos acoge
                Nuestro campus es un medio ambiente excitante y dinámico que prove de muchas oportunidades para
                imaginar, reflexionar, soñar, crear, innovar y experimentar. Espacios para la maravillosa experiencia de
                aprender y enseñar.
                </p>
                <p>
                Nuestro campus es materia construida y energía almacenada y nos ofrece la posibilidad de aplicar en
                él muchas estrategias para hacerlo más eficiente y sostenible. Es el lugar ideal para la renovación,
                revitalización, reintegración, rehabilitación, re-uso, remodelación, recuperación y reciclaje que no
                permitirán hacerlo mejor, más eticiente y sostenible.
                </p>
                <p>
                Visualicemos nuestro campus como un recurso y un medio para aplicar y ser referencia de los objetivos del desarrollo sustentable.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Nosotros;