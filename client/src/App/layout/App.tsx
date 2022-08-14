import { useState, useEffect } from "react";
import Landing from "../../Features/landing/Landing";
import Catalog from "../../Features/catalog/Catalog";
import Navbar from "../../Features/navbar/Navbar";
import { Product } from "../models/Product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
}, []);

  return(
    <div className="app">
      <Navbar/>
      <Landing/>
      <Catalog products={products}/>
    </div>
  );
}

export default App;
