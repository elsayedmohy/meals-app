import React from "react";
import { View, FlatList, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { useSelector } from "react-redux";
import { Entypo } from "@expo/vector-icons";
import colors from "../constants/colors"

function Favourites({ navigation }) {
  const favouriteMeals = useSelector((state) => state.meals.favourites);
   return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={favouriteMeals}
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

export default Favourites;
