import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import List from "../screens/List";
import Item from "../screens/Item";

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={Item} />
      <Stack.Screen
        name="List"
        component={List}
        options={{ headerTitle: "List Screen" }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigation;
