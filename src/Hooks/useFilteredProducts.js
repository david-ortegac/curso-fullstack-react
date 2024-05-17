import { useState, useEffect } from 'react';

const useFilteredProducts = (products, buscarPor) => {
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        const term = buscarPor.toLowerCase();
        const result = products.filter(product =>
            product.nombre.toLowerCase().includes(term)
        );
        setFilteredProducts(result);
    }, [products, buscarPor]);

    return filteredProducts;
};

export default useFilteredProducts;