import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const titulo = ()=> {
  return (
    <div>
      <h1>Titulo</h1>
      <h2>Subtitulo</h2>
    </div>

  )
}

function App() {
  const [count, setCount] = useState(0)
  let estiloEnLineaMalaPractica = {
      color: 'red',
      fontsize: '50px',
      backgroundcolor: 'blue'
  }

  return (
  //<div style= { estiloEnLineaMalaPractica } >
  <div className = 'div' onclick = { ()=>alert( 'bienvenidos') } >
   
    {titulo()}
    
      <p>EL QUE NO ARRIESGA NO GANA</p>
     
    </div>
  )
}

export default App
