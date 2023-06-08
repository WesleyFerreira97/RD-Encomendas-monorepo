import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../screens/Home";
import { FormFreight } from "../screens/FormFreight";
const Stack = createNativeStackNavigator();

export function AppRoutes() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: '#fff'
                }
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
            />
            <Stack.Screen
                name="FormFreight"
                component={FormFreight}
            />
        </Stack.Navigator>
    )
}
