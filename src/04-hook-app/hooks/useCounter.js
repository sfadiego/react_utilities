import { useState } from "react"

export const useCounter = (inicial_state = 10) => {
    const [counter, setcounter] = useState(inicial_state)
    const incrementar = (factor = 1) => {
        setcounter(counter + factor)
    }

    const decrementar = (factor = 1) => {
        setcounter(counter - factor)
    }

    const reset = () => {
        setcounter(inicial_state);
    }

    return {
        counter,
        incrementar,
        decrementar,
        reset
    }
}
