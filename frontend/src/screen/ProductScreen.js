import React from "react";
import data from "../assets/products/data";

function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.is);
  return (
    <div>
      <div className="details">
        <div className="details-image">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="details-description">
          <ul>
            <li>
              <h4>{product.title} </h4>
            </li>
            <li>
              {product.rating} starts ({product.numReviews} Rewies)
            </li>
            <li>
              <b>{product.price} € </b>
            </li>
            <li>
              <div>{product.descriptions}</div>
            </li>
          </ul>
        </div>
        <div className="details-action">
          <ul>
            <li>Precio: {product.price}</li>
            <li>Stock: {product.status}</li>
            <li>
              Cantidad:{" "}
              <select>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
                      </li>
                      <li>
                          <button className="button primary">Añadir al carro</button>
                      </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default ProductScreen;
