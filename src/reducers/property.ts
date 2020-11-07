import {
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_ERROR,
  GET_PROPERTY_LOADING,
} from '../actionTypes';
import { PropertyAction } from '../types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const property = (state = initialState, action: PropertyAction) => {
  switch (action.type) {
    case GET_PROPERTY_LOADING:
      return { ...state, loading: true };
    case GET_PROPERTY_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case GET_PROPERTY_ERROR:
      return { ...state, error: action.error, loading: false };
    default:
      return { ...state };
  }
};

export default property;
