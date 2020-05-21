import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import axios from "axios";


function Gallery(props) {
  

  const [products, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/v1/products");
      setProduct(data);
    };
    fetchData();
    return () => {};
  }, []);

  return (
    <div className="gallery js-flickity">
      
        <div className="gallery-cell"></div>
      
    </div>
  );
}

export default Gallery;
