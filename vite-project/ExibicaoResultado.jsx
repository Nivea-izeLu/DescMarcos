export default function ExibicaoResultado({ valorFinal, mensagem }) {
  if (!mensagem) return null;

  return (
    <div>
      <p>{mensagem}</p>
      {valorFinal && <h2>Valor Final: R$ {valorFinal}</h2>}
    </div>
  );
}
