import React from "react";
import { Link } from "react-router-dom";

const Categories = ({ categories }) => {
  return (
    <div className="container" style={{ marginTop: "100px" }}>
      <div className="row container">
        {categories.map((category) => (
          <div className="col-md-4 mt-5 mb-3 gx-3 gy-3" key={category._id}>
            <div className="card">
              <Link to={`/category/${category._id}`} className="btn cat-btn">
                {category.name}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
