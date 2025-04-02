import React from "react";
import { Link } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div>
            <header className="main-header">
                <input type="checkbox" id="menu" className="menu" />
                <button className="theme-toggle" aria-label="Cambiar tema">⚫</button>
                <nav className="nav-bar">
                    <div className="logo">
                        <img 
                            src="/public/images/1000_F_483965542_8gmfwc31msG25ULS5OSx7vMzd23pOMth.jpg" 
                            alt="logo de la tienda" 
                        />
                    </div>
                    <ul className="nav-bar__nav-list">
                        <li>
                            <Link to="/">Inicio</Link>
                        </li>
                        <li>
                            <Link to="/nosotros">Nosotros</Link>
                        </li>
                        <li>
                            <Link to="/contacto">Contacto</Link>
                        </li>
                    </ul>
                    <div className="cart">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            height="40px" 
                            viewBox="0 -960 960 960" 
                            width="24px" 
                            fill="black"
                        >
                            <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                        </svg>
                    </div>
                </nav>
            </header>
            <div className="background-store">
                <img 
                    src="/public/images/fondo.jpg" 
                    alt="fondo de presentacion de la store" 
                />
            </div>
            <main>
                <h1 className="title">Grilla de autos que tenemos para vos</h1>
                <section className="card-container" id="cards-container">
                    {/* Aquí puedes añadir tus elementos dinámicos para las tarjetas */}
                </section>
            </main>
            <footer className="footer">
                <p className="footer__text">
                    © 2025 Muscle Car Store. Todos los derechos reservados.
                </p>
            </footer>
        </div>
    );
};
