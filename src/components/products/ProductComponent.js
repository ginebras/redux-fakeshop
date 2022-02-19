import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductComponent({ product }) {
  const { id, title, category, price, image, description, rating } = product;
  return (
    <div className="mt-5">
      <div className="ui card">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <Link className="header" to={`/product/${id}`}>
            {title}
          </Link>
          <div className="meta">
            <span className="date">{category}</span>
          </div>
          <div className="description">{description}</div>
        </div>
        <div className="extra content">
          <a>
            <i className="star icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    </div>
  );
}
