import React, {useEffect} from 'react'
import productos from '../db/productos'

export const Productos = () => {

    useEffect(() => {
        const contenedor = document.getElementById("cards-container");
        let html = "";

        productos.forEach((prod) => {
            html += `
                <div class="card">
                    <article class="card__article">
                        <div class="card__image-container">
                            <img class="card__image" src="${prod.foto}" alt="${prod.nombre}" />
                        </div>
                        <div class="card__content">
                            <h2 class="card__heading">${prod.nombre}</h2>
                            <div class="card__description">
                                <p><b>${prod.precio}</b></p>
                                <p>${prod.descripcion}</p>
                            </div>
                            <a class="card__boton" href="#">COMPRAR</a>
                        </div>
                    </article>
                </div>`;
        });
        if (contenedor) {
            contenedor.innerHTML = html;
        }

        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            if (localStorage.getItem('theme') === 'dark') {
                document.body.classList.add('dark-theme');
                themeToggle.textContent = '⚪';
            }

            themeToggle.addEventListener('click', () => {
                document.body.classList.toggle('dark-theme');
                if (document.body.classList.contains('dark-theme')) {
                    themeToggle.textContent = '⚪';
                    localStorage.setItem('theme', 'dark');
                } else {
                    themeToggle.textContent = '⚫';
                    localStorage.setItem('theme', 'light');
                }
            });
        }
    }, []);

  return (
    <section className="card-container" id="cards-container">
    </section>
  )
}
