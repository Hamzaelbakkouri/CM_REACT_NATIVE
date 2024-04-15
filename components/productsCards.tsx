import { View, Text, ScrollView } from "react-native";
import { RootState, useAppDispatch } from "../context/store";
import { useSelector } from "react-redux";
import { Card } from "../types";
import { addQuantity, removeQuantity } from "../context/storeCard";
import { useEffect } from "react";

export default function ProductCards() {
  const { productsOfcards } = useSelector((state: RootState) => state.card);

  useEffect(() => {
    console.log(productsOfcards);
  }, [productsOfcards]);

  return (
    <ScrollView
      style={{
        height: "50%",
        borderColor: "white",
        borderWidth: 1,
        padding: 20,
        width: "100%",
        backgroundColor: "#121315",
      }}
    >
      {productsOfcards.map((card, index) => (
        <CardComponent key={card.product.id} card={card} />
      ))}
    </ScrollView>
  );
}

const CardComponent = (props: { card: Card }) => {
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        backgroundColor: "#2D2D2D",
        borderLeftColor: "white",
        borderLeftWidth: 5,
        borderRadius: 10,
        height: 70,
        width: "100%",
        margin: 5,
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ color: "white" }}>{props.card.product.product_name}</Text>
        <Text style={{ color: "white" }}>
          {props.card.quantity} * {props.card.product.price} Dhs/u
        </Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        <Text
          onPress={() => {
            dispatch(removeQuantity(props.card.product));
          }}
          style={{
            fontSize: 25,
            marginLeft: 10,
            marginRight: 10,
            color: "white",
            borderColor: "white",
            borderWidth: 2,
            height: 40,
            width: 40,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          -
        </Text>
        <Text style={{ fontSize: 25, marginLeft: 10, marginRight: 10, color: "white" }}>
          {props.card.quantity}
        </Text>
        <Text
          onPress={() => {
            dispatch(addQuantity(props.card.product));
          }}
          style={{
            fontSize: 25,
            marginLeft: 10,
            marginRight: 10,
            color: "white",
            borderColor: "white",
            borderWidth: 2,
            height: 40,
            width: 40,
            borderRadius: 10,
            textAlign: "center",
          }}
        >
          +
        </Text>
      </View>
    </View>
  );
};