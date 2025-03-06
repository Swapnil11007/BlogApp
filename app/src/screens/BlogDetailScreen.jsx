import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "expo-router";

const BlogDetailScreen = ({route, navigation}) => {
    const {blogData} = route?.params;
    console.log("blogData --->",blogData)
    console.log()
//   const navigation = useNavigation();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
    });
  }, []);

  return (
    // <View style={styles.mainContainer}>

    <ScrollView style={styles.mainContainer}>
      <View style={styles.dummyImage} />
      <View style={{marginHorizontal:20}}>
        <Text style={{fontWeight:'600'}}>{blogData.title}</Text>
      </View>
    </ScrollView>
    // </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#rgb(255, 255, 255)",
  },
  dummyImage: {
    height: 150,
    margin: 20,
    backgroundColor: "gray",
  },
});

export default BlogDetailScreen;
