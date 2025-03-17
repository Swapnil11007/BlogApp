import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation } from "expo-router";
import { postDataType } from "../constants/dataTypes";
import { useDispatch, useSelector } from "react-redux";
import { getSavedBlogs, saveOrRemoveBlog } from "../redux/blogDataSlice";

const BlogDetailScreen = ({ route }) => {
  console.log("🚀 ~ BlogDetailScreen ~ route:", route)
  const { blogData, from  = undefined}: { blogData: postDataType, from: string | undefined } = route?.params;
  console.log("🚀 ~ BlogDetailScreen ~ from:", from)
  const savedBlogIndex = useSelector(getSavedBlogs);
  const [savedBlog, setSavedBlog] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerRight: () => {
        return (
          <View>
            <SaveOrUnsavePostBtn />
          </View>
        );
      },
    });
    BackHandler.addEventListener("hardwareBackPress",() => {
      return from ? navigation.navigate(from): navigation.goBack()
    })
     
    
    savedBlogIndex.includes(blogData.id) && setSavedBlog(true)
  }, [savedBlog, navigation, route]);

  const SaveOrUnsavePostBtn = () => {
    return (
      <TouchableOpacity
        style={[
          styles.savePostBtnStyle,
          savedBlog ? { borderColor: "red" }:{ borderColor: "blue" },
        ]}
        onPress={() => {
          dispatch(saveOrRemoveBlog(blogData.id));
          setSavedBlog(!savedBlog);
        }}
      >
        <Text style={savedBlog ?{ color: "red" }:{ color: "blue" } }>
          {savedBlog ? "Unsave Post":"Save Post" }
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.dummyImage} />
      {}
      <View style={{ marginHorizontal: 20, gap: 20 }}>
        <Text style={{ fontWeight: "600" }}>{blogData.title}</Text>
        <Text>{blogData.body}</Text>
      </View>
    </ScrollView>
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
  savePostBtnStyle: {
    margin: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 20,
  },
});

export default BlogDetailScreen;
