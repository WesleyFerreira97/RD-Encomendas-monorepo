import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font'
import config from './tamagui.config'
import { TamaguiProvider, Theme } from 'tamagui'
import { Home } from './src/screens/Home';
import { AppRoutes } from './src/routes';
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
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" backgroundColor='#0C134F' translucent={false} />
          <Theme name={colorScheme === 'dark' ? 'dark' : 'light'}>
            <NavigationContainer>
              <AppRoutes />
            </NavigationContainer>
          </Theme>
        </SafeAreaView>
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}
