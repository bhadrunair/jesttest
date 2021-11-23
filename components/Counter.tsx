import React from 'react'
import { useState } from 'react'
import counterStyles from '../styles/Counter.module.css'

const Counter = () => {
    const [num, setnum] = useState(0);
    const [cValue, setcValue] = useState(1);

    return (
        <div>
            <h2 data-testid='counternum' id={counterStyles.textcenter} className={(num >= 100) ? counterStyles.green : (num <= -100) ? counterStyles.red : ''}>{num}</h2>
            <button data-testid='minusButton' onClick={() => setnum(num-cValue)}>-</button>
            <input className={counterStyles.textcenter} type="number" data-testid='inputVal' value={cValue} onChange={(e) => setcValue(parseInt(e.target.value))}/>
            <button data-testid='plusButton' onClick={() => {setnum(num+cValue)}}>+</button>
        </div>
    )
}

export default Counter
