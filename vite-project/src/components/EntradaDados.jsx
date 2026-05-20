export default function EntradaDados (valor, aoDigital) {

    <input type="number"
    value={valor}
    onChange={ (e) => aoDigitar(e.target.value)}
    placeholder="Digite o valor..."

    />
}