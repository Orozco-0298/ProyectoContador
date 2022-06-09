import "./App.css";
import Boton from "./componentes/Boton";
import Contador from "./componentes/Contador";
import contadorLogo2 from "./imagenes/contador-logo2.png";
import { useState } from "react"; 

function App() {

  const [numClics, setNumClics] = useState(0); 

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

   const reiniciarContador = () => {
    setNumClics(0);
   }

  const disminuir = () => {
    setNumClics(numClics - 1);
  }

  return (
    <div className="App">
      <div className="contador-logo2-contenedor">
        <img
          className="contador-logo2"
          src={contadorLogo2}
          alt="Logo de contador"/>
      </div>
      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton 
          texto="Incrementar"
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton texto="Reiniciar"
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
        <Boton texto="Disminuir"
          esBotonDeClic={true}
          manejarClic={disminuir}/>
      </div>
    </div>
  );
}

export default App;
