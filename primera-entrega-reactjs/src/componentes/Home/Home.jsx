import { useState } from "react"
import { Formulario } from "../formulario/Formulario"
import { Titulo } from "../Titulo/Titulo"

export const Home = () => {
    const [count,cambiarValorDeCount] = useState(1)
    const handleAdd = () => {
        cambiarValorDeCount(count+1)
    }
    const handleRemove = () => {
        cambiarValorDeCount(count-1)
    }
  return (
    <div style={{border: '3px solid orange'}}>
        <Titulo />
        <Formulario />
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
    </div>
  )
}
