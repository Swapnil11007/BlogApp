import { View, Text, Modal, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const CommonModal = ({children}:{children:React.ReactNode}) => {
  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <View style={styles.mainContainer}>
        {children}
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "white",
    position: "absolute",
    width: "100%",
    bottom: 0,
    minHeight: "40%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 20,
    padding: 20,
    gap: 10,
  },
});

export default CommonModal