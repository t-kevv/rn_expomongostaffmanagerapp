import React from 'react'
import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather, Entypo, Ionicons, Octicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";



const index = () => {
    return (
        <ScrollView>
            <LinearGradient colors={["#7F7FD5", "#E9E4F0"]} style={{ flex: 1 }}>
                <View style={{ padding: 12 }}>

                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            justifyContent: "space-between",
                        }}
                    >
                        <Feather name="bar-chart" size={24} color="black" />
                        <Text style={{ fontSize: 16, fontWeight: "600" }}>
                            Staff Managament System
                        </Text>
                        <Entypo name="lock" size={24} color="black" />
                    </View>

                    <View>
                      
                    </View>

                </View>
            </LinearGradient>
        </ScrollView>
    )
}

export default index

const styles = StyleSheet.create({})