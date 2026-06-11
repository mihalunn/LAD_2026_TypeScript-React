import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./App.css";
import ProductList from './components/ProductList/ProductList';
import {products} from "./mocks/products";

const App = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Main />
            <ProductList products={products}/>
            <Footer />            
        </div>
    );
};

export default App;
