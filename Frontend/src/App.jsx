
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from "./pages/ShopCategory";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy"; 
//import Blog from "./components/Categories";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import AdminDashboard from "./components/AdminDashboard";
import AdminLayout from "./components/layout/AdminLayout";
import AdminCategories from "./components/categories/AdminCategories";
import AdminOrders from "./components/orders/AdminOrders";
import AdminProducts from "./components/products/AdminProduct";
//import Categories from "./components/Categories";
import { SearchProvider } from './Context/SearchContext'; // Import the SearchProvider
import men_banner from './components/Assets/banner_mens.png';
import women_banner from './components/Assets/banner_women.png';
import kid_banner from './components/Assets/banner_kids.png';

import ShopCategories from "./pages/ShopCategory";


import './index.css';

const App = () => {
  
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = () => {
    // Simulated categories, replace with actual fetch logic
    const categoriesData = [
      { id: 1, name: "Men" },
      { id: 2, name: "Women" },
      { id: 3, name: "Kids" }
    ];
    setCategories(categoriesData);
  };
  

  return (
    <BrowserRouter>
      <SearchProvider> {/* Wrap your Routes with the SearchProvider */}
        <div className="app">
          <Navbar   />
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/mens" element={<ShopCategory  banner={men_banner} category="men"/>}/>
            <Route path="/womens" element={<ShopCategory   banner={women_banner} category="women"/>}/>
            <Route path="/kids" element={<ShopCategory  banner={kid_banner} category="kid"/>}/>
            <Route path="/product" element={<Product/>}>
            <Route path=':productId' element= {<Product/>}/>

             </Route>
             <Route path="/cart" element={<Cart/>}/>
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/policy" element={<Policy />} />
            <Route path="/admin/*" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
           {/* <Route path="/admin/categories" element={<AdminLayout><AdminCategories categories={categories} /></AdminLayout>} />
            <Route path="/admin/products" element={<AdminLayout><AdminProducts /></AdminLayout>} />
  <Route path="/admin/orders" element={<AdminLayout><AdminOrders /></AdminLayout>} />*/}
          </Routes>
          <Footer />
        </div>
      </SearchProvider>
    </BrowserRouter>
  );
};

export default App;
