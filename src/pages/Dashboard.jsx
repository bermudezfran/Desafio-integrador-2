import React, { useEffect, useState } from "react";
import '../sass/main.scss';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Productos } from "../components/Productos";

export const Dashboard = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
    useEffect(() => {
        // Aplica el tema en el cuerpo
        document.body.classList.toggle("dark-theme", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    return (
        <div>
            <Header onToggleTheme={toggleTheme} theme={theme} />
            <div className="background-store">
                <img
                    src="/public/images/fondo.jpg"
                    alt="fondo de presentacion de la store"
                />
            </div>
            <main>
                <h1 className="title">Grilla de autos que tenemos para vos</h1>
                <Productos />
            </main>
           <Footer />
        </div>
    );
};
