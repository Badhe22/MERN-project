import React, { useState, useEffect } from 'react';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        // Fetch categories from API endpoint
        const response = await fetch('admin/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = (e) => {
    e.preventDefault(); // Prevent form submission
    if (newCategory.trim() !== '') {
      if (editIndex === -1) {
        // Add new category
        setCategories([...categories, newCategory]);
      } else {
        // Update existing category
        const updatedCategories = [...categories];
        updatedCategories[editIndex] = newCategory;
        setCategories(updatedCategories);
        setEditIndex(-1);
      }
      setNewCategory('');
    }
  };

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories];
    updatedCategories.splice(index, 1);
    setCategories(updatedCategories);
  };

  const handleEditCategory = (index) => {
    setEditIndex(index);
    setNewCategory(categories[index]);
  };

  return (
    <div style={{ padding: '10px', textAlign: 'center', backgroundColor: 'indigo', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', color: '#fff', marginTop: '20px', marginLeft: '20px', marginRight: '20px' }}>
      <h2>Admin Categories</h2>
      <form onSubmit={handleAddCategory} style={{ marginBottom: '20px', backgroundColor: '#fff', padding: '10px', borderRadius: '5px' }}>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="Enter New Category"
          style={{ marginRight: '10px', width: '300px', borderRadius: '5px', padding: '8px', color:'black'}}
        />
        <button type="submit" style={{ backgroundColor: 'green', color: 'black', padding: '8px 16px', border: 'none', borderRadius: '5px' }}>{editIndex === -1 ? 'Add Category' : 'Update Category'}</button>
      </form>
      <ul style={{ listStyleType: 'none', padding: '0', textAlign: 'left', marginTop: '10px' }}>
        {categories.map((category, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
            {category}
            <button onClick={() => handleEditCategory(index)} style={{ backgroundColor: 'blue', marginLeft: '10px', borderRadius: '5px', padding: '8px 16px' }}>Edit</button>
            <button onClick={() => handleDeleteCategory(index)} style={{ backgroundColor: 'red', marginLeft: '10px', borderRadius: '5px', padding: '8px 16px' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
