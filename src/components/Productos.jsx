import React, {useEffect} from 'react'
import { Producto } from './Producto';

export const Productos = () => {

    useEffect(() => {
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
    <Producto />
  )
}
