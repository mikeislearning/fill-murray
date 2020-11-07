import {
  LIST_PROPERTIES_SUCCESS,
  LIST_PROPERTIES_ERROR,
  LIST_PROPERTIES_LOADING,
} from '../actionTypes';

import { PropertiesAction } from '../types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

const properties = (state = initialState, action: PropertiesAction) => {
  switch (action.type) {
    case LIST_PROPERTIES_SUCCESS:
      return { ...state, data: action.data, loading: false };
    case LIST_PROPERTIES_ERROR:
      return { ...state, error: action.error, loading: false };
    case LIST_PROPERTIES_LOADING:
      return { ...state, loading: true };
    default:
      return { ...state };
  }
};

export default properties;
