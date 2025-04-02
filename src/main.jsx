import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import IndexRoute from "./routes/Route.jsx";
import { CarritoProvider } from "./context/CartStore.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarritoProvider>
      <IndexRoute>
        <App />
      </IndexRoute>
    </CarritoProvider>
  </StrictMode>
);
