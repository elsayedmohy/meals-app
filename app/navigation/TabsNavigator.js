import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import Favourites from "../screens/Favourites";
import CategoriesNavigator from "./CategoriesNavigation";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Stack = createStackNavigator();
const FavouriteStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Favourites" component={Favourites} />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="categories"
      component={CategoriesNavigator}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <Ionicons
            name={focused ? "restaurant" : "restaurant-outline"}
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Tab.Screen
      name="favourite"
      component={FavouriteStack}
      options={{
        tabBarIcon: ({ size, color, focused }) => (
          <AntDesign
            name={focused ? "star" : "staro"}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Tab.Navigator>
);

export default TabNavigator;
