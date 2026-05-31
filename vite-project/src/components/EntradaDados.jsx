export default function EntradaDados({ valor, aoDigitar }) {
  return (
    <input
      type="number"
      value={valor}
      onChange={(e) => aoDigitar(e.target.value)}
      placeholder="Digite o valor..."
      
    />
  );
}
