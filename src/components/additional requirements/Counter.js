import React, {useState} from "react";

import arrow_icon from '../../img/arrow-button-icon.png'

function Counter({initialCount}) {
    const [count, setCount] = useState(initialCount);

    const increment = () => {
        if (count < 5)
        setCount((prev) => prev + 1);
    };
    const decrement = () => {
        if (count > 0) 
            setCount((prev) => prev - 1);
        
        
    };
    const restart = () => {
        setCount(0);
    };
    
    return (
        <div className="counter-container">
            <div className="counter-div-container" onClick={decrement}>
                <img className="counter-img decrement-img" src={arrow_icon} />
            </div>
            <h1 className="count-h1" data-testid="count">
                {count}
            </h1>
            <div className="counter-div-container" onClick={increment}>
                <img className="counter-img increment-img" src={arrow_icon} />
            </div>
            {/* <button onClick={restart}>Restart</button> */}
        </div>
    )
}
export default Counter;