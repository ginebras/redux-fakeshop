import React from 'react';

export default function ProductComponent({ product }) {
  const { id, title, category, price, image, description, rating } = product;
  return (
    <div className="mt-5">
      <div class="ui card">
        <div class="image">
          <img src={image} alt={title} />
        </div>
        <div class="content">
          <a class="header">{title}</a>
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
