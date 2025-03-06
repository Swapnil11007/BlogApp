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
import FilterModal from "../components/FilterModal";

const MainScreen = () => {
  const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [showSortingOptions, setShowSortingOptions] = useState(false);

  useEffect(() => {
    getInitialBlogData().then((blogData) => {
      console.log(blogData);
      // blogdata contains
      // {posts: Array(30), total: 251, skip: 0, limit: 30}
      setBlogData(blogData.posts);
      setFilteredData(blogData.posts);
    });
  }, []);

  const onFilterClick = () => {
    setShowSortingOptions(!showSortingOptions);
  };

  return (
    <>
      <View style={{ flex: 1, marginTop: 10, marginHorizontal: 10, gap: 10 }}>
        <View>
          <SearchBar
            blogData={blogData}
            setFilteredData={setFilteredData}
            onFilterClick={onFilterClick}
          />
        </View>

        <FlatList
          data={filteredData}
          alwaysBounceVertical={true}
          renderItem={({ item, index }) => <BlogCard blogData={item} />}
          contentContainerStyle={{ gap: 10 }}
        />
      </View>
      {showSortingOptions && (
        <FilterModal onCloseFilterClick={onFilterClick} blogData={blogData} setFilteredData={setFilteredData}/>
      )}
    </>
  );
};

export default MainScreen;
