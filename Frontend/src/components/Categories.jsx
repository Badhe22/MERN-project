// Categories.jsx
import React from "react";
import { Link } from "react-router-dom";
import AdminLayout from "./layout/AdminLayout";

const Categories = ({ categories }) => {
  return (
    <Layout title={"All Categories"}>
      <div className="container" style={{ marginTop: "100px" }}>
        <div className="row container">
          {categories.map((category) => (
            <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={category}>
              <div className="card">
                <Link to={`/category/${category}`} className="btn cat-btn">
                  {category}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
