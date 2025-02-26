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
        name: 'Product Real estate e-flyer design',
        maxDeliveryTime: '2 days',
        price: 1200,
        image: require('@/assets/images/image.png'),
        count: 1
    },
    {
        name: 'Product 2',
        maxDeliveryTime: '3 days',
        price: 3500,
        image: require('@/assets/images/image.png'),
        count: 1
    },
    {
        name: 'Product 3',
        maxDeliveryTime: '4 days',
        price: 1800,
        image: require('@/assets/images/image.png'),
        count: 1
    }
]