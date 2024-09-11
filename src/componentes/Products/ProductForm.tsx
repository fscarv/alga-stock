import React, { useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";
import { Product } from "../../shared/Table/Table.mockdata";

declare interface InitialFormState {
    id?: number
    name: string
    price: string
    stock: string
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps {
    form?: Product
    onSubmit?: (product: ProductCreator) => void
    onUpdate?: (product: Product) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    const initialFormState: InitialFormState = props.form 
    ? {
        id: props.form.id,
        name: props.form.name,
        price: props.form.price.toString(),
        stock: props.form.stock.toString()
    }
    : {
        name: '',
        price: '',
        stock: ''
    }

    const [form, setForm] = useState(initialFormState)

    const handInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const updateProduct = (product: InitialFormState) => {
        const productDto = {
            id: Number(product.id),
            name: String(product.name),
            price: parseFloat(product.price),
            stock: Number(product.stock)
        }
        props.onUpdate && 
            props.onUpdate(productDto)
    }

    const createProduct = (product: InitialFormState) => {
        const productDto = {
            name: String(product.name),
            price: parseFloat(product.price),
            stock: Number(product.stock)
        }
        props.onSubmit && 
            props.onSubmit(productDto)
    }

    const handleFormSubmit = () => {
        form.id
        ? updateProduct(form)
        : createProduct(form)
        setForm(initialFormState)
    }

    return <Form title="Product" onSubmit={handleFormSubmit}>
        <Input
            onChange={handInputChange}
            value={form.name}
            name="name"
            label="Name"
            placeholder="Ex. Product name"
            required
        />
        <Input
            onChange={handInputChange}
            value={form.price}
            name="price"
            label="Price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ex. 10.99"
            required
        />
        <Input
            onChange={handInputChange}
            value={form.stock}
            name="stock"
            label="Stock"
            type="number"
            min="0"
            placeholder="Ex. 10"
            required
        />
        <Button>
            Submit
        </Button>
    </Form>
}

export default ProductForm