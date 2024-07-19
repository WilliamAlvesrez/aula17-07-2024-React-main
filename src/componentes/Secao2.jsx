import React from 'react'
import ApresentacaoSecao from './ApresentacaoSecao'
import Boxes from './Boxes'

function Secao2() {

    const infoBoxes2 = [
        { info: "IMAGENS", key: "1" },
        { info: "PUBLICAÇÕES", key: "3" },
        { info: "VÍDEOS", key: "3" }
        
    ];

    return (
        <section>
            <ApresentacaoSecao
                titulo="CENTRAIS DE CONTEÚDO"
                subTitulo="Acesse aplicativos, fotos, publicações e vídeos do IFTM"
            />

            <Boxes infoBoxes={infoBoxes2}/>

        </section>
    );
}

export default Secao2;