import { FlatList, KeyboardAvoidingView, Platform, Text, View } from "react-native";
import CheckoutSummary, { Header, ProductCard } from "./_components";
import { products as initialProducts } from "@/data/test";
import { useState, useCallback } from "react";

export default function Index() {
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
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <Header />

      {/* cart */}
      <View className="px-5 py-5 pt-8" style={{}}>
        <Text className="text-4xl">
          <Text className="font-bold">My</Text> cart
        </Text>

        {/* list of products */}
        <FlatList
          data={products}
          renderItem={({ item }) => (
            <ProductCard
              key={item.name}
              name={item.name}
              maxDeliveryTime={item.maxDeliveryTime}
              price={item.price}
              image={item.image}
              count={item.count}
              onQuantityChange={(change) => handleQuantityChange(item.name, change)}
            />
          )}
          keyExtractor={(item) => item.name}
          contentContainerStyle={{
            borderBottomWidth: 2,
            borderBottomColor: "#f3f3f3",
            paddingBottom: 20,
            paddingTop: 20,
          }}
        />
      </View>

      {/* Checkout Summary */}
      <CheckoutSummary 
        subtotal={subtotal}
        vat={vat}
      />
    </KeyboardAvoidingView>
  );
}