import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
   }
  const closedMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };

  return (
    <div className="grid-container">
      {/*<!-- header -->*/}
      <header class="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Redux Shop</a>
        </div>
        <div className="header-links">
          <a href="signin.html">
            <i class="fas fa-sign-in-alt"></i>
          </a>
          <button onclick="openCart()">
            <i class="fas fa-shopping-cart"></i>
          </button>
        </div>
      </header>
      {/*<!-- end header -->*/}
      {/*<!-- sidebar -->*/}
      <aside className="sidebar">
        <h3 class="sidebar-title">Categorías</h3>
        <button class="sidebar-close-button" onClick={closedMenu}>
          x
        </button>
        <div className="sidebar-link">
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/oil.svg"
              alt=""
            />
            <a href="/">Aceite, vinagre y sal</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/sugar.svg"
              alt=""
            />
            <a href="/">Azúcar, caramelos y chocolates</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/toy.svg"
              alt=""
            />
            <a href="/">Bebe</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/alcohol.svg"
              alt=""
            />
            <a href="/">Bodega</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/cacao.svg"
              alt=""
            />
            <a href="/">Cacao, café e infusiones</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/meat.svg"
              alt=""
            />
            <a href="/">Carne</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/cheese.svg"
              alt=""
            />
            <a href="/">Charcutería y quesos</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/frozen.svg"
              alt=""
            />
            <a href="/">Congelados</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/broth.svg"
              alt=""
            />
            <a href="/">Conservas, caldos y cremas</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/facial-treatment.svg"
              alt=""
            />
            <a href="/">Cuidado facial y corporal</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/parapharmacy.svg"
              alt=""
            />
            <a href="/">Fisioterapia y parafarmacia</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/food-and-restaurant.svg"
              alt=""
            />
            <a href="/">Fruta y verdura</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/milk.svg"
              alt=""
            />
            <a href="/">Huevos, leche y mantequilla</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/cleaning.svg"
              alt=""
            />
            <a href="/">Limpieza y hogar</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/lips.svg"
              alt=""
            />
            <a href="/">Maquillaje</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/holidays.svg"
              alt=""
            />
            <a href="/">Mariscos y pescado</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/avatar.svg"
              alt=""
            />
            <a href="/">Mascotas</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/cake-shop.svg"
              alt=""
            />
            <a href="/">Panadería y pastelería</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/piece.svg"
              alt=""
            />
            <a href="/">Pizzas y platos preparados</a>
          </li>

          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/yogurts.svg"
              alt=""
            />
            <a href="/">Postres y yogures</a>
          </li>
          <li>
            <img
              className="sidebar-svg"
              src="/assets/images/svg/vegetarian.svg"
              alt=""
            />
            <a href="/">Zumos</a>
          </li>
        </div>
      </aside>
      {/*<!-- end sidebar -->*/}
      <main class="main">
        <div className="content">
          <div className="gallery js-flickity">
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
            <div className="gallery-cell"></div>
          </div>
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/assets/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                <div className="product-description">
                  <p>
                    Some text about the jeans. Super slim and comfy lorem ipsum
                    lorem jeansum. Lorem jeamsun denim lorem jeansum.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/assets/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">60€</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                <div className="product-description">
                  <p>
                    Some text about the jeans. Super slim and comfy lorem ipsum
                    lorem jeansum. Lorem jeamsun denim lorem jeansum.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/assets/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">50</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                <div className="product-description">
                  <p>
                    Some text about the jeans. Super slim and comfy lorem ipsum
                    lorem jeansum. Lorem jeamsun denim lorem jeansum.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/assets/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                <div className="product-description">
                  <p>
                    Some text about the jeans. Super slim and comfy lorem ipsum
                    lorem jeansum. Lorem jeamsun denim lorem jeansum.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/assets/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                <div className="product-description">
                  <p>
                    Some text about the jeans. Super slim and comfy lorem ipsum
                    lorem jeansum. Lorem jeamsun denim lorem jeansum.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/assets/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                </div>
                <div className="product-brand">Nike</div>
                <div className="product-price">$60</div>
                <div className="product-rating">4.5 Stars (10 Reviews)</div>
                <div className="product-description">
                  <p>
                    Some text about the jeans. Super slim and comfy lorem ipsum
                    lorem jeansum. Lorem jeamsun denim lorem jeansum.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      {/*<!-- Footer -->*/}
      <footer class="footer">All right reserved.</footer>
      {/*<!-- end Footer -->*/}
    </div>
  );
}

export default App;
