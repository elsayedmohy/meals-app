import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { mealsActions } from "../store/mealsSlice";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetails";

const Stack = createStackNavigator();

const CategoriesNavigator = () => {
  const dispatch = useDispatch();
  const handleToggle = () => {};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
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
      <Stack.Screen
        options={({ route }) => ({ headerTitle: route.params.name })}
        name="CategoryMeals"
        component={CategoryMeals}
      />
      <Stack.Screen
        options={({ route }) => {
          return {
            headerTitle: route.params.name,
          };
        }}
        name="MealDetails"
        component={MealDetails}
      />
    </Stack.Navigator>
  );
};

export default CategoriesNavigator;
