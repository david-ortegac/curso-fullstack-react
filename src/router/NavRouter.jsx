import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "../views/Home";
import {Proveedores} from "../components/Proveedores";
import {Productos} from "../views/Productos";
import {NotFound} from "../components/NotFound";

export const NavRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/proveedores" element={<Proveedores/>}/>
                <Route path="/productos" element={<Productos/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}