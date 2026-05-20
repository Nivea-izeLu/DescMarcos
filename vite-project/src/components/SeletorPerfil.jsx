
export default function SeletorPerfil (tipo, selecionado) {


    return (
        
        <select value={tipo}
        onChange= { (e) => selecionado(e.target.value) }
        
         style={{

                   padding:"10px",
            fontSize:"16px",
            borderRadius:"8px",
            border: "1px solid #ccc",
            marginRight: "10px",
            marginTop: "35px"
            }}
            
            >

            <option  value="">Selecione</option>
            <option value="comum"> Comum </option>
            <option value="parceiro">Parceiro</option>
            <option value="vip">VIP</option>
            <option value="funcionario"> Funcionário</option>

        </select>
    )

}

