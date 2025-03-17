import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";

const CommonModal = ({
  children,
  closeModal = ()=>{},
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => {
  console.log("🚀 ~ closeModal:", closeModal)

  return (
    <Modal visible={true} transparent={true} animationType="slide">
      <Pressable style={{ flex: 1 }} onPress={() => closeModal()} />
      <View style={styles.mainContainer}>{children}</View>
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

export default CommonModal;
