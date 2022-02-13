import { actionsTypes } from '../contants/actions-types';

export const setProducts = (products) => {
  return {
    type: actionsTypes.SET_PRODUCTS,
    payload: products,
  };
};

export const selectedProduct = (product) => {
  return {
    type: actionsTypes.SELECTED_PRODUCT,
    payload: product,
  };
};
