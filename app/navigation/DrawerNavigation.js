import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";

import Favourites from "../screens/Favourites";
import Filter from "../screens/Filter";
import TabNavigator from "./TabsNavigator";

const Stack = createStackNavigator();
const FavouriteStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Favourites"
      component={Favourites}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <Ionicons
              style={{ marginLeft: 10 }}
              name="ios-menu"
              size={24}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        };
      }}
    />
  </Stack.Navigator>
);
const FilterStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Filter"
      component={Filter}
      options={({ navigation }) => {
        return {
          headerLeft: () => (
            <Ionicons
              style={{ marginLeft: 10 }}
              name="ios-menu"
              size={24}
              color="black"
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        };
      }}
    />
  </Stack.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator drawerType="slide">
    <Drawer.Screen name="home" component={TabNavigator} />
    <Drawer.Screen name="favourites" component={FavouriteStack} />
    <Drawer.Screen name="filter" component={FilterStack} />
  </Drawer.Navigator>
);

export default DrawerNavigator;
