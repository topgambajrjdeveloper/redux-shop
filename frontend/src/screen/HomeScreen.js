import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from 'axios';

function HomeScreem(props) {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/v1/products");
      setProduct(data)
    }
    fetchData();
    return () => {
      
    };
  }, [])
  return (
    <ul className="products">
      {products.map((product) => (
        <li key={product._id}>
          <div className="product">
            <Link to={"/product/" + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.title}
              />
            </Link>
            <div className="product-name">
              <Link to={"/product/" + product._id}>{product.title}</Link>
            </div>
            <div className="product-brand">{product.category}</div>
            <div className="product-price">{product.price}€</div>
            <div className="product-rating">
              {product.rating} Stars ({product.numReviews} Reviews)
            </div>
            <div className="product-description">
              <p>{product.descriptions}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
export default HomeScreem;
