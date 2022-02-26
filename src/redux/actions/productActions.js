import { actionsTypes } from '../contants/actions-types';
import fakeStoreAxios from '../../config/axios';

export const fetchProducts = () => {
  return async (dispatch) => {
    const response = await fakeStoreAxios
      .get('/products')
      .catch((error) => console.log(error));

    dispatch({ type: actionsTypes.FETCH_PRODUCTS, payload: response.data });
  };
};

export const fetchDetails = (productId) => {
  return async (dispatch) => {
    const response = await fakeStoreAxios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((error) => console.log(error));

    dispatch({ type: actionsTypes.FETCH_DETAILS, payload: response.data });
  };
};

export const setProducts = (products) => {
  return {
    type: actionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (product) => {
  return {
    type: actionsTypes.SELECT_PRODUCT,
    payload: product,
  };
};
