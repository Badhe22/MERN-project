import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy"; 
import Blog from "./components/Categories";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import AdminLayout from "./components/layout/AdminLayout";
import AdminCategories from "./components/categories/AdminCategories";
import AdminOrders from "./components/orders/AdminOrders";
import AdminProducts from "./components/products/AdminProduct";
import Categories from "./components/Categories";
import { SearchProvider } from './Context/SearchContext'; // Import the SearchProvider

import './index.css';

const App = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('your-api-endpoint/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <BrowserRouter>
      <SearchProvider> {/* Wrap your Routes with the SearchProvider */}
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home categories={categories} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/admin/*" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
            <Route path="/admin/categories" element={<AdminLayout><AdminCategories categories={categories} /></AdminLayout>} />
            <Route path="/admin/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
            <Route path="/admin/orders" element={<AdminLayout><AdminOrders /></AdminLayout>} />
          </Routes>
          <Footer />
        </div>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
