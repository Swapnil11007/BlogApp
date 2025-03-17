import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import { postDataType } from "../constants/dataTypes";

const BlogCard = ({
  blogData,
  fromSavedBlog = false,
}: {
  blogData: postDataType;
  fromSavedBlog?: boolean;
}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.mainContainer}
        onPress={() => {
          !fromSavedBlog
            ? navigation.navigate("BlogDetailScreen", { blogData: blogData })
            : navigation.navigate("Home", {
                screen: "BlogDetailScreen",
                params: {
                  blogData: blogData,
                  from: "Saved"
                },
              });
        }}
      >
        <View style={styles.dummyImage} />
        <View style={styles.infoContainer}>
          <View style={styles.catAndLikesContainer}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              {blogData?.tags ? (
                blogData?.tags.map((item, index) => (
                  <Text style={styles.categoryContainer} key={index.toString()}>
                    {item.toUpperCase()}
                  </Text>
                ))
              ) : (
                <Text style={styles.categoryContainer}>{"UN-CATEGORISED"}</Text>
              )}
            </View>
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
  infoContainer: { flex: 4 },
  catAndLikesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 40,
  },
  categoryContainer: {
    marginRight: 5,
    paddingHorizontal: 5,
    backgroundColor: "#rgb(214, 206, 206)",
    borderRadius: 20,
    fontSize: 12,
  },
});

export default BlogCard;
