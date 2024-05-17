import React from "react";

export const Home = () => {
    return (<>

            <main className="main">
                <section id="hero" className="hero section">
                    <div className="hero-bg">
                        <img src="assets/img/hero-bg-light.webp" alt=""/>
                    </div>
                    <div className="container text-center">
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <h1 data-aos="fade-up" className="">Bienvenidos to <span>Ibague Vende</span></h1>
                            <div className="d-flex" data-aos="fade-up" data-aos-delay="200">
                                <a href="/proveedores" className="btn-get-started">Buscar proveedor</a>
                            </div>
                            <img src="assets/img/hero-services-img.webp" className="img-fluid hero-img" alt=""
                                 data-aos="zoom-out" data-aos-delay="300"/>
                        </div>
                    </div>

                </section>
            </main>
        </>
    );
}
