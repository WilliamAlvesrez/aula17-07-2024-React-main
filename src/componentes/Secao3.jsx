import React from 'react'
import ApresentacaoSecao from './ApresentacaoSecao'
import Boxes from './Boxes'

function Secao3() {

    const infoBoxes3 = [
        { info: "DENÚNCIA", key: "A1" },
        { info: "SOLICITAÇÕES", key: "A2" },
        { info: "SUGESTÃO", key: "A3" },
        { info: "ELEGIO", key: "A4" }
    ];


    return (
        <section><ApresentacaoSecao
            titulo="OUVIDORA"
            subTitulo="Você pode realizar manifestações nos seguintes canais" />

            <Boxes infoBoxes={infoBoxes3} />
        </section>
    )
}


export default Secao3;