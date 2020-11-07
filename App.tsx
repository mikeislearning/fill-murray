import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './src/navigation/AppContainer';
import store from './src/store';

interface AppProps {}

// <AppContainer />
export default class extends React.Component<AppProps> {
  render(): any {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
