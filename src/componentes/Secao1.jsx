import React from 'react'
import ApresentacaoSecao from './ApresentacaoSecao'
import Boxes from './Boxes'

function Secao1() {

    const infoBoxes1 = [
        { info: "PLANO DE DESENVOLVIMENTO INSTITUCIONAL", key: "1" },
        { info: "PESQUISA PÚBLICA PROCESSO IFTM", key: "3" },
        { info: "LICITAÇÕES E CONTRATOS", key: "3" },
        { info: "RECEITAS E DESPESAS", key: "4" },
        { info: "DADOS ABERTOS", key: "5" },
        { info: "TRANSPARÊNCIA  E PRESTAÇÃO DE CONTAS", key: "6" },
        { info: "SERVIDORES", key: "6" },
        { info: "PERGUNTAS FREQUENTES", key: "6" },

    ];

    return (
        <section>
            <ApresentacaoSecao
                titulo="Acesso à Informação"
                subTitulo="Veja dados de transparência e governança"
            />

            <Boxes infoBoxes={infoBoxes1}/>

        </section>
    );
}

export default Secao1;