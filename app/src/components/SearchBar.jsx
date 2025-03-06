import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const SearchBar = ({ blogData, setFilteredData }) => {
  return (
    // <View>
    <TextInput
      placeholder="Search"
      style={styles.searchBarStyle}
      onChangeText={(searchText) => {
        // console.log('searchText ---',blogData)
        const filteredData = blogData?.filter(
          (blog) =>
            blog?.title.includes(searchText) || blog.body.includes(searchText)
        );
        setFilteredData(filteredData);
      }}
      
    />
    // </View>
  );
};

const styles = StyleSheet.create({
  searchBarStyle: {
    width: "80%",
    backgroundColor: "#rgb(214, 206, 206)",
    borderRadius: 20,
    padding: 10,
  },
});

export default SearchBar;
