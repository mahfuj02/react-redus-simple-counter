import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { decreamentCounter, increamentCounter, resetCounter } from "../services/actions/CounterAction"

export default function Counter(){
    
    const count = useSelector( state => state.count )
    const dispatch = useDispatch()

    const increamentCount = () => {
        dispatch(increamentCounter());
    }
    
    const decreamentCount = () => {
        dispatch(decreamentCounter());
    }

    const resetCount = () => {
        dispatch(resetCounter());
    }

    return (
        <div>
            <h2> Count App: </h2>
            <h3> Count: {count} </h3>
            <button onClick={increamentCount}> increament </button>
            <button onClick={decreamentCount}> decreament </button>
            <button onClick={resetCount}> reset </button>
        </div>
    )
}