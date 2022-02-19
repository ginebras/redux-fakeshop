import React from 'react';
import './style.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import ProductListing from './components/products/ProductListing';
import ProductDetails from './components/products/ProductDetails';

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="mt-5">
        <Routes>
          <Route exact path="/" element={<ProductListing />} />
          <Route
            exact
            path="/product/:productId"
            element={<ProductDetails />}
          />
          <Route>404 Not found</Route>
        </Routes>
      </div>
    </div>
  );
}
