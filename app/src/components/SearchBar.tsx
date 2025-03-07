import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { TextInput as TextInputPaper } from "react-native-paper";
import { postDataType } from "../constants/dataTypes";

type searchBarIprop = {
  blogData: postDataType[];
  setFilteredData: (postDataType: postDataType[]) => void;
  onFilterClick: () => void;
};

const SearchBar = ({
  blogData,
  setFilteredData,
  onFilterClick,
}: searchBarIprop) => {
  // console.log("🚀 ~ SearchBar ~ blogData:", blogData);
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
        <TextInputPaper
          placeholder="Search..."
          style={styles.inputContainer}
          onChangeText={(searchText) => {
            console.log("searchText ---", blogData);
            const filteredData: postDataType[] = blogData?.filter(
              (blog) =>
                blog?.title
                  .toLowerCase()
                  .includes(searchText.toLocaleLowerCase()) ||
                blog.body
                  .toLocaleLowerCase()
                  .includes(searchText.toLocaleLowerCase()) ||
                blog.tags.reduce((first, second)=> {
                  return typeof first === "boolean"
                    ? first
                    : first
                        .toLocaleLowerCase()
                        .includes(searchText.toLocaleLowerCase()) ||
                        second
                          .toLocaleLowerCase()
                          .includes(searchText.toLocaleLowerCase());
                })
            );
            setFilteredData(filteredData);
          }}
        />
        <TouchableOpacity
          style={styles.filterContainer}
          onPress={() => {
            onFilterClick();
          }}
        >
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
    // backgroundColor: "#rgb(214, 206, 206)",
    borderRadius: 20,
    overflow: "hidden",
    // gap: 20,
    // paddingHorizontal: 20,
  },

  inputContainer: {
    flex: 1,
    paddingStart: 20,
    height: 40,
    // backgroundColor: "#rgb(214, 206, 206)",
  },
  filterContainer: {
    paddingHorizontal: 20,
    backgroundColor: "pink",
    justifyContent: "center",
  },
  bellContainer: {
    backgroundColor: "pink",
    alignSelf: "stretch",
    padding: 10,
    borderRadius: 50,
  },
});

export default SearchBar;
