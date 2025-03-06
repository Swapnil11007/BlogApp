import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getInitialBlogData } from "../services/blogData";
import BlogCard from "../components/BlogCard";
import SearchBar from "../components/SearchBar";

const MainScreen = () => {
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    getInitialBlogData().then((blogData) => {
      console.log(blogData);
      // blogdata contains
      // {posts: Array(30), total: 251, skip: 0, limit: 30}
      setBlogData(blogData);
      setFilteredData(blogData.posts);
    });
  }, []);
  // console.log("blogData ---->", blogData);
  return (
    <View style={{ flex: 1, marginTop: 10, marginHorizontal: 10, gap: 10 }}>
      <View>
        <SearchBar blogData={blogData.posts} setFilteredData={setFilteredData} />
      </View>

      <FlatList
        data={filteredData}
        alwaysBounceVertical={true}
        renderItem={({ item, index }) => <BlogCard blogData={item} />}
        contentContainerStyle={{ gap: 10 }}
      />
    </View>
  );
};

export default MainScreen;
