import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Titulo = ({titulo, subtitulo, parrafo})=> {

  return (
    <div>
      <h1 className="h1" >{titulo}</h1>
      <h2 className="he">{subtitulo}</h2>
      <p>{parrafo}</p>
    </div>

  )
}

const Formulario = () => {
  return (
    <div>
      <Titulo titulo={"Titulo de formulario"} subtitulo={"subtitulo de formulario"} />
      <form>
       <input type='text' name='nombre' placeholder='ingrese el nombre' /> 
      </form>
     </div>
  )
}

function App() {
  const contenidoDeTitulo = "Se vine"

  return (

    
  //<div style= { estiloEnLineaMalaPractica } >
  <div className = 'div' onclick = { ()=>alert( 'bienvenidos') } >
    
   
    <Titulo titulo = {contenidoDeTitulo} subtitulo = {"algo maso-maso"} parrafo = {"EL QUE NO ARRIESGA NO GANA"}/>
    
    <Formulario/>

      
     
    </div>
  )
}

export default App
