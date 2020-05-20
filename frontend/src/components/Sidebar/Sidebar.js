import React from "react";

function Sidebar() {
  const closedMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
    return (
      <aside className="sidebar">
        <h3 className="sidebar-title">Categorías</h3>
        <button className="sidebar-close-button" onClick={closedMenu}>
          x
        </button>
        <div className="sidebar-link">
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/oil.svg"
                alt=""
              />
              Aceite, vinagre y sal
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/sugar.svg"
                alt=""
              />
              Azúcar, caramelos y chocolates
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/toy.svg"
                alt=""
              />
              Bebe
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/alcohol.svg"
                alt=""
              />
              Bodega
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/cacao.svg"
                alt=""
              />
              Cacao, café e infusiones
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/meat.svg"
                alt=""
              />
              Carne
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/cheese.svg"
                alt=""
              />
              Charcutería y quesos
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/frozen.svg"
                alt=""
              />
              Congelados
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/broth.svg"
                alt=""
              />
              Conservas, caldos y cremas
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/facial-treatment.svg"
                alt=""
              />
              Cuidado facial y corporal
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/parapharmacy.svg"
                alt=""
              />
              Fisioterapia y parafarmacia
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/food-and-restaurant.svg"
                alt=""
              />
              Fruta y verdura
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/milk.svg"
                alt=""
              />
              Huevos, leche y mantequilla
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/cleaning.svg"
                alt=""
              />
              Limpieza y hogar
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/lips.svg"
                alt=""
              />
              Maquillaje
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/holidays.svg"
                alt=""
              />
              Mariscos y pescado
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/avatar.svg"
                alt=""
              />
              Mascotas
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/cake-shop.svg"
                alt=""
              />
              Panadería y pastelería
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/piece.svg"
                alt=""
              />
              Pizzas y platos preparados
            </a>
          </li>

          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/yogurts.svg"
                alt=""
              />
              Postres y yogures
            </a>
          </li>
          <li>
            <a href="/">
              <img
                className="sidebar-svg"
                src="/assets/images/svg/vegetarian.svg"
                alt=""
              />
              Zumos
            </a>
          </li>
        </div>
      </aside>
    );
}

export default Sidebar;
