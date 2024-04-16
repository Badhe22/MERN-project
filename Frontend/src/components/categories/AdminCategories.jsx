import React, { useState, useEffect } from 'react';

const AdminCategories = () => {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('/admin/categories');
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleAddCategory = async (e) => {
    e.preventDefault(); // Prevent form submission
    if (newCategory.trim() !== '') {
      try {
        const response = await fetch('admin/categories', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newCategory }),
        });
        if (response.ok) {
          const data = await response.json();
          setCategories([...categories, data]); // Update categories state with the newly added category
          setNewCategory('');
        } else {
          console.error('Failed to add category:', response.status);
        }
      } catch (error) {
        console.error('Error adding category:', error);
      }
    }
  };

  const handleDeleteCategory = async (id) => {
    try {
      const response = await fetch(`admin/categories/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setCategories(categories.filter(category => category.id !== id)); // Filter out the deleted category from the state
      } else {
        console.error('Failed to delete category:', response.status);
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  const handleEditCategory = (index) => {
    setEditIndex(index);
    setNewCategory(categories[index].name);
  };

  const handleUpdateCategory = async () => {
    if (newCategory.trim() !== '') {
      try {
        const response = await fetch(`admin/categories/${categories[editIndex].id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name: newCategory }),
        });
        if (response.ok) {
          const updatedCategory = await response.json();
          const updatedCategories = [...categories];
          updatedCategories[editIndex] = updatedCategory;
          setCategories(updatedCategories); // Update categories state with the edited category
          setNewCategory('');
          setEditIndex(-1);
        } else {
          console.error('Failed to update category:', response.status);
        }
      } catch (error) {
        console.error('Error updating category:', error);
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2 style={{ marginBottom: '20px', color: 'indigo' }}>Admin Categories</h2>
      <form onSubmit={editIndex === -1 ? handleAddCategory : handleUpdateCategory} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder={editIndex === -1 ? 'Enter New Category' : 'Update Category'}
          style={{ marginRight: '10px', padding: '8px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <button type="submit" style={{ backgroundColor: 'green', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none' }}>{editIndex === -1 ? 'Add Category' : 'Update Category'}</button>
        {editIndex !== -1 && (
          <button type="button" onClick={() => { setEditIndex(-1); setNewCategory(''); }} style={{ backgroundColor: 'gray', color: 'white', padding: '8px 16px', borderRadius: '5px', marginLeft: '10px', border: 'none' }}>Cancel</button>
        )}
      </form>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {categories.map((category, index) => (
          <li key={category.id} style={{ marginBottom: '10px' }}>
            {category.name}
            <button onClick={() => handleEditCategory(index)} style={{ backgroundColor: 'blue', color: 'white', padding: '5px 10px', borderRadius: '5px', marginLeft: '10px', border: 'none' }}>Edit</button>
            <button onClick={() => handleDeleteCategory(category.id)} style={{ backgroundColor: 'red', color: 'white', padding: '5px 10px', borderRadius: '5px', marginLeft: '10px', border: 'none' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminCategories;
