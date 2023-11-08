import {
  View,
  Text,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";
import { styles } from "../theme";
import { ScrollView } from "react-native";
import TrentingMovies from "../components/trentingMovies";
import MovieList from "../components/MovieList";

const ios = Platform.OS === "ios";
export default function HomeScreen() {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upComingMovies, setupComingMovies] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  return (
    <View className="flex-1 bg-neutral-800">
      <SafeAreaView className={ios ? "-mb-2" : "-mb-0"}>
        <StatusBar style="light" />
        <View className="mt-10 flex-row  items-center justify-between mx-4">
          <Bars3CenterLeftIcon size={"30"} strokeWidth={2} color={"white"} />
          <Text className="text-white text-3xl font-bold">
            <Text style={styles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={"30"} strokeWidth={2} color={"white"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      >
        {/*trenting movie carousel*/}
        <TrentingMovies data={trending} />

        {/* Upcoming  Movies  */}

        <MovieList title="Upcoming" data={upComingMovies} />

        {/* Top rated  Movies  */}

        <MovieList title="Top Related" data={topRated} />
      </ScrollView>
    </View>
  );
}
