import React, { useState } from 'react'
function Calculator() {
    const [val, setVal] = useState("");
    const backspace = () => {
        try {
            setVal(val.slice(0, -1))
        }
        catch (error) {
            setVal("")
        }
    }
    const calculate = () => {
        try {
            setVal(eval(val));
        }
        catch (error) {
            setVal("Error")
        }
    }
    return (
        <div class="calculator">
            <input type="text" className="calculator-screen" value={val} onChange={(e) => setVal(e.target.value)} />
            <div className="calculator-keys">
                <button type="button" className="operator" value="+" onClick={(e) => setVal(val + e.target.value)}>+</button>
                <button type="button" className="operator" value="-" onClick={(e) => setVal(val + e.target.value)}>-</button>
                <button type="button" className="operator" value="*" onClick={(e) => setVal(val + e.target.value)}>&times;</button>
                <button type="button" className="operator" value="/" onClick={(e) => setVal(val + e.target.value)}>&divide;</button>
                <button type="button" value="7" onClick={(e) => setVal(val + e.target.value)}>7</button>
                <button type="button" value="8" onClick={(e) => setVal(val + e.target.value)}>8</button>
                <button type="button" value="9" onClick={(e) => setVal(val + e.target.value)}>9</button>
                <button type="button" value="4" onClick={(e) => setVal(val + e.target.value)}>4</button>
                <button type="button" value="5" onClick={(e) => setVal(val + e.target.value)}>5</button>
                <button type="button" value="6" onClick={(e) => setVal(val + e.target.value)}>6</button>
                <button type="button" value="1" onClick={(e) => setVal(val + e.target.value)}>1</button>
                <button type="button" value="2" onClick={(e) => setVal(val + e.target.value)}>2</button>
                <button type="button" value="3" onClick={(e) => setVal(val + e.target.value)}>3</button>
                <button type="button" value="0" onClick={(e) => setVal(val + e.target.value)}>0</button>
                <button type="button" className="decimal" value="." onClick={(e) => setVal(val + e.target.value)}>.</button>
                <button type="button"   onClick={() => backspace()}>C</button>
                <button type="button" className="equal-sign" value="=" onClick={() => calculate()}>=</button>
            </div>
        </div>
    )
}
export default Calculator
