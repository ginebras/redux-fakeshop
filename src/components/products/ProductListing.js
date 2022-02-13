import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts);

  const fetchProducts = async () => {
    let response = await axios.get('https://fakestoreapi.com/products');
    let res = await response.json();
    let data = await res.data;
    console.log(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container mt-5">
      <ProductComponent />
    </div>
  );
}
