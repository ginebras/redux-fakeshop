import { actionsTypes } from '../contants/actions-types';

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
