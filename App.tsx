import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './context/store';
import ProductCards from './components/productsCards';
import SearchInput from './components/inputSearch';
import Products from './components/productsList';


export default function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ProductCards />
        <SearchInput />
        <Products />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: 10,
  },
});
