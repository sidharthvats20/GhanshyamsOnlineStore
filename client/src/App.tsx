import { useState, useEffect } from "react";

function App() {
  const [products, setProducts] = useState([
    {name: 'Product', price: 100.00},
  ]);
useEffect(() => {
    fetch('https://localhost:5001/api/products')
    .then(response => response.json())
    .then(data => setProducts(data))
}, []);

  return(
    <div className="app">
      <h1 className="mt-0">Ghanshyam's</h1>
      <ul>
      {products.map((item, index) => (
        <li key={index}>{item.name} - {item.price}</li>
      ))}
      </ul>

    </div>
  );
}

export default App;
