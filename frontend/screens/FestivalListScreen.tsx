import React from "react";
import { View, FlatList, Pressable } from "react-native";
import { router } from "expo-router";
import FestivalCard from "../components/FestivalCard";
import festivals from "../data/festivals.json";

export default function FestivalListScreen() {
  return (
    <View>
      <FlatList
        data={festivals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => router.push(`/festival/${item.id}`)}>
            <FestivalCard
              name={item.name}
              date={item.date}
              location={item.location}
            />
          </Pressable>
        )}
      />
    </View>
  );
}
