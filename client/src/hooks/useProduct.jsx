import React from 'react'
import { useContext } from "react";
import ProductContext from "../Context/ProductsContext";

const useProduct = () => useContext(ProductContext)

export default useProduct