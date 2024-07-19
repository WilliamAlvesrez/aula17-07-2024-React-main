import React from "react"

function ApresentacaoSecao({titulo, subTitulo}){

 return(
    <div className="centralizar">
        <h2>{titulo}</h2>
        <p>{subTitulo}</p>
    </div>
 )
}

export default ApresentacaoSecao;