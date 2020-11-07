import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import environment from '../environment';

let store: any = null;

const configureStore = (rootReducer: any) => {
  const composer = environment.ENV === 'local' ? composeWithDevTools : compose;

  store = createStore(rootReducer, composer(applyMiddleware(thunk)));

  return { store };
};

const getStore = () => store;

export { configureStore, getStore };
