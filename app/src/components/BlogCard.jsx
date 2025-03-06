import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";

const BlogCard = ({ blogData }) => {
    const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity style={styles.mainContainer}
      onPress={()=>navigation.navigate('BlogDetailScreen', {blogData: blogData})}
      >
        <View style={styles.dummyImage} />
        <View style={styles.infoContainer}>
          <View style={styles.catAndLikesContainer}>
            <Text numberOfLines={1} style={{ flex: 1 }}>
              {blogData?.tags
                ? blogData?.tags[0].toUpperCase()
                : "Un-Categarised"}
            </Text>
            <Text>{blogData.views}</Text>
          </View>
          <Text numberOfLines={2}>{blogData.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: { flex: 1, flexDirection: "row", gap: 10 },
  dummyImage: {
    flex: 1,
    height: 50,
    backgroundColor: "gray",
  },
  infoContainer:{ flex: 4 },
  catAndLikesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
  },
});

export default BlogCard;
