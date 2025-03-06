import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import CommonButton from "./CommonButton";
import CommonModal from "./CommonModal";
import { FILTER_CONSTANT } from "../constants/filterConstant";

const FilterModal = ({ onCloseFilterClick, blogData, setFilteredData }) => {
  return (
    <CommonModal>
      <View style={styles.headerContainer}>
        <Text style={{ fontWeight: "600", fontSize: 20 }}>Sort By</Text>

        <TouchableOpacity
          style={styles.cancelBtnContainer}
          onPress={() => {
            onCloseFilterClick();
          }}
        >
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      {Object.keys(FILTER_CONSTANT).map((filterType) => (
        <CommonButton
          type={filterType}
          blogData={blogData}
          setFilteredData={setFilteredData}
          onCloseFilterClick={onCloseFilterClick}
        />
      ))}
    </CommonModal>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    bottom: 0,
    minHeight: "30%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
    padding: 20,
    gap: 10,
  },
  headerContainer: { flexDirection: "row", justifyContent: "space-between" },
  cancelBtnContainer: {
    padding: 8,
    borderRadius: 20,
    borderColor: "blue",
    borderWidth: 2,
    color: "blue",
  },
});

export default FilterModal;
