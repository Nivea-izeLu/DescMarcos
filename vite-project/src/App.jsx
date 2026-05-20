import SeletorPerfil from './components/SeletorPerfil';
import ExibicaoResultado from './components/ExibicaoResultado';
import BotaoAcao from './components/BotaoAcao';
import EntradaDados from './components/EntradaDados';

import { useState } from 'react'
import './App.css'

function App() {

    const [valor, setValor] = useState("");   
    const [tipo, setTipo] = useState("");
    const [valorFinal, setValorFinal] = useState(null);
    const [mensagem, setMensagem] = useState("");

    const calcularDesconto = () => {

        const preco = parseFloat(valor);
        if( isNaN(preco) || preco <= 0){

            setMensagem("Digite um valor de compra válido!");
            setValorFinal(null);
            return;
        }

        let desconto = 0;

        switch(tipo){

            case "vip":
            desconto = 0.2;
            break;

            case "funcionario":
            desconto = 0.3;
            break;

            case "parceiro":
            desconto = 0.15;
            break;

            case "comum":
            desconto = 0.05;
            break;

            default:
            setMensagem("Selecione o tipo de Cliente!");
            return
        }


    const valorComDesconto = preco - preco * desconto;
    setValorFinal(valorComDesconto.toFixed(2));

    // Condicinal Aninhada

    if(desconto >= 0.3){

        setMensagem("Desconto máximo aplicado");

    }else {

        setMensagem("Voce recebeu um otimo desconto");
    }

    



    return (

      <div className="container">

        <SeletorPerfil tipo={tipo} selecionado={setTipo}/>
        <BotaoAcao aoClicar={calcularDesconto} />
        <ExibicaoResultado valorFinal={valorFinal} mensagem={mensagem}/>
        <EntradaDados valor={valor} aoDigitar={setValor} />

      </div>
    )
}
    }

export default App
