import { PropTypes } from "prop-types";
import { useState } from "react";

const CounterApp = ({ value }) => {

    const [counter, setCounter] = useState(value);
    
    const handleAdd = () => {
        setCounter(counter + 1);
    };

    const handleMinus = () => {
        setCounter((c) => c - 1);
    }

    return <>
        <h1>CounterApp</h1>
        <h3> { counter } </h3>
        <button onClick={ handleAdd }>+1</button>
        <button onClick={ () => setCounter(value) }>Reset</button>
        <button onClick={ handleMinus }>-1</button>
    </>;
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
}

CounterApp.defaultProps = {
    value: 0,
}

export default CounterApp;

