import React, { useState } from 'react'
import Form from '../../shared/Form'
import Input from '../../shared/Input'
import Button from '../../shared/Button'
import Swal from 'sweetalert2'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/Authentication/Authentication.actions'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        user: '',
        pass: ''
    })

    const navegate = useNavigate()

    const handLogin = async () => {
        try {
            // @ts-ignore
            await dispatch(login(form))
            navegate('/')
        } catch (err: any) {
            Swal
            .fire('Error', err.response?.data?.message || err.message, 'error')
        }
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