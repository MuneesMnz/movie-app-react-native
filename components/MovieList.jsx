import {
  View,
  Text,
  TouchableHighlight,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from "react-native";
import React from "react";
import { styles } from "../theme";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get("window");

export default function MovieList({ title, data }) {
  const MovieName = "Movie Name Lorem ipsum dolor sit amet.";
  const navigation = useNavigation();
  return (
    <View className="mb-8 space-y-4">
      <View className="mx-4 flex-row justify-between items-center">
        <Text className="text-white text-2xl ">{title}</Text>
        <TouchableHighlight>
          <Text style={styles.text} className="text-lg">
            See All
          </Text>
        </TouchableHighlight>
        {/* Movie List   */}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {data.map((item, ind) => (
          <TouchableWithoutFeedback
            key={ind}
            onPress={() => navigation.navigate("Movie", item)}
          >
            <View className="space-y-1 mr-4">
              <Image
                source={require("../assets/porsche-3.jpeg")}
                style={{ width: width * 0.33, height: height * 0.22 }}
                className="rounded-2xl"
              />
              <Text className="text-neutral-300 ml-1">
                {MovieName.length > 14
                  ? MovieName.slice(0, 14) + "..."
                  : MovieName}
              </Text>
            </View>
          </TouchableWithoutFeedback>
        ))}
      </ScrollView>
    </View>
  );
}
