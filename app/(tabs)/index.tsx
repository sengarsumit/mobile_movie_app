import { Link } from "expo-router";
import { Text, View } from "react-native";


export default function Index() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Welcome eh </Text>


      <Link href="/movies/avengers">Avenger Movie</Link>
    </View> 
  );
}
