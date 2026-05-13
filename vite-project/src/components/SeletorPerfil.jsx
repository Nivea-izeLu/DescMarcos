
export default function SeletorPerfil (tipo, selecionado) {


    return (
        
        <select value={tipo}
        onChange= { (e) => selecionado(e.target.value) }>

            <option  value="">Selecione</option>
            <option value="comum"> Comum </option>
            <option value="parceiro">Parceiro</option>
            <option value="vip">VIP</option>
            <option value="funcionario"> Funcionário</option>

        </select>
    )

}

