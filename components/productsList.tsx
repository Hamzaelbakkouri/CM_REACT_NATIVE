import React, { useEffect } from "react";
import { View, FlatList, ScrollView } from "react-native";
import { RootState, useAppDispatch } from "../context/store";
import { useSelector } from "react-redux";
import ProductBox from "./productContainer";
import { getProducts } from "../context/storeProduct";

export default function Products() {
  const dispatch = useAppDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(getProducts(""));
  }, []);

  return (
    <ScrollView
      style={{
        height: "40%",
        width: "100%",
      }}
      contentContainerStyle={{
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductBox product={product} key={product.id} />
      ))}
    </ScrollView>
  );
}
