import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Header({ navigation }) {
  return (
    <View style={{ paddingHorizontal: 20, marginTop: 50 }}>
     
      <Text
        style={{
          fontSize: 35,
          marginVertical: 10,
          textAlign: "center",
          fontWeight: "bold",
          letterSpacing: 3,
          color:"white",
          textTransform: "uppercase",
          fontWeight: "700",
        }}
      >
        Results
      </Text>
    </View>
  );
}
