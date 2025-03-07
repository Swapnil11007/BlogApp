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
import { useDispatch, useSelector } from "react-redux";
import { getBlogData, setBlogData } from "../redux/blogDataSlice";
import { blogDataType, postDataType } from "../constants/dataTypes";

const MainScreen = () => {
  // const [blogData, setBlogData] = useState([]);
  const [filteredData, setFilteredData] = useState<postDataType[]>([]);
  const [showSortingOptions, setShowSortingOptions] = useState(false);
  const blogDataObject: blogDataType = useSelector(getBlogData)
  console.log("🚀 ~ MainScreen ~ blogDataObject:", blogDataObject)
  const dispatch = useDispatch();

  useEffect(() => {
    getInitialBlogData().then((blogData: blogDataType) => {
      console.log("🚀 ~ getInitialBlogData ~ blogData: 25",  blogData)
      // blogdata contains
      // {posts: Array(30), total: 251, skip: 0, limit: 30}
      dispatch(setBlogData(blogData))
      // setBlogData(blogData.posts);
      setFilteredData(blogData.posts);
    }).catch((err)=>{
      console.log(err)
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
            blogData={blogDataObject?.posts}
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
        <FilterModal onCloseFilterClick={onFilterClick} blogData={filteredData} setFilteredData={setFilteredData}/>
      )}
    </>
  );
};

export default MainScreen;
