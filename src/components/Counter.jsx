import { useState } from 'react';

export default function Counter() {
    const [counter, setCounter] = useState(0)

    function Increment(){
        setCounter(counter + 1)
    }
    return(
        <div>
            <h2>{counter}</h2>
            <button onClick={Increment} type="button">Increment</button>
        </div>
    )
}