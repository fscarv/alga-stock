import React from "react";
import LoginForm from "../componentes/Authentication/LoginForm";

const LoginView = () => {
    return <div style={{
        display: 'flex',
        minHeight: '100vh',
        alignItems: 'center',
        justifyContent: 'center'
    }}>
        <div style={{ minWidth: 320 }}>
            <LoginForm />
        </div>
    </div>
}

export default LoginView