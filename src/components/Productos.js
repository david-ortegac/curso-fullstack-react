import React, {useEffect, useState} from "react";
import productos from './../data/Productos'
import useFilteredProducts from "../Hooks/useFilteredProducts";

export const Productos = () => {
    const [productData, setProductData] = useState(productos);
    const [changedProducts, setChangedProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const filteredProducts = useFilteredProducts(productData, searchTerm);

    const cambiarCatidad = (index, cantidad) => {
        const updatedProductData = productData.map((producto, idx) => {
            if (idx === index) {
                return {
                    ...producto,
                    cantidad: producto.cantidad + cantidad,
                    cantidadDisponible: producto.cantidadDisponible - cantidad
                };
            }
            return producto;
        });
        setProductData(updatedProductData);
        console.log(updatedProductData[index].cantidadDisponible);
    };

    useEffect(() => {
        const actualizarProductosCambiados = productData.filter(producto =>
            producto.cantidadDisponible !== productos.find(p => p.nombre === producto.nombre).cantidadDisponible
        );
        setChangedProducts(actualizarProductosCambiados);
    }, [productData]);

    return (
        <>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container footer">
                <div className="col-lg-6 col-md-12 footer-newsletter">
                        <input
                            type="text"
                            placeholder="Buscar producto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    <label>{filteredProducts.data}</label>
                </div>
            </div>
            <br/>
            <h1 className="mt-5 text-center">Lista de Productos Electrónicos</h1>
            <h2 className="mt-5 text-center">Productos en carro: {changedProducts.length}</h2>

            <div className="container">
                <div className="row g-5">
                    {productos.map((producto, index) => (
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-item item-cyan position-relative">
                                <div>
                                    <div key={index}>
                                        <h2>{producto.nombre}</h2>
                                        <p>{producto.descripcion}</p>
                                        <img src={producto.imagen} alt={producto.nombre} width="200"/>
                                        <p>Precio: ${producto.precio.toFixed(2)}</p>
                                        <p>Cantidad disponible: {producto.cantidadDisponible}</p>

                                        <ul>
                                            {producto.caracteristicas.map((caracteristica, idx) => (
                                                <li key={idx}>{caracteristica}</li>
                                            ))}
                                        </ul>
                                        <button className='btn btn-success'
                                                onClick={() => cambiarCatidad(index, producto.cantidad + 1)}>
                                            Comprar
                                        </button>
                                        <button className='btn btn-danger'
                                                onClick={() => cambiarCatidad(index, producto.cantidad - 1)}>
                                            Quitar elemento
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <br/>
            <br/>
            <br/>
        </>
    );
}