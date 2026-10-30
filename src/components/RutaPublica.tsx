import { Outlet, Navigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";


// TODO [A]: si ya hay sesion y entra a /login, mandarlo a /dashboard
export function RutaPublica() {
  const autenticado = useAuthStore((s) => s.autenticado)
  const hidratado = useAuthStore((s) => s.)



  return <Outlet />;
}
