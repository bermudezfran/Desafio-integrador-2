import React from "react";
import '../sass/main.scss';
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Productos } from "../components/Productos";

export const Dashboard = () => {

    return (
        <div>
            <Header />
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
