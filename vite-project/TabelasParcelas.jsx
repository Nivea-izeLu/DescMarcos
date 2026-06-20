export default function TabelasParcelas({ onClick, parcelas = [] }) {
  return (
    <div>
      <button onClick={onClick}>Simular parcelas</button>

      <table>
        <tbody>
          {parcelas.map((item) => (
            <tr key={item.vezes}>
              <td>{item.vezes}x</td>
              <td>R$ {item.valor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
