import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";

// importação das telas
import ChatPage from "./src/pages/chatPage/index";
import ForumPage from "./src/pages/ForumPage/index";
import ProfilePage from "./src/pages/ProfilePage/index";
import SettingsPage from './src/pages/settingsPage/index'

const Tab = createBottomTabNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarInactiveBackgroundColor: "#E4CEF2",
          tabBarActiveBackgroundColor: "#9E68CA",
          tabBarActiveTintColor: "#FFF",
          tabBarInactiveTintColor: "#7942B9",
          tabBarShowLabel: false,
        }}
      >
        <Tab.Screen
          name="Home"
          component={ForumPage}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="home" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfilePage}
          options={{
            tabBarIcon: ({ size, color }) => (
              <FontAwesome name="user" size={size} color={color} />
            ),
          }}
        />
         <Tab.Screen
          name="Chat"
          component={ChatPage}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="chat" size={size} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsPage}
          options={{
            tabBarIcon: ({ size, color }) => (
              <MaterialIcons name="settings" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}