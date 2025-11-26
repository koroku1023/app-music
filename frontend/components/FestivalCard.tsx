import React from "react";
import { View, Text } from "react-native";

type FestivalCardProps = {
  name: string;
  date: string;
  location: string;
};

export default function FestivalCard({
  name,
  date,
  location,
}: FestivalCardProps) {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{date}</Text>
      <Text>{location}</Text>
    </View>
  );
}
