import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";

import colors from "../constants/colors";

function CategoryMeals({ navigation, route }) {
  const { CategoryId } = route.params;
  const availableMeals = useSelector((state) => state.meals.meals);
  const Meals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(CategoryId) >= 0
  );

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={Meals}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("MealDetails", {
                name: item.title,
                MealId: item.id,
              })
            }
          >
            <View style={styles.listContainer}>
              <ImageBackground
                blurRadius={2}
                resizeMode="cover"
                style={styles.image}
                source={{ uri: item.imageUrl }}
              >
                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </ImageBackground>
            </View>
            {/* <View style={styles.infoContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <View style={styles.subInfo}>
                <Text style={styles.subText}>{item.complexity}</Text>
                <View style={styles.durationContainer}>
                  <Text style={styles.subText}>{item.duration} Mins</Text>
                </View>
              </View>
            </View> */}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 12,
    overflow: "hidden",
    borderRadius: 15,
    marginHorizontal: 10,
    shadowColor: "#000000c0",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  image: {
    minHeight: 115,
    maxHeight: 115,
    justifyContent: "flex-end",
  },
  titleContainer: {
    backgroundColor: "#000000c0",
  },
  title: {
    fontFamily: "Nunito-Regular",
    fontSize: 15,
    color: colors.white,
    padding: 5,
  },
});

export default CategoryMeals;
