import React, { useState } from "react";
import Form from "../../shared/Form";
import Input from "../../shared/Input";
import Button from "../../shared/Button";

const initialFormState = {
    name: '',
    price: '',
    stock: ''
}

const ProductForm = () => {
    const [form, setForm] = useState(initialFormState)

    const handInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name} = event.target

        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form onSubmit={() => console.log(form)}>
        <Input
            onChange={handInputChange}
            name="name"
            label='Name'
            placeholder='Ex. Product name'
            required
        />
        <Input
            onChange={handInputChange}
            name="price"
            label='Price'
            type='number'
            step='0.01'
            min='0'
            placeholder='Ex. 1.99'
            required
        />
        <Input
            onChange={handInputChange}
            name="stock"
            label='Stock'
            type='number'
            min='0'
            placeholder='Ex. 10'
            required
        />
        <Button>
            Submit
        </Button>
    </Form>
}

export default ProductForm