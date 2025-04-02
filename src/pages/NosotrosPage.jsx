import React, { useEffect } from 'react'
import { Header } from '../components/Header'
import '../sass/main.scss';

export const NosotrosPage = () => {
  useEffect(() => {
      const themeToggle = document.querySelector('.theme-toggle');
      if (themeToggle) {
        
        if (localStorage.getItem('theme') === 'dark') {
          document.body.classList.add('dark-theme'); // Corregido: classList en lugar de classNameList
          themeToggle.textContent = '⚪';
        }
  
        themeToggle.addEventListener('click', () => {
          document.body.classList.toggle('dark-theme'); // Corregido: classList en lugar de classNameList
  
          if (document.body.classList.contains('dark-theme')) {
            themeToggle.textContent = '⚪';
            localStorage.setItem('theme', 'dark');
          } else {
            themeToggle.textContent = '⚫';
            localStorage.setItem('theme', 'light');
          }
        });
      }
  
      
      return () => {
        if (themeToggle) {
          themeToggle.removeEventListener('click', () => {}); // Elimina el listener
        }
      };
    }, []);
  return (
    <>
    <Header />
    <main className="about-main">
        <section className="about-section">
          <div className="about-section__container">
            <h2 className="about-section__title">¿Quiénes somos?</h2>
            <p className="about-section__text">
              Somos <strong>Muscle Car Store</strong>, una tienda dedicada a la venta de 
              <em>muscle cars</em> clásicos y modernos. Nuestro objetivo es ofrecer 
              a los amantes de los automóviles la oportunidad de experimentar 
              la potencia, el estilo y la historia de estos legendarios vehículos.
            </p>
            <p className="about-section__text">
              Contamos con un equipo de apasionados y expertos en el mundo de los 
              “muscle cars”, dispuestos a asesorarte en cada paso para que 
              encuentres el auto de tus sueños.
            </p>
          </div>
        </section>
      </main>
    </>
  )
}
