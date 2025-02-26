import { Text, View, ScrollView, KeyboardAvoidingView, Platform, StyleSheet } from "react-native";
import CheckoutSummary, { Header, ProductCard } from "../_components";
import { products as initialProducts } from "@/data/test";
import { useState, useCallback } from "react";

export default function CartScreen() {
  const [products, setProducts] = useState(initialProducts);

  const handleQuantityChange = useCallback((productName: string, change: 1 | -1) => {
    setProducts(currentProducts => 
      currentProducts.map(product => 
        product.name === productName 
          ? { 
              ...product, 
              count: Math.max(0, product.count + change)
            }
          : product
      )
    );
  }, []);

  const subtotal = products.reduce((acc, product) => acc + (product.price * product.count), 0);
  const vatRate = 0.05;
  const vat = subtotal * vatRate;

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Header />
      <ScrollView 
        style={styles.scrollView}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.contentContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleBold}>My</Text>
            <Text style={styles.title}> cart</Text>
          </View>

          <View style={styles.productsContainer}>
            {products.map((item) => (
              <ProductCard
                key={item.name}
                name={item.name}
                maxDeliveryTime={item.maxDeliveryTime}
                price={item.price}
                image={item.image}
                count={item.count}
                onQuantityChange={(change) => handleQuantityChange(item.name, change)}
              />
            ))}
          </View>
        </View>

        <CheckoutSummary 
          subtotal={subtotal}
          vat={vat}
        />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    paddingTop: 32,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBold: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 36,
  },
  productsContainer: {
    paddingVertical: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#f3f3f3",
  },
});
