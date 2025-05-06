import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../stores/useAuthStore";
import { Header } from "../components/Header";

export default function AuthPage() {
  const navigate = useNavigate();
  const { login, register } = useAuthStore();
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const onChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegister) {
        await register(form.email, form.password);
      }
      await login(form.email, form.password);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.message || "Error en la operación");
    }
  };

  return (
    <>
      <Header />
      <div className="container-auth">
        <form onSubmit={handleSubmit} className="login-form">
          <h2>{isRegister ? "Regístrate" : "Iniciar sesión"}</h2>
          {error && <p className="error">{error}</p>}

          {isRegister && (
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Nombre"
              value={form.name}
              onChange={onChange}
              required
            />
          )}

          <input
            className="input"
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={onChange}
            required
          />
          <input
            className="input"
            name="password"
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={onChange}
            required
          />

          <button type="submit" className="button-submit">
            {isRegister ? "Registrar" : "Entrar"}
          </button>

          <p>
            {isRegister
              ? "¿Ya tienes cuenta?"
              : "¿No tienes cuenta?"}{" "}
            <span
              className="register"
              onClick={() => {
                setError("");
                setIsRegister(!isRegister);
              }}
            >
              {isRegister ? "Inicia sesión" : "Regístrate"}
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
