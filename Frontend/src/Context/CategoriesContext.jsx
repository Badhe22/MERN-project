import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a new context
const CategoriesContext = createContext();

// Custom hook to use CategoriesContext
export const useCategoriesContext = () => useContext(CategoriesContext);

// Categories context provider component
export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from API or set default categories
    const fetchCategories = async () => {
      try {
        // Fetch categories from API
        const response = await fetch('your-api-endpoint/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Set default categories if fetching fails
        setCategories(['Category 1', 'Category 2', 'Category 3']);
      }
    };

    fetchCategories();
  }, []);

  return (
    // Provide categories state and setter function to children
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
