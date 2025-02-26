// create test data for this

// there is an image in ./assets/images/image.png

// export interface ProductCardProps {
//     name: string;
//     maxDeliveryTime: string;
//     price: number;
//     image: string;
//     count: number;
// }

export const products = [
    {
        name: 'Product 1',
        maxDeliveryTime: '2 days',
        price: 2000,
        image: require('@/assets/images/image.png'),
        count: 1
    },
    {
        name: 'Product 2',
        maxDeliveryTime: '3 days',
        price: 3500,
        image: require('@/assets/images/image.png'),
        count: 2
    },
    {
        name: 'Product 3',
        maxDeliveryTime: '4 days',
        price: 40,
        image: require('@/assets/images/image.png'),
        count: 3
    }
]