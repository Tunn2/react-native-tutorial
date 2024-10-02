import {
  Alert,
  Button,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useState } from "react";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },

  header: {
    flexDirection: "row",
    borderBottomWidth: 1,
    justifyContent: "space-between",
    borderColor: "red",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 20,
  },
  groupInput: {
    marginBottom: 15,
  },
  text: {
    fontSize: 25,
    fontWeight: "400",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginVertical: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

interface IProps {
  modalVisible: boolean;
  setModalVisible: (v: boolean) => void;
  addNew: any;
}

const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible, addNew } = props;
  const [title, setTitle] = useState("");
  const [star, setStar] = useState("");
  function randomIntFromInterval(min: number, max: number) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const handleSubmit = () => {
    if (!title || !star) {
      Alert.alert("Invalid info");
      return;
    }

    addNew({ id: randomIntFromInterval(2, 200000), title, star });
    setModalVisible(false);
    setStar("");
    setTitle("");
  };
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 25 }}>Create a review</Text>
          <AntDesign
            name="close"
            size={24}
            color="black"
            onPress={() => {
              setModalVisible(false);
              setStar("");
              setTitle("");
            }}
          />
        </View>

        {/* body */}
        <View style={{ marginBottom: 20 }}>
          <View style={styles.groupInput}>
            <Text style={styles.text}>Nội dung</Text>
            <TextInput
              style={styles.input}
              value={title}
              onChangeText={(e) => setTitle(e)}
            />
          </View>
          <View>
            <Text style={styles.text}>Rating</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={star}
              onChangeText={(e) => setStar(e)}
            />
          </View>
        </View>

        {/* footer */}
        <View>
          <Button title="Add" onPress={handleSubmit} />
        </View>
      </View>
    </Modal>
  );
};

export default CreateModal;
