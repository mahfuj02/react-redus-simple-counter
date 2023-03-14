import { DECREAMENT, INCREAMENT, RESET } from "../constants/CounterConstant"

export const increamentCounter = () => {
    return {
        type : INCREAMENT
    }
}
export const decreamentCounter = () => {
    return {
        type : DECREAMENT
    }
}

export const resetCounter = () => {
    return {
        type : RESET
    }
}