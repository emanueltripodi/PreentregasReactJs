import { Titulo } from "../Titulo/Titulo"

export const Formulario = () => {
    return (
      <div style={{border: '5px solid blue'}}>
        <Titulo titulo={"Titulo de formulario"} subtitulo={"subtitulo de formulario"}/>
        <form>
         <input type='text' name='nombre' placeholder='ingrese el nombre' /> 
        </form>
       </div>
    )
  }
