import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Select } from 'tamagui'
import { useFonts } from 'expo-font'
import { Paragraph, Spacer, TamaguiProvider, Theme, YStack } from 'tamagui'
import config from './tamagui.config'


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
          <View style={styles.container}>
            <Text style={styles.text}>Avoided</Text>
            <StatusBar style="auto" backgroundColor='#0C134F' />
          </View>
          <View style={styles.listWrap}>
            <Select defaultValue="">
              <Select.Trigger>
                <Select.Value placeholder="Search..." />
              </Select.Trigger>
              <Select.Content>
                <Select.ScrollUpButton />
                <Select.Viewport>
                  <Select.Group>
                    <Select.Label />
                    <Select.Item index={0} value='ops'>
                      <Select.ItemText />
                    </Select.Item>
                    <Select.Item index={1} value='ops2'>
                      <Select.ItemText />
                    </Select.Item>
                  </Select.Group>
                </Select.Viewport>
                <Select.ScrollDownButton />
              </Select.Content>
            </Select>
          </View>
        </NavigationContainer>
      </Theme>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D267D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  listWrap: {
    height: '60%',
    backgroundColor: '#fff',
  }
});
