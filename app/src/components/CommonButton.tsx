import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FILTER_CONSTANT, filterHandler } from "../constants/filterConstant";
import { blogDataType, postDataType } from "../constants/dataTypes";

type CommonButtonIprop = {
  filterType: string,
  blogData : postDataType[],
  setFilteredData: React.Dispatch<React.SetStateAction<postDataType[]>>,
  onCloseFilterClick: ()=> void,
}
const CommonButton = ({
  filterType,
  blogData,
  setFilteredData,
  onCloseFilterClick,
}:CommonButtonIprop) => {
  return (
    <TouchableOpacity
      style={{ padding: 5, borderBottomColor: "gray", borderBottomWidth: 1 }}
      onPress={() => {
        const filteredData = filterHandler(filterType, blogData);
        setFilteredData(filteredData);
        onCloseFilterClick();
      }}
    >
      <Text style={{ fontSize: 18 }}>{FILTER_CONSTANT[filterType]}</Text>
    </TouchableOpacity>
  );
};

export default CommonButton;
