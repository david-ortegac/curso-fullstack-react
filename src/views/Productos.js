import React from "react";

export const Productos = () => {
    return (
        <section id="features-details" className="features-details section">
            <div className="container">
                <div className="row gy-4 justify-content-between features-item">

                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                        <img src="./assets/img/features-1.jpg" className="img-fluid" alt=""/>
                    </div>

                    <div className="col-lg-5 d-flex align-items-center" data-aos="fade-up" data-aos-delay="200">
                        <div className="content">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident.
                            </p>
                            <a href="#" className="btn more-btn">Learn More</a>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    );
}