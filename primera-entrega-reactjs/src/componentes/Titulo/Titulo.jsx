export  const Titulo = ({titulo = "Se viene", subtitulo = "Algo maso-maso", parrafo = "Vos que pensas?"})=> {
    return (
      <div style={{border: '5px solid yellow'}}>
        <h1 className="h1" >{titulo}</h1>
        <h2 className="he">{subtitulo}</h2>
        <p>{parrafo}</p>
      </div>
  
    )
  }