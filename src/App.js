import './App.css';
import {Header} from "./components/Header";
import React from "react";
import {Footer} from "./components/Footer";
import {BrowserRouter} from "react-router-dom";
import {NavRouter} from "./router/NavRouter";

function App() {
    return (<>
            <Header/>
            <NavRouter></NavRouter>
            <Footer/>
        </>
    );
}

export default App;
