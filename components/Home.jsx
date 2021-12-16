import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

function Home({ navigation }) {
  const [food, setFood] = useState("");

  const handleSearch = () => {
    if (food.length > 0) {
      navigation.navigate("Results", {
        food: food,
      });
      setFood("");
    } else {
      Alert.alert("Search input empty!");
    }
  };

  return (
    <View
      style={{ flex: 1, backgroundColor: "#EEE9D0", justifyContent: "center" }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/food-3.png")}
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textHeading}>Kitchen Stories</Text>
        <Text style={styles.textSubheading}>
          Search Your Recipes For Your Favorite Food
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          value={food}
          placeholder="Enter The Recipe Name"
          style={styles.input}
          onChangeText={(text) => {
            setFood(text);
          }}
        ></TextInput>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btnTextContainer}
          onPress={handleSearch}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    alignItems: "center",
  },
  image: {
    height: 150,
    width: 150,
  },
  textContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  textHeading: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#515A5A",
  },
  textSubheading: {
    marginTop: 5,
    color: "#515A5A",
  },
  inputContainer: {
    marginTop: 50,
    alignItems: "center",
   
  },
  input: {
    maxWidth: 500,
    width: "80%",
    borderColor: "#515A5A",
    borderWidth: 3,
    borderRadius: 30,
    height: 50,
    align:"center",
    paddingLeft: 20,
    color: "#515A5A",
    justifyContent: "center",

  },
  btnContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  btnTextContainer: {
    maxWidth: 300,
    borderRadius: 40,
    backgroundColor: "blue",
    width: "80%",
    height: 50,
    justifyContent: "center",
    textAlign: "center",

  },
  btnText: {
    textAlign: "center",
    color: "white",
    fontSize: 22,
  },
});

export default Home;
