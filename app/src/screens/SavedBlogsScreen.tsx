import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPostData, getSavedBlogs } from "../redux/blogDataSlice";
import { blogDataType, postDataType } from "../constants/dataTypes";
import BlogCard from "../components/BlogCard";

const SavedBlogsScreen = () => {
  const savedBlogIndex = useSelector(getSavedBlogs);
  const allPost: postDataType[] = useSelector(getPostData);
  const [filteredData, setFilteredData] = useState<postDataType[]>([]);

  useEffect(() => {
    setFilteredData(
      allPost.filter((post) => {
        return savedBlogIndex.includes(post.id);
      })
    );
  }, [allPost, savedBlogIndex]);
  console.log("🚀 ~ SavedBlogsScreen ~ savedBlogIndex:", savedBlogIndex);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 10,
      }}
    >
      <Text>Saved Blogs</Text>
      <View style={{flex:1,width:'100%'}}>
      <FlatList
        data={filteredData}
        alwaysBounceVertical={true}
        renderItem={({ item, index }) => (
          <BlogCard blogData={item} fromSavedBlog={true} />
        )}
        contentContainerStyle={{ gap: 10 }}
      />
      </View>
    </View>
  );
};

export default SavedBlogsScreen;
