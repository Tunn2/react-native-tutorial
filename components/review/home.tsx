import { NavigationProp, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppHeader from "../navigation/app.header";
import CreateModal from "./create.modal";
import AntDesign from "@expo/vector-icons/AntDesign";
interface IReview {
  id: number;
  title: string;
  star: number;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: "#ccc",
    margin: 15,
  },
});

const Home = (props: any) => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    { id: 1, title: "React Native", star: 5 },
    { id: 2, title: "tungnk", star: 5 },
  ]);

  const [modalVisible, setModalVisible] = useState(false);

  const addNew = (item: IReview) => {
    setReviews([...reviews, item]);
  };
  return (
    <View>
      <Text style={{ fontSize: 30, padding: 10 }}>Review list</Text>

      <View style={{ alignItems: "center" }}>
        <AntDesign
          name="plussquareo"
          size={40}
          color="black"
          onPress={() => setModalVisible(true)}
        />
      </View>
      <View>
        <FlatList
          data={reviews}
          keyExtractor={(item) => item.id + ""}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => navigation.navigate("review-detail", item)}
              >
                <View style={styles.reviewItem}>
                  <Text>{item.title}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>

      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        addNew={addNew}
      />
    </View>
  );
};

export default Home;
