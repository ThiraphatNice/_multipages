import { useEffect, useState } from "react";
import { HashRouter, Route, Routes, } from "react-router-dom";

import Layout from './Layouts/Layout/Layout'

import Home from './pages/Home/Home'
import Components from "./pages/Components/Components";
import Todo from './pages/Todo/Todo'
import Animation from './pages/Animation/Animation'
import Calculator from './pages/Calculator/Calculator'
import Products from './pages/Products/Products'
import Carts from "./pages/Carts/Carts";
import Login from './pages/Login/Login';


import { fetchProducts } from "./data/products";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import "./App.css";


function App() {
  // --------- set here ----------
  const [token, setToken] = useState('')
  // --------- set here ----------
  const [role, setRole] = useState('')

  const [products, setProducts] = useState([])
  const [carts, setCarts] = useState([])

  useEffect(() => setProducts(fetchProducts()), [])
  useEffect(() => console.log(products), [products])

  if (token === '') {
    return (<Login setToken={setToken} setRole={setRole}/>)
  } else {
    return (
      <div className="app-container">
        <HashRouter>
          <Routes>
            <Route element={<Layout products={products} carts={carts} setToken={setToken}/>}>
              <Route path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />
              <Route path='/todo' element={<Todo />} />
              <Route path='/animation' element={<Animation />} />
              <Route path='/calculator' element={<Calculator />} />
              <Route path='/components' element={<Components />} />
              <Route path='/products' element={<Products products={products} carts={carts} setCarts={setCarts} />} />
              <Route path='/carts' element={<Carts carts={carts} setCarts={setCarts} />} />
            </Route>
          </Routes>
        </HashRouter>
      </div>
    )
  }
}

export default App;
