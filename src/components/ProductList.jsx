import { useEffect, useState } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);

  console.log("Products : ", products);

  //   fetch("http://localhost:3000/products")
  //     .then((response) => response.json())
  //     .then((data) => console.log(data));

  useEffect(() => {
    const url = "http://localhost:3000/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      {products.map((product, id) => (
        <h3 key={product.id}>{product.name}</h3>
      ))}
    </>
    // <>
    //   {products.map((product) => (
    //     <h3 key={product.id}>{product.name}</h3>
    //   ))}
    // </>
  );
};
