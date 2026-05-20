import { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:3000/products");

  console.log("Products : ", products);

  //   fetch("http://localhost:3000/products")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [url]);

  return (
    <section>
      <div className="filter">
        <button onClick={() => setUrl("http://localhost:3000/products")}>
          All
        </button>
        <button
          onClick={() => setUrl("http://localhost:3000/products?in_stock=true")}
        >
          In Stock only
        </button>
      </div>
      {products.map((product, id) => (
        <div className="card" key={product.id}>
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>$ {product.price}</span>
            <span className={product.in_stock ? "instock" : "unavailable"}>
              {product.in_stock ? "In Stock" : "Out of Stock"}
            </span>
          </p>
        </div>
      ))}
    </section>
    // <>
    //   {products.map((product) => (
    //     <h3 key={product.id}>{product.name}</h3>
    //   ))}
    // </>
  );
};
