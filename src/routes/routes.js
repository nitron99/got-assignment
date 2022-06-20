import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./protectedRoutes";
import PublicRoutes from "./publicRoutes";

// Page Imports
import AuthPage from "../views/AuthPage/AuthPage";
import HomePage from "../views/HomePage/HomePage";
import CartPage from "../views/CartPage/CartPage";
import CategoryPage from "../views/CategoryPage/CategoryPage";
import SearchPage from "../views/SearchPage/SearchPage";
import AccountPage from "../views/AccountPage/AccountPage";
import AboutPage from "../views/AboutPage/AboutPage";

const MainRoutes = () => (
  <Router>
    <Routes>
      {/* Public Routes --- Accessible without Authentication */}
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/auth" element={<AuthPage />} />
      </Route>

      {/* Protected Routes --- Authentication Required */}
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />}/>
        <Route path="/cart" element={<CartPage />}/>
        <Route path="/category" element={<CategoryPage />}/>
        <Route path="/search" element={<SearchPage />}/>
        <Route path="/account" element={<AccountPage />}/>
        <Route path="/about" element={<AboutPage />}/>
      </Route>
    </Routes>
  </Router>
)

export default MainRoutes;