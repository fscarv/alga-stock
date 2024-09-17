import React, { useState } from 'react'
import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'

const LoginForm = () => {
const [form, setForm] = useState({
    user: '',
    pass: ''
})

    const handLogin = () => {
        console.table(form)
    }

    const handInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = event.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return <Form title='Login' onSubmit={handLogin}>
        <Input
            label='User'
            name='user'
            value={form.user}
            onChange={handInputChange}
        />
        <Input
            type='password'
            name='pass'
            value={form.pass}
            onChange={handInputChange}
            label='Password'
        />
        <Button>
            Login
        </Button>
    </Form>
}

export default LoginForm