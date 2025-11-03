import { ScrollView, Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import festivals from "../../data/festivals.json";
import artists from "../../data/artists.json";
import festivalArtists from "../../data/festival_artists.json";
import setlists from "../../data/setlists.json";

export default function FestivalDetailScreen() {
  const { id } = useLocalSearchParams();
  const festivalId = String(id);

  const festival = festivals.find((f) => f.id === festivalId);
  if (!festival) {
    return <Text>Festival not found</Text>;
  }

  const Artists = festivalArtists
    .filter((fa) => fa.festivalId === festivalId)
    .map((fa) => artists.find((a) => a.id === fa.artistId));

  const setLists = Artists.map((artist) => {
    const setList = setlists.find(
      (s) => s.festivalId === festivalId && s.artistId === artist?.id
    );
    return {
      artistName: artist?.name,
      songs: setList?.songs ?? [],
    };
  });

  return (
    <ScrollView style={{ padding: 16 }}>
      {/* フェス情報 */}
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>{festival.name}</Text>
      <Text>{festival.date}</Text>
      <Text>{festival.location}</Text>

      {/* 出演アーティスト */}
      <Text style={{ marginTop: 24, fontSize: 18, fontWeight: "bold" }}>
        出演アーティスト
      </Text>
      {Artists.map((artist, index) => (
        <Text key={index}>- {artist?.name}</Text>
      ))}

      {/* セットリスト */}
      <Text style={{ marginTop: 24, fontSize: 18, fontWeight: "bold" }}>
        セットリスト
      </Text>
      {setLists.map((item, index) => (
        <View key={index} style={{ marginBottom: 16 }}>
          <Text style={{ fontWeight: "bold" }}>{item.artistName}</Text>
          {item.songs.map((song, idx) => (
            <Text key={idx}> • {song}</Text>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}
