import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import Item from "./Components/Item/Item";
import lemon from "./assets/lemon.png";
import mango from "./assets/mango.png";

export default function App() {
  // const arr = ["123", "lemon", "mango", "456", "Mohamed"];
  const arrOfObjects = [
    { text: "1234", icon: lemon },
    { text: "lemon", icon: mango },
    { text: "mango", icon: lemon },
    { text: "456", icon: mango },
    { text: "Mohamed", icon: lemon },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>First App</Text>
      <ScrollView contentContainerStyle={styles.items}>
        {arrOfObjects.map((e) => (
          <Item text={e.text} iconSrc={e.icon} />
        ))}
      </ScrollView>
      {/* <ScrollView contentContainerStyle={styles.items}>
        {arr.map((e, index) => (
          <Item text={e} iconSrc={index % 2 === 0 ? lemon : mango} />
        ))}
      </ScrollView> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "flex-start",
    padding: 20,
  },
  title: {
    paddingTop: 80,
    fontSize: 24,
  },
  items: {
    backgroundColor: "green",
  },
});
