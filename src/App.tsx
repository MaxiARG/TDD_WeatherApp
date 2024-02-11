import '../global.css'
import React from 'react';
import AppNavigator from './screens/AppNavigator';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {

  return (
    <Provider store={{} as any}>
      <AppNavigator />
    </Provider>
  );
}

export default App;