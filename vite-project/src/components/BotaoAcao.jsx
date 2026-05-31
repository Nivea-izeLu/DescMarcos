export default function BotaoAcao({ aoClicar }) {
  return (
    <button
      onClick={aoClicar}
      style={{
        padding: "10px 20px",
        backgroundColor: "#764ba2e1",
        color: "white",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        flexDirection: "column",
        display: "flex",
      }}
    >
      Processar Venda
    </button>
  );
}
