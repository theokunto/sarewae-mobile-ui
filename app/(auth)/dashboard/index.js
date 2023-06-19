import { View, Text } from "react-native";
import { useAuth } from "../../context/auth";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
function HomeScreen(params) {
    const { signOut } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text onPress={() => signOut()}>Sign Out</Text>
        </View>
    )
}
function WishList(params) {
    const { signOut } = useAuth();
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Whistlist</Text>
        </View>
    )
}

export default function Dashboard() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name="home" component={HomeScreen} />
            <Tab.Screen name="whistlist" component={WishList} />
        </Tab.Navigator>
    )
}