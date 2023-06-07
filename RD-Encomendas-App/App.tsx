import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import config from './tamagui.config'
import { TamaguiProvider, Theme } from 'tamagui'
import { Home } from './src/screens/Home';
import { AppRoutes } from './src/routes';
import { FormFreight } from './src/screens/FormFreight';
import { SafeAreaProvider } from 'react-native-safe-area-context';

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
      <StatusBar style="auto" backgroundColor='#0C134F' translucent={false} />
      <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
        <SafeAreaProvider>
          <NavigationContainer>
            {/* <Home /> */}
            <AppRoutes />
          </NavigationContainer>
        </SafeAreaProvider>
      </Theme>
    </TamaguiProvider>
  );
}
