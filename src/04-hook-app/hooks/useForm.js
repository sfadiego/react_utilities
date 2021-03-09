import { useState } from "react"


export const useForm = (initialState = {}) => {

    const [values, setvalues] = useState(initialState)

    const handleInputChange = ({ target }) => {
        const valor = target.value
        setvalues({ ...values, [target.name]: valor })
    }

    const reset = () => {
        setvalues(initialState)
    }

    return [
        values,
        handleInputChange,
        reset
    ]
}
