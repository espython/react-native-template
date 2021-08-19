/**
 * React Native Flib App
 */

import React from 'react';
import {useColorScheme} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {Flex, NativeBaseProvider} from 'native-base';

import store from './redux/store';
import ForYouTbaNav from './navigations/ForYouTbaNav';
// import HomeScreen from './screens/HomeScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <SafeAreaProvider>
          <Flex flex={1} safeArea>
            <NavigationContainer>
              <ForYouTbaNav />
            </NavigationContainer>
          </Flex>
        </SafeAreaProvider>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
