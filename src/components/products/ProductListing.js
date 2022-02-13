import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductComponent from './ProductComponent';
import axios from 'axios';
import { setProducts } from '../../redux/actions/productActions';

export default function ProductListing() {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    let response = await axios.get('https://fakestoreapi.com/products');
    let data = await response.data;
    dispatch(setProducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="ui grid container mt-5">
      {products ? (
        products.map((product, index) => (
          <ProductComponent product={product} key={product.id} />
        ))
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
