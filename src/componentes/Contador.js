import React from "react";
import "../hojas-de-estilo/Contador.css";

function Contador({ numClics }) {
  return (
    <div 
    style={numClics > 0 ? {color : 'green'} : 
    numClics < 0 ? {color:'red'} : {color:'white'} }
      className="contador">
      {numClics}
    </div>
  );
}

export default Contador;