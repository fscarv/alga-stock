export interface Product {
    _id: string;
    name: string;
    price: number;
    stock: number;
    createdAt?: string;
    updatedAt?: string;
}

const Products: Product[] = [
    {
        _id: '1',
        name: 'Cookie',
        price: 0.99,
        stock: 50
    },
    {
        _id: '2',
        name: 'Milk 1L',
        price: 1.99,
        stock: 20
    },
    {
        _id: '3',
        name: 'Detergent',
        price: 0.99,
        stock: 100
    },
    {
        _id: '4',
        name: 'Water',
        price: 0.99,
        stock: 200
    }
]

export default Products