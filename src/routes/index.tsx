import React from 'react';
import { enableScreens } from 'react-native-screens';
import { createStackNavigator, HeaderTitle, StackNavigationOptions, StackScreenProps } from '@react-navigation/stack';
import Home from '../pages/Home';
import Details from '../pages/Details';

const Routes: React.FC = () => {
    enableScreens();
    const Stack = createStackNavigator();
    const screenOptions: StackNavigationOptions = {
        gestureEnabled: true,
        gestureDirection: "horizontal",
        headerTitleAlign: "center",
        headerTitle: "Free Movie",
        headerStyle: { backgroundColor: "#4169E1" },
        headerTintColor: "#ddd",
        headerTitleStyle: { fontWeight: 'bold',
        fontSize: 20,
        flex: 1,
        }


    }
    const routes = [
        { name: 'Home', component: Home },
    ];
    return <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen key={`Home`} name={`Home`} component={Home} />
        <Stack.Screen key={`Details`} name={`Details`} options={{ headerTitle: "Detalhes" }} component={Details} />

    </Stack.Navigator>;

}

export default Routes;