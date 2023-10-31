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
        <img src="https://i.pinimg.com/originals/13/46/35/134635a4dcbbb8a46169cb9856716cb2.png" alt="perrito    " />
        <Formulario />
        <p>Cuantos perritos queres?</p>
        <p>{count}</p>
        <button onClick={handleAdd}>+</button>
        <button onClick={handleRemove}>-</button>
    </div>
  )
}
