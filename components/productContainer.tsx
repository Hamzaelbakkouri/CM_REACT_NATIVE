import { View, Text, Pressable } from "react-native";
import { Product } from "../types";
import { StyleSheet } from "react-native";
import { useAppDispatch } from "../context/store";
import { addProduct } from "../context/storeCard";

export default function ProductBox(props: { product: Product }) {
  const dispatch = useAppDispatch();
  return (
    <Pressable onPress={()=>{
      dispatch(addProduct(props.product));
    }} style={styles.container}>
      <Text style={styles.text}>{props.product.product_name}</Text>
      <Text style={styles.text}>{props.product.price} Dhs</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2D2D2D",
    borderLeftColor: "#C9CAEF",
    justifyContent: "center",
    borderLeftWidth: 5,
    borderRadius: 10,
    height: 60,
    width: 110,
    margin: 5,
    padding: 10,
  },
  text:{
    color: "white"
  }
});
