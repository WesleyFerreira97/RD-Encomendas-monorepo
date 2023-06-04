import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import config from './tamagui.config'
import { TamaguiProvider, Theme } from 'tamagui'
import { Home } from './src/screens/Home';

export default function App() {
  const colorScheme = useColorScheme()

  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })

  if (!loaded) {
    return null
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <NavigationContainer>
          <StatusBar style="auto" backgroundColor='#0C134F' />
          <Home />
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}
