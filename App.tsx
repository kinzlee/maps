import { StatusBar } from 'expo-status-bar';
import React, {useState, useMemo} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {UserContext} from './context/useContext';

export default function App() {
  const [value, setValue] = useState('this is not a drill')
  const providerValue = useMemo<string | any>(() => ({value, setValue}), [value, setValue] )
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <UserContext.Provider value={providerValue}>
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </UserContext.Provider>
    );
  }
}
