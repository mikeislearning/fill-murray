import {
  GET_PROPERTY_SUCCESS,
  GET_PROPERTY_ERROR,
  GET_PROPERTY_LOADING,
  LIST_PROPERTIES_SUCCESS,
  LIST_PROPERTIES_ERROR,
  LIST_PROPERTIES_LOADING,
} from '../actionTypes';
import { properties } from '../samples/property';
import { Property } from '../types';

const getPropertySuccess = (data: Property) => ({
  type: GET_PROPERTY_SUCCESS,
  data,
});

const getPropertyError = (error: Error) => ({
  type: GET_PROPERTY_ERROR,
  error,
});
const getPropertyLoading = {
  type: GET_PROPERTY_LOADING,
};

// Param 'slug' is a string that contains a number representing the id of the property
// this will allow for future flexibility if we want to get more creative with slugs
export const getProperty = (slug: string) => (dispatch: any) => {
  try {
    dispatch(getPropertyLoading);
    const property = properties[parseInt(slug, 10)];

    dispatch(getPropertySuccess(property));
  } catch (err) {
    dispatch(getPropertyError(err.response));
  }
};

const listPropertiesSuccess = (data: Property[]) => ({
  type: LIST_PROPERTIES_SUCCESS,
  data,
});

const listPropertiesError = (error: Error) => ({
  type: LIST_PROPERTIES_ERROR,
  error,
});
const listPropertiesLoading = {
  type: LIST_PROPERTIES_LOADING,
};

export const listProperties = () => (dispatch: any) => {
  try {
    dispatch(listPropertiesLoading);
    dispatch(listPropertiesSuccess(properties));
  } catch (err) {
    dispatch(listPropertiesError(err.response));
  }
};
