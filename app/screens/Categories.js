import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { CATEGORIES } from "../data/dummy-data";
import colors from "../constants/colors";

function categories({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={CATEGORIES}
        renderItem={({ item }) => (
          <ImageBackground
            blurRadius={1}
            style={styles.image}
            source={{ uri: item.imageUrl }}
            resizeMode="cover"
          >
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CategoryMeals", {
                  name: item.title,
                  CategoryId: item.id,
                })
              }
            >
              <Text style={styles.text}>{item.title}</Text>
            </TouchableOpacity>
          </ImageBackground>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: "center",
    height: 85,
    borderRadius: 13,
    overflow: "hidden",
    marginTop: 12,
    marginHorizontal: 10,
    padding: 5,
    shadowColor: "#000000c0",
    shadowOffset: { width: -1, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },

  text: {
    fontFamily: "Nunito-Bold",
    fontSize: 25,
    marginVertical: 20,
    color: colors.white,
    shadowColor: "#000000c0",
    shadowOffset: { width: 2, height: 3 },
    shadowOpacity: 0.9,
    shadowRadius: 2,
    elevation: 1,
  },
});

export default categories;
