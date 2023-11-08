import {
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from "react-native";
import React from "react";
import Carousel from "react-native-snap-carousel";
import { useNavigation } from "@react-navigation/native";

let { width, height } = Dimensions.get("window");

export default function TrentingMovies({ data }) {

  const navigation = useNavigation();

  const handleClick = (item) => {
    navigation.navigate("Movie",item)
  };
  return (
    <View className="mb-8">
      <Text className="text-white text-xl mx-4 my-5">Trenting</Text>

      <Carousel
        data={data}
        renderItem={({ item }) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={2} //value is index number
        sliderWidth={width} //total slide width
        itemWidth={width * 0.65} //each itemm distance between  highlite slider photo
        inactiveSlideOpacity={0.5} //non actrativer image opacity
        slideStyle={{ display: "flex", alignItems: "center" }} //style of the slider
      />
    </View>
  );
}

const MovieCard = ({ item, handleClick }) => {
  return (
    <TouchableWithoutFeedback onPress={()=>handleClick(item)}>
      <Image
        source={require("../assets/porsche-3.jpeg")}
        style={{ width: width * 0.6, height: height * 0.4 }} //image height width
        className="rounded-2xl"
      />
    </TouchableWithoutFeedback>
  );
};
