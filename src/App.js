import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import AdminDashboard from "./pages/AdminDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />

        <Route
          path="/admin"
          element={
            <ProtectedRoute isAuth={isAuth}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Redirect any unknown route to login */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
