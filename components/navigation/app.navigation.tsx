import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../review/home";
import Detail from "../review/detail";
import About from "../review/about";
import AppHeader from "./app.header";

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <>
      <Stack.Navigator
      //   screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{ header: () => <AppHeader /> }}
        />
        <Stack.Screen
          name="review-detail"
          component={Detail}
          options={{ title: "Chi tiết Review" }}
        />
      </Stack.Navigator>
    </>
  );
};
const AppNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <>
      <Drawer.Navigator>
        <Drawer.Screen
          name="home"
          component={HomeLayout}
          options={{ title: "Trang chủ", header: () => <></> }}
        />
        <Drawer.Screen
          name="about"
          component={About}
          options={{ title: "Thông tin", header: () => <AppHeader /> }}
        />
      </Drawer.Navigator>
    </>
  );
};

export default AppNavigation;
