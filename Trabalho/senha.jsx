import { useState } from "react";

function CriarSenha() {
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");

  const handleChange = (event) => {
    const valor = event.target.value;
    setSenha(valor);

    // Verificação dos critérios
    if (valor.length < 10) {
      setErro("A senha deve conter pelo menos 10 caracteres.");
    } else {
      setErro("");
    }
  };

  return (
    <div>
      <label>Digite sua senha:</label>
      <br />
      <input 
        type="password" 
        value={senha} 
        onChange={handleChange} 
      />

      {erro && (
        <p style={{ color: "red", marginTop: "8px" }}>
          {erro}
        </p>
      )}
    </div>
  );
}

export default CriarSenha;
