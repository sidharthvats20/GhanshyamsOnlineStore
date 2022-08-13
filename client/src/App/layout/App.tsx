import { useState, useEffect } from "react";
import Catalog from "../../Features/catalog/Catalog";
import Navbar from "../../Features/Navbar/Navbar";
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
      <Catalog/>
      <h1 className="mt-0">Ghanshyam's</h1>
      <ul>
      {products.map((item, index) => (
        <li key={index}>{item.id} - {item.name} - {item.price}</li>
      ))}
      </ul>

    </div>
  );
}

export default App;
