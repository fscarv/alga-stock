export interface Product {
    id: number;
    name: string;
    price: number;
    stock: number;
}

const Products: Product[] = [
    {
        id: 1,
        name: 'Cookie',
        price: 0.99,
        stock: 50
    },
    {
        id: 2,
        name: 'Milk 1L',
        price: 1.99,
        stock: 20
    },
    {
        id: 3,
        name: 'Detergent',
        price: 0.99,
        stock: 100
    },
    {
        id: 4,
        name: 'Water',
        price: 0.99,
        stock: 200
    }
]

export default Products