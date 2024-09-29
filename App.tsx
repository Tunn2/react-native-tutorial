import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 60, fontWeight: "600" }}>Count = {count}</Text>
        <Button
          title="Click here to increase age"
          onPress={() => setCount(count + 1)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
