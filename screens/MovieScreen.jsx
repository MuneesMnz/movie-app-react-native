import {
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
  Platform,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { ChevronLeftIcon } from "react-native-heroicons/outline";
import { HeartIcon } from "react-native-heroicons/solid";
import { styles, theme } from "../theme";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const ios = Platform.OS === "ios";

const topMargin = ios ? "" : "mt-12 ";

export default function MovieScreen() {
  const { params: item } = useRoute(); //renaming params as item

  const [isFavorate, toggleFavorate] = useState(false);
  const navigation = useNavigation();
  return (
    <ScrollView
      className="flex-1 bg-neutral-900"
      contentContainerStyle={{ paddingBottom: 45 }}
    >
      {/* <StatusBar style="light"/> */}
      <View className="w-full mt-0">
        <SafeAreaView
          className={`absolute z-20 w-full flex-row justify-between items-center px-4 ${topMargin} `}
        >
          <TouchableOpacity
            className="p-1 rounded-xl"
            style={styles.background}
            onPress={() => navigation.goBack()}
          >
            <ChevronLeftIcon color={"white"} strokeWidth={2.5} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => toggleFavorate((prev) => !prev)}>
            <HeartIcon
              size={"35"}
              color={isFavorate ? theme.background : "white"}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={require("../assets/images/moviePoster2.png")}
            style={{ width, height: height * 0.55 }}
          />
          <LinearGradient
            colors={["transparent", "rgba(23,23,23,0.8)", "rgba(23,23,23,1)"]}
            style={{ width, height: height * 0.4 }}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            className="absolute bottom-0"
          />
        </View>
      </View>
      {/* Movie Deatils  */}

      <View className="space-y-3 px-1" style={{ marginTop: -(height * 0.09) }}>
        <Text className="text-white text-center text-3xl font-bold tracking-wide">
          Lorem ipsum dolor sit amet. Lorem
        </Text>
        {/* STATUS RELEASE RUNTIME */}
        <Text className="text-neutral-400 font-semibold text-center text-base">
          Released · 2020 · 170 min
        </Text>
        {/* GENURE  */}
        <View className="flex-row justify-center mx-4 space-x-2 ">
          <Text className="text-neutral-400 font-semibold text-base text-center ">
            Action ·
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Thriller ·
          </Text>
          <Text className="text-neutral-400 font-semibold text-base text-center">
            Comedy
          </Text>
        </View>
        {/* DISCRIPTION  */}
        <Text className="mx-4 text-neutral-400 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quo,
          quas assumenda, eius cupiditate aspernatur consectetur exercitationem
          quis earum molestias molestiae sequi. Nobis, nam ad?Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Animi, odio.
        </Text>
      </View>
    </ScrollView>
  );
}
