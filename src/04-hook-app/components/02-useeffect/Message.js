import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [cordenadas, setcordenadas] = useState({ x: 0, y: 0 })
    const { x, y } = cordenadas

    useEffect(() => {
        console.log("componente montado")
        const mousemove = (e) => {
            const coordenadas = { x: e.x, y: e.y }
            setcordenadas(coordenadas)
        }
        window.addEventListener('mousemove', mousemove)
        
        return () => {
            console.log("componente desmontado")
            window.removeEventListener('mousemove', mousemove)
        }
    }, [])

    return (
        <div>
            <h1>Hola</h1>
            <p>
                x: {x} - y: {y}
            </p>
        </div>
    )
}
