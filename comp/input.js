import react from "react";
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

const Input = () => {
    return (
        <View style={styles.screen} >
            <View style={styles.container}>
                <View style={styles.Input}>
                    <TextInput
                        placeholder="Write A task "
                    />
                </View>
                <View>
                    <Ionicons name="add-circle" size={60} color='#ffffff' />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        justifyContent:"flex-end",
        margin:20
    },
    Input: {
        borderWidth: 2,
        borderColor: '#eeeeee',
        padding: 15,
        borderRadius: 20,
        width: 300,
        height:50,
        backgroundColor: 'white',
        alignItems: "center",
        elevation: 50
    },
    container:{
        flexDirection:'row',
        alignItems:"center",
        
    }

})

export default Input;