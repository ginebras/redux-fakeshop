import { actionsTypes } from '../contants/actions-types';

const initialState = {
  products: [
    {
      id: 1,
      name: 'dishes',
      category: 'programming',
    },
  ],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsTypes.SET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
