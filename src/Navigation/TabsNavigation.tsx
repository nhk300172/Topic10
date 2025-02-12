import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps } from '@react-navigation/native';
import { RootStackScreenProps } from './RootNavigator';
import HomeScreen from '../Screens/HomeScreen';
import CartScreen from '../Screens/CartScreen';
import PaymentScreen from '../Screens/PaymentScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import { Entypo, AntDesign, Ionicons } from '@expo/vector-icons';

export type TabsStackParams = {
    HomeScreen: undefined;
    CartScreen: undefined;
    PaymentScreen: undefined;
    ProfileScreen: undefined;
}

const TabsStack = createBottomTabNavigator<TabsStackParams>()

export type TabsStackScreenProps<T extends keyof TabsStackParams> = 
    CompositeScreenProps<BottomTabScreenProps<TabsStackParams, T>, RootStackScreenProps<'TabsStack'>>;

const TabsNavigator = () => {

    return (
        <TabsStack.Navigator screenOptions={{ tabBarShowLabel: false }}>            
            <TabsStack.Screen 
                name="HomeScreen" component={HomeScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Entypo name="home" size={24} color="#00333a" />
                    ) : (
                        <AntDesign name="home" size={24} color="#333" />
                    )
                }}
            />

            <TabsStack.Screen 
                name="CartScreen" component={CartScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="cart" size={24} color="#00333a" />
                    ) : (
                        <Ionicons name="cart" size={24} color="#333" />
                    )
                }}
            />

            <TabsStack.Screen 
                name="PaymentScreen" component={PaymentScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="card" size={24} color="#00333a" />
                    ) : (
                        <Ionicons name="card" size={24} color="#333" />
                    )
                }}
            />

            <TabsStack.Screen 
                name="ProfileScreen" component={ProfileScreen} options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => focused ? (
                        <Ionicons name="person" size={24} color="#00333a" />
                    ) : (
                        <Ionicons name="person" size={24} color="#333" />
                    )
                }}
            />
        </TabsStack.Navigator>
    )
}

export default TabsNavigator