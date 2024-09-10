import React, { useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

export interface ProductCreator {
    name: string
    price: number
    stock: number
}

declare interface ProductFormProps {
    onSubmit: (product: ProductCreator) => void
}

const ProductForm: React.FC<ProductFormProps> = (props) => {
    const [form, setForm] = useState(initialFormState)

    const handInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    const handleFormSubmit = () => {
        const productDto = {
            name: String(form.name),
            price: parseFloat(form.price),
            stock: Number(form.stock)
        }

        props.onSubmit(productDto)
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