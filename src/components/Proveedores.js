import React from "react";
import data from '../data/Data'

export const Proveedores = ({nombre, descripcion, imagen, productos}) => {
    return (
        <section id="services" className="services section">

            <div className="container section-title" data-aos="fade-up">
                <h2>Proveedores</h2>
            </div>

            <div className="container">
                <div className="row g-5">
                    {data.map((item, index) => (
                        <>
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                <div className="service-item item-cyan position-relative">

                                    <img src={item.imagen} alt={item.nombre}/>
                                    <div>
                                        <h3>{item.nombre}</h3>
                                        <p>{item.descripcion}</p>
                                        <a href={productos} className="read-more stretched-link">Productos <i
                                            className="bi bi-arrow-right"></i></a>
                                    </div>

                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>


        </section>
    )
        ;
}