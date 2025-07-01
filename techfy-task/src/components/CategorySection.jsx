import React from 'react';
import './CategorySection.css';

import watchImg from '../assets/smartWatch.jpg';
import shoesImg from '../assets/shoes.jpg';
import glassesImg from '../assets/glasses.jpg';

const categories = [
  { name: 'Watches', image: watchImg },
  { name: 'Shoes', image: shoesImg },
  { name: 'Glasses', image: glassesImg },
];

const CategorySection = () => {
  return (
    <section className="category-section">
      <h2 className="title">Categories of The Month</h2>
      <p className="subtitle">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="category-grid">
        {categories.map((cat) => (
          <div className="category-card" key={cat.name}>
            <img src={cat.image} alt={cat.name} className="category-image" />
            <h3 className="category-name">{cat.name}</h3>
            <button className="shop-button">Go Shop</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
