import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Mail, Meet, Settings } from "../screens/TabScreens";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const TabIcon = ({ name, size, color }) => (
  <MaterialCommunityIcons name={name} size={size} color={color} />
);

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName='Settings'
      tabBarOptions={{
        activeTintColor: "#fffff",
        inactiveTintColor: "#cfcfcf",
      }}
    >
      <Tab.Screen
        name='Mail'
        component={Mail}
        options={{
          tabBarIcon: (props) => TabIcon({ ...props, name: "email" }),
        }}
      />
      <Tab.Screen
        name='Meet'
        component={Meet}
        options={{
          tabBarIcon: (props) =>
            TabIcon({
              ...props,
              name: props.focused ? "video" : "twitter",
            }),
        }}
      />
      <Tab.Screen
        name='Settings'
        component={Settings}
        options={{
          tabBarIcon: (props) =>
            TabIcon({ ...props, name: "instagram" }),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
