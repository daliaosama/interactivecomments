import './CounterComponent.css'
import { useState } from 'react'
function CounterComponent() {
    const [counter, setCounter] = useState(0)
    function Increment(){
        setCounter(counter+1);
    }
    function Decrement(){
        if(counter>0){
            setCounter(counter-1);
        }
    }
    return (
        <div className="counter">
       <button className="btnc" onClick={Increment}>+</button>
       <label id="count">{counter}</label>
       <button className="btnc" onClick={Decrement}>-</button>
        </div>
    )
}
export default CounterComponent