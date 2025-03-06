import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const SearchBar = ({ blogData, setFilteredData, onFilterClick }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={styles.searchBarStyle}>
        <TextInput
          placeholder="Search..."
          style={styles.inputContainer}
          onChangeText={(searchText) => {
            // console.log('searchText ---',blogData)
            const filteredData = blogData?.filter(
              (blog) =>
                blog?.title
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase()) ||
                blog.body
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase())
            );
            setFilteredData(filteredData);
          }}
        />
        <TouchableOpacity style={styles.filterContainer} onPress={()=>{(onFilterClick())}}>
          <Text>Filter</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.bellContainer}>
        <Text>Bell</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarStyle: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#rgb(214, 206, 206)",
    borderRadius: 20,
    overflow: "hidden",
    gap: 20,
    // paddingHorizontal: 20,
  },
  inputContainer: { flex: 1, paddingStart: 20 },
  filterContainer: {
    padding: 10,
    backgroundColor: "pink",
  },
  bellContainer: {
    backgroundColor: "pink",
    alignSelf: "stretch",
    padding: 10,
    borderRadius: 100,
  },
});

export default SearchBar;
