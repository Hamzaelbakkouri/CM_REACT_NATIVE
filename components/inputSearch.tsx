import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { RootState, useAppDispatch } from "../context/store";
import { getProducts } from "../context/storeProduct";
import { useState } from "react";

export default function SearchInput() {
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Chercher un produit"
          onChange={(e) => {
            setSearch(e.nativeEvent.text);
          }}
        />
      </View>
      <Pressable
        style={styles.button}
        onPress={() => {
          dispatch(getProducts(search));
        }}
      >
        <Text style={{ color: "white" }}>Chercher</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 10,
    width: "60%",
    height: 40,
    marginRight: 3,
    flexDirection: "row",
  },
  button: {
    backgroundColor: "#CB001E",
    width: "30%",
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    height: 40,
    borderRadius: 20,
    marginLeft: 3,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
});
