import { StatusBar } from 'expo-status-bar';
import React, {useReducer} from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import {CountStateContext, CountDispatchContext, countReducer}from './screens/TabOneScreen'

export default function App() {
    const [state, dispatch] = useReducer(countReducer, {count: 0});
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <CountStateContext.Provider value={state}>
        <CountDispatchContext.Provider value={dispatch} >
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
      </CountDispatchContext.Provider>
      </CountStateContext.Provider>
    );
  }
}
