import React from 'react'
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import { ProductProvider } from "./Context/ProductsContext";
import Bag from "./components/Bag";
import Home from "./components/Home"
import Admin from "./admin/Admin"



function App() {

  return (
    <div className="reletive">
       <ProductProvider>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={
                <ProductList />
             } />
            <Route path="/products/:id" element={
                <ProductDetails />
             } />
            <Route path="/bag" element={
                  <Bag />
            }/>
            <Route path="/admin" element={<Admin />} />

            <Route path="*" element={<p>Not Found</p>}/>     
        </Routes> 
      </ProductProvider>
    </div>
  );
}

export default App;
