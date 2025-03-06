import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FILTER_CONSTANT, filterHandler } from '../constants/filterConstant'

const CommonButton = ({type, blogData,setFilteredData,onCloseFilterClick}) => {
  return (
    <TouchableOpacity style={{padding:5, borderBottomColor:'gray', borderBottomWidth:1}}
    onPress={()=>{
        const filteredData = filterHandler(type, blogData)
        setFilteredData(filteredData)
        onCloseFilterClick()
    }}>
      <Text style={{  fontSize: 18 }}>{FILTER_CONSTANT[type]}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton