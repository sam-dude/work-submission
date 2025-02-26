import { ImageSourcePropType } from "react-native";

export interface ProductCardProps {
    name: string;
    maxDeliveryTime: string;
    price: number;
    image: ImageSourcePropType;
    count: number;
    onQuantityChange: (change: 1 | -1) => void;
}

export interface CheckoutSummaryProps {
    subtotal: number;
    vat: number;
}
