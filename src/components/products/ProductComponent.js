import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductComponent({ product }) {
  const { id, title, category, price, image, description, rating } = product;
  return (
    <div className="mt-5">
      <div class="ui card">
        <div class="image">
          <img src={image} alt={title} />
        </div>
        <div class="content">
          <Link class="header" to={`/product/${id}`}>
            {title}
          </Link>
          <div class="meta">
            <span class="date">{category}</span>
          </div>
          <div class="description">{description}</div>
        </div>
        <div class="extra content">
          <a>
            <i class="star icon"></i>
            22 Friends
          </a>
        </div>
      </div>
    </div>
  );
}
