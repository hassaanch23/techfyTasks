import React from 'react';
import Header from './Header';
import Home from './Home';
import CategorySection from './CategorySection';
import FeaturedProducts from './FeaturedProducts';
import Footer from './Footer';

const SinglePage = () => {
  return (
    <>
      <Home />
      <CategorySection />
      <FeaturedProducts />
      <Footer />
    </>
  );
};

export default SinglePage;
