/**
 * React Native Flib App
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Provider} from 'react-redux';
import {Box, NativeBaseProvider, Text} from 'native-base';

import store from './redux/store';
import ListItem from './components/ListItem';
// import HomeScreen from './screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Box
            flex={1}
            bg="cyan.400"
            alignItems="center"
            justifyContent="center"
            safeArea>
            <Text>Open up App.js to start working on your app!</Text>
            <ListItem />
          </Box>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
