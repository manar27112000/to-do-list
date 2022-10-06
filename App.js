import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Input from "./comp/input";
export default function App() {
  const [task, setTask] = useState([
    { name: "Like 👍", key: "1" },
    { name: "Comment 📢", key: "2" },
    { name: "Subscribe 🙃", key: "3" },
    { name: "Subscribe 🙃", key: "4" },
    { name: "Like 👍", key: "5" },
    { name: "Comment 📢", key: "6" },
    { name: "Subscribe 🙃", key: "7" },
    { name: "Like 👍", key: "8" },
    { name: "Comment 📢", key: "9" },
    { name: "Subscribe 🙃", key: "10" },
    { name: "Like 👍", key: "11" },
  ]);

AsyncStorage.setItem('todos',arrayOfObjects);

  return (
    <View style={styles.screen}>
     
        <View style={styles.containertext}>
          <Text style={styles.so}>Today is tasks</Text>
        </View>
        {/* <View style={styles.containeritems}>
          <FlatList
            data={task}
            renderItem={({ item }) => (
              // <Ionicons name="square"/>
              <Text style={styles.item}>{item.name}</Text>
            )}
          />
        </View> */}
 <View style={styles.containeritems}>
        <ScrollView>
          {task.map((item) => {
            return (
              <View key={item.key}>
                
                  <TouchableOpacity style={styles.button} onPress={()=>{

Alert.alert("today is tasks",item.name)
                  }}>
                  <View style={styles.item}>
                    <Ionicons name="square" size={24} color="#55BCF6" />
                    <Text>{item.name}</Text>
                    <Ionicons
                      name="ellipse-outline"
                      size={15}
                      color="#55BCF6"
                    />
                    </View>
                  </TouchableOpacity>
                </View>
              
            );
          })}
        </ScrollView>

        {/* <Input/> */}
      </View>

      <View style={styles.containerinput}>
        <View>
          <TextInput style={styles.textInput} placeholder="Write a task" />
        </View>
        <View>
          <Ionicons name="add-circle" size={65} color="#ffffff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#E8EAED",
    // justifyContent: "flex-end",
    marginTop: 10,
  },
  containertext: {
     flex:1,
  },
  containeritems: {
     flex: 6,
  },
  item: {
    flexDirection: "row",
    marginBottom: 20,
    marginRight: 20,
    marginLeft: 20,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    fontSize: 14,
    fontFamily: "Roboto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  so: {
    marginTop: 50,
    padding: 30,
    fontSize: 24,
    fontWeight: "bold",
    fontFamily: "Roboto",
    position: "relative",
  },
  textInput: {
    position: "relative",
    width: 315,
    height: 50,
    borderRadius: 60,
    padding: 15,
    backgroundColor: "white",
    textAlign: "center",
    
  },
  containerinput: {
     flex:1,
    flexDirection: "row",
    margin: 10,
    justifyContent: "flex-end",
    alignItems: "center",
  },
});
