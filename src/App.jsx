
import { Header } from "./Components/Header";
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import { Cart } from "./Components/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart]=useState([]);
  return (
    <>
    <BrowserRouter>
    <Header cart={cart}/>
    <div className="container">
    <Routes>
      <Route path = "/" element ={<Home cart={cart} setCart={setCart}/>}/>
      <Route path = "/Cart" element ={<Cart cart={cart} />}/>
    </Routes>
    </div>
    
    </BrowserRouter>
    </>
      
  )
}

export default App;
