import React from "react";
import { Text, Image, StyleSheet, View, ScrollView } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { mealsActions } from "../store/mealsSlice";

import colors from "../constants/colors";

function MealDetails({ route }) {
  const { MealId } = route.params;
  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => meal.id === MealId);
  const dispatch = useDispatch();
  const toggleFavourite = () => {
    dispatch(mealsActions.toggleFavourite(MealId))
    //console.log(MealId);
  };
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.subInfo}>
          <Text style={styles.subText}>{selectedMeal.complexity}</Text>
          <View style={styles.durationContainer}>
            <Entypo
              style={{ marginRight: 5 }}
              name="stopwatch"
              size={20}
              color="black"
            />
            <Text style={styles.subText}>{selectedMeal.duration} Mins</Text>
          </View>
          <Entypo
            style={{ marginRight: 5 }}
            name="star"
            size={20}
            color="black"
            onPress={toggleFavourite}
          />
        </View>
      </View>
      <View style={{ padding: 25 }}>
        <Text style={styles.primaryText}>Ingredients</Text>
        {selectedMeal.ingredients.map((ingredient) => (
          <View key={ingredient} style={styles.textContainer}>
            <Text style={styles.subText}>{ingredient}</Text>
          </View>
        ))}
      </View>
      <View style={{ padding: 25 }}>
        <Text style={styles.primaryText}>Steps</Text>
        {selectedMeal.steps.map((step) => (
          <View key={step} style={styles.textContainer}>
            <Text style={styles.subText}>{step}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 250,
  },
  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 28,
    color: colors.texts,
    padding: 20,
    marginVertical: 10,
  },
  subInfo: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: colors.white,
    width: 350,
    height: 60,
    borderRadius: 15,
  },
  durationContainer: {
    flexDirection: "row",
  },
  subText: {
    fontFamily: "Nunito-Regular",
    color: colors.texts,
    alignItems: "center",
  },
  primaryText: {
    fontFamily: "Nunito-Regular",
    fontSize: 22,
    color: colors.texts,
    marginBottom: 25,
  },
  textContainer: {
    backgroundColor: colors.white,
    marginVertical: 8,
    minHeight: 40,
    justifyContent: "center",
    padding: 10,
    borderRadius: 12,
    overflow: "hidden",
  },
});
export default MealDetails;
