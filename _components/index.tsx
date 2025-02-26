import { icons } from "@/assets/icon";
import { 
  Image, 
  StyleSheet, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  View,
  GestureResponderEvent,
} from "react-native";
import { ProductCardProps, CheckoutSummaryProps } from "../app/_types/types";
import { useState, useCallback } from "react";

export const Header = () => {
  return (
    <View style={styles.header}>
      <View>{icons.WorkiManLogo()}</View>
      <Image
        source={require("@/assets/images/profile.png")}
        style={styles.profileImage}
      />
    </View>
  );
};

export const ProductCard = ({
  name,
  maxDeliveryTime,
  price,
  image,
  count,
  onQuantityChange,
}: ProductCardProps) => {
  const handleIncrement = useCallback(() => {
    onQuantityChange(1);
  }, [onQuantityChange]);

  const handleDecrement = useCallback(() => {
    if (count > 0) {
      onQuantityChange(-1);
    }
  }, [count, onQuantityChange]);

  const totalPrice = price * count;

  return (
    <View style={styles.productCard}>
      <View style={styles.productContent}>
        <Image source={image} style={styles.productImage} />
        <View>
          <Text style={styles.productName} numberOfLines={2}>{name}</Text>
          <Text style={styles.deliveryTime}>
            Max Delivery Time: {maxDeliveryTime}
          </Text>
          <View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={handleDecrement}
                disabled={count === 0}
                style={[styles.quantityButton, count === 0 && styles.disabledButton]}
                accessibilityLabel="Decrease quantity"
              >
                <Text style={styles.buttonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{count}</Text>
              <TouchableOpacity
                onPress={handleIncrement}
                style={styles.quantityButton}
                accessibilityLabel="Increase quantity"
              >
                <Text style={styles.buttonText}>+</Text>
              </TouchableOpacity>

              <Text style={styles.totalPrice}>Total: N{totalPrice}</Text>
            </View>
          </View>
        </View>
      </View>

      <TouchableOpacity 
        style={styles.deleteButton}
        accessibilityLabel="Delete product"
      >
        {icons.Bin()}
      </TouchableOpacity>
    </View>
  );
};

const CheckoutSummary = ({ subtotal, vat }: CheckoutSummaryProps) => {
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const total = subtotal + vat - discount;

  const handleApplyCoupon = useCallback(() => {
    if (!couponCode.trim()) return;
    
    // Example coupon logic - could be expanded to check against valid coupon codes
    if (couponCode.toLowerCase() === 'discount10') {
      setDiscount(subtotal * 0.1); // 10% discount
    }
  }, [couponCode, subtotal]);

  return (
    <View style={styles.container}>
      <View style={styles.couponContainer}>
        <TextInput
          style={styles.couponInput}
          placeholder="Enter coupon code"
          value={couponCode}
          onChangeText={setCouponCode}
        />
        <TouchableOpacity
          style={[styles.applyButton, !couponCode.trim() && styles.disabledButton]}
          onPress={handleApplyCoupon}
          disabled={!couponCode.trim()}
        >
          <Text style={styles.applyButtonText}>Apply Coupon</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.breakdownContainer}>
        <Text style={styles.breakdownText}>Sub-total: N{subtotal.toFixed(2)}</Text>
        <Text style={styles.breakdownText}>+VAT (5%): N{vat.toFixed(2)}</Text>
        <Text style={styles.breakdownText}>Coupon discount: -N{discount.toFixed(2)}</Text>
      </View>
      
      <View style={styles.totalContainer}>
        <View>
          <Text style={styles.totalLabel}>Total</Text>
          <Text style={styles.totalAmount}>N{total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#f3f3f3',
    backgroundColor: 'white',
    shadowColor: "#455971",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
    elevation: 2,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  productCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10,
  },
  productContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  productImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deliveryTime: {
    color: '#6b7280',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  quantityButton: {
    width: 44,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 22,
  },
  disabledButton: {
    backgroundColor: '#eee',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 'auto',
  },
  deleteButton: {
    marginTop: 10,
    width: 20,
    height: 20,
  },
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 0,
    borderTopColor: '#ddd',
  },
  couponContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  couponInput: {
    flex: 1,
    height: 46,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 15,
    marginRight: 10,
  },
  applyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 15,
    borderRadius: 30,
  },
  applyButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  breakdownContainer: {
    marginBottom: 15,
    flexDirection: 'row',
    gap: 10,
  },
  breakdownText: {
    fontSize: 12,
    marginBottom: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: '800',
  },
  totalAmount: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: '#0f75bd',
    paddingVertical: 17,
    paddingHorizontal: 50,
    borderRadius: 30,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CheckoutSummary;
