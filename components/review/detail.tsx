import {
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OPENSANS_REGULAR } from "../../utils/const";
import {
  NavigationProp,
  useNavigation,
  RouteProp,
} from "@react-navigation/native";
import { useRoute } from "@react-navigation/native";
import starIcon from "../../assets/images/star.png";

const styles = StyleSheet.create({
  review: {
    fontSize: 30,
    fontFamily: OPENSANS_REGULAR,
  },

  reviewText: {
    fontSize: 25,
    fontFamily: OPENSANS_REGULAR,
    padding: 15,
  },
});

const Detail = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, "review-detail"> = useRoute();

  return (
    <ImageBackground
      source={require("../../assets/images/react-native.png")}
      style={{ flex: 1 }}
    >
      <Text style={styles.reviewText}>Id: {route.params?.id}</Text>
      <Text style={styles.reviewText}>Content: {route.params?.title}</Text>
      <Text style={styles.reviewText}>Rating: {route.params?.star} </Text>
      <View style={{ flexDirection: "row", gap: 10, marginHorizontal: 10 }}>
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
        <Image style={{ height: 50, width: 50 }} source={starIcon} />
      </View>
    </ImageBackground>
  );
};

export default Detail;
