import React from "react";
import "./FeaturedProducts.css";

import gymWeightImg from '../assets/torch.jpg';
import nikeShoesImg from '../assets/smartWatch.jpg';
import adidasShoesImg from '../assets/camera.jpg';

const products = [
  {
    title: "Gym Weight",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt in culpa qui officia deserunt.",
    price: "$240.00",
    rating: 3,
    reviews: 24,
    image: gymWeightImg,
  },
  {
    title: "Cloud Nike Shoes",
    desc: "Aenean gravida dignissim finibus. Nullam ipsum diam, posuere vitae pharetra sed, commodo ullamcorper.",
    price: "$480.00",
    rating: 3,
    reviews: 48,
    image: nikeShoesImg,
  },
  {
    title: "Summer Addides Shoes",
    desc: "Curabitur ac mi sit amet diam luctus porta. Phasellus pulvinar sagittis diam, et scelerisque ipsum lobortis nec.",
    price: "$360.00",
    rating: 5,
    reviews: 74,
    image: adidasShoesImg,
  },
];

const renderStars = (count) =>
  Array.from({ length: 5 }, (_, i) => (
    <span key={i}>{i < count ? "⭐" : "☆"}</span>
  ));

const FeaturedProducts = () => {
  return (
    <section className="featured-section">
      <div className="featured-header">
        <h2>Featured Product</h2>
        <p>
          Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          <br />
          Excepteur sint occaecat cupidatat non proident.
        </p>
      </div>

      <div className="product-grid">
        {products.map((product, idx) => (
          <div key={idx} className="product-card">
            <img src={product.image} alt={product.title} />
            <div className="product-info">
              <div className="product-stars">{renderStars(product.rating)}</div>
              <h3>{product.title}</h3>
              <p className="product-desc">{product.desc}</p>
              <div className="product-reviews">Reviews ({product.reviews})</div>
              <div className="product-price">{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
