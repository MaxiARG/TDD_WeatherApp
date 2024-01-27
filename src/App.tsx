import '../global.css'
import React from 'react';
import AppNavigator from './screens/AppNavigator';

function App(): React.JSX.Element {

  return (
      <AppNavigator />
  );
}

export default App;


// import './global.css'
// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import HomeScreen from "./screens/HomeScreen";

// function App(): React.JSX.Element {

//   return (
//     <SafeAreaView 
//     testID='rootApp' 
//     className="flex-1"
//     >
//       <HomeScreen />
//     </SafeAreaView>
//   );
// }

// export default App;

