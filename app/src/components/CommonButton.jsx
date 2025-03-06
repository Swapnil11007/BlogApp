import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const CommonButton = ({name}) => {
  return (
    <TouchableOpacity style={{padding:5, borderBottomColor:'gray', borderBottomWidth:1}}>
      <Text style={{  fontSize: 18 }}>{name}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton