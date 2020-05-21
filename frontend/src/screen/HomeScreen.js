import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { listProducts } from "../redux/actions/productActions";

function HomeScreem(props) {
  
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(listProducts());
    return () => {
      
    };
  }, [])
  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
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
              <Link to={"/product/" + product._id}>
                {product.title}
              </Link>
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
