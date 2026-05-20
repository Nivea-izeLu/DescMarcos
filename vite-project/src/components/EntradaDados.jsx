export default function EntradaDados (valor, aoDigitar) {

    <input type="number"
    value={valor}
    onChange={ (e) => aoDigitar(e.target.value)}
    placeholder="Digite o valor..."

     style={{
            padding:"10px",
            fontSize:"16px",
            borderRadius:"8px",
            border: "1px solid #ccc",
            width:"200px",
            marginRight: "10px",
            display: "flex",
            marginLeft: "137px"
        }}

    />
}