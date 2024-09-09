import React, { useState, useEffect } from 'react';
import './TesteComponente.css'

function TesteComponente (props: {name: string}) {

    const [age, setAge] = useState(1)
    
    useEffect(() => {
        console.log('Componente foi criado')
    }, [])

    useEffect(() => {
        console.log('Componente atualizado para: ' + age)
    }, [age])

return <div className='TesteComponente'>
    Olá, {props.name}, {age}
    <button onClick={() =>{
        setAge(age + 1)
    }}>
        +
    </button>
</div>
}

export default TesteComponente