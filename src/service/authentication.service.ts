import http from "../utils/http";

declare interface User {
    _id: string
    user: string
    email: string
    role: 'admin' | 'customer'
    createdAt: string
    updatedAt: string
}

export const signInUser = (user: string, pass: string) =>
    http
        .post<User>('/authentication/login', { user, pass })
        .then(res => res.data)