import React, { useEffect, useState } from 'react';
import './App.css';

function Card({ key, brand, price, thumbnail, title }) {
  return (
    <div className="cardcontainer" key={key}>
      <img src={thumbnail} alt="" />
      <div className='content'>
      <h3>{title}</h3>
      <p>{brand}</p>
      <p><b>${price}</b></p>
      </div>
    </div>
  );
}

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data.products);
      });
  }, []);

  return (
 
      products.map(prod => (
        <Card
          key={prod.id}
          brand={prod.brand}
          price={prod.price}
          thumbnail={prod.thumbnail}
          title={prod.title}
        />
      ))
 
  );
}

export default App;