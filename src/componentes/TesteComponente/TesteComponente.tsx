import React, { useState } from 'react';
import './TesteComponente.css'

function TesteComponente (props: {name: string}) {

    const [age, setAge] = useState(21)

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