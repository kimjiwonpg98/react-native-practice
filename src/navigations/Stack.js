import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";
import { Platform } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        cardStyle: { backgroundColor: "#DAD9FF" },
        headerStyle: {
          height: 90,
          backgroundColor: "#C8C7ED",
          borderBottomWidth: 4,
          borderBottomColor: "#ECEBFF",
        },
        headerTitleStyle: { color: "#ffffff", fontSize: 24 },
        headerTitleAlign: "center",
        headerTitle: ({ style }) => (
          <MaterialCommunityIcons name='react' style={style} />
        ),
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen
        name='List'
        component={List}
        options={{
          headerTitle: "List Screen",
          headerBackTitle: "Prev",
          headerBackTitleVisible: true,
          headerTitleStyle: { fontSize: 24 },
          headerTintColor: "#e74c3c",
          headerBackImage: ({ tintColor }) => {
            const style = {
              marginRight: 5,
              marginLeft: Platform.OS === "ios" ? 11 : 0,
            };

            return (
              <MaterialCommunityIcons
                name='keyboard-backspace'
                size={30}
                color={tintColor}
                style={style}
              />
            );
          },
        }}
      />
      <Stack.Screen name='Detail' component={Item} />
    </Stack.Navigator>
  );
};

export default StackNavigation;
