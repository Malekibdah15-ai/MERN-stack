
import { useEffect, useState } from 'react'
import axios from 'axios';
import CreateProduct from './component/productform';
import ProductList from './component/productli';
import Products from './component/products';
import React from "react";
import UpdatePro from './component/update';
import Create from './component/create';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  
  return (
    <>
    <Routes>
      <Route path = "/"  element = {<Create />}/>
      <Route path = "/api/:id"  element = {<Products />}/>
      <Route path = "/product/:id/edit"  element = {<UpdatePro />}/>
    </Routes>
    <ProductList isFetched = {isFetched}/>
    </>
  );
}

export default App;
