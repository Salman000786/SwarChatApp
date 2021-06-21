
import React, { Component } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import colors from "../styles/colors";
export default function Loader({isvalid,LodingColor,size}) {
    if (isvalid) {
        return (
                <View style={[styles.container, styles.horizontal]}>
                   
                    <ActivityIndicator size={!!size?size:'large'} color={!!LodingColor?LodingColor:colors.themeColor} />
                   
                </View>
        )
    }
    return(
        <View></View>
    )

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      position:"absolute",
      backgroundColor:'rgba(0,0,0,0.3)',
      
    //   flexDirection: "row",
    //   justifyContent: "space-around",
      
    width:"100%",
    height:"100%",
      
    },
   
  });
  