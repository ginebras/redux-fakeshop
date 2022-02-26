import { actionsTypes } from '../contants/actions-types';

const initialState = {
  products: [],
  selectedProduct: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_PRODUCTS:
    case actionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case actionsTypes.FETCH_DETAILS:
    case actionsTypes.SELECT_PRODUCT:
      return {
        ...state,
        selectedProduct: action.payload,
      };

    default:
      return state;
  }
};
