import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAllowed, children }) {
  return isAllowed ? children : <Navigate to="/auth" replace />;
}
