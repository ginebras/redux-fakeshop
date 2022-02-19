import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { selectedProduct } from '../../redux/actions/productActions';

export default function ProductDetails() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    getProduct();
  }, []);

  const getProduct = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));
    dispatch(selectedProduct(response.data));
  };

  return (
    <div style={{ marginTop: '5rem' }}>
      <h4>hola</h4>
    </div>
  );
}
