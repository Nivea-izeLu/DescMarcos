import SeletorPerfil from './SeletorPerfil';
import ExibicaoResultado from './ExibicaoResultado';
import BotaoAcao from './BotaoAcao';
import EntradaDados from './EntradaDados';
import TabelasParcelas from './TabelasParcelas';

import { useState } from 'react'


export default function Calculo() {

    const [valor, setValor] = useState("");   
    const [tipo, setTipo] = useState("");
    const [valorFinal, setValorFinal] = useState(null);
    const [parcelas, setParcelas] = useState([])
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


    if(desconto >= 0.3){

        setMensagem("Desconto máximo aplicado");

    }else {

        setMensagem("Você recebeu um ótimo desconto");
    }   

}

 function gerarParcela(){

        const valorResultado = parseFloat(valorFinal || 0)
        const lista = []

        for(let i = 1; i <= 6; i++){

            lista.push({
                vezes: i,
                valor: (valorResultado / i).toFixed(2)
            })
        }

        setParcelas(lista)

        return(

             <tbody>
                    {parcelas.map((item) => (
                        <td key={item.vezes}>
                            <tr>
                                {item.vezes}x 
                                <br></br>
                                R$ {item.valor}
                            </tr>
                        </td>
                    ))}
                </tbody>
        )
    }

    return (

      <div className='container' >

        <div className="meiuca">

            <h1>PDV Digital</h1>
            <h4>Sistemas de Descontos e Parcelas</h4>

            <EntradaDados valor={valor} aoDigitar={setValor} />
            <SeletorPerfil tipo={tipo} selecionado={setTipo}/>
            <BotaoAcao aoClicar={calcularDesconto} />
            <ExibicaoResultado valorFinal={valorFinal} mensagem={mensagem}/>
            <TabelasParcelas onClick={gerarParcela} parcelas={parcelas}/>

        </div>

       

    </div>


    )
}