import {create} from "zustand";
import Cookies from "js-cookie";
import api from "../services/api";

export const useAuthStore = create((set) => ({
  token: Cookies.get("token") || null,
  user: null,
  // Registrar para el user
  register: async (email, password) => {
    await api.post("/auth/register", { email, password });
  },
  // Login para el user
  login: async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    Cookies.set("token", data.token);
    set({ token: data.token, user: data.user });
  },
  // Cierre de sesion del user
  logout: () => {
    Cookies.remove("token");
    set({ token: null, user: null });
  },
}));
