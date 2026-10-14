import React, { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.log("Error:", error);
      } finally {
        console.log("All done");
      }
    }

    getData();
  }, []);

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

export default Products;
