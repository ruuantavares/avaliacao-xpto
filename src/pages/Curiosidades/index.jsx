import "./style.css";
import { useEffect, useState } from "react";
import { getCuriosidades } from "../../api/curiosidades";
import { Link } from "react-router-dom";



function Curiosidades() {
  const [conteudo, setConteudo] = useState("Carregando...");

  async function getCuriosidadeAleatoria() {
    const resposta = await getCuriosidades();
    setConteudo(resposta);
  }

  useEffect(() => {
    getCuriosidadeAleatoria();
  }, []);

  return (
    <main>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>

      <div className="lista-principal">
        <h2>{conteudo}</h2>
        <button onClick={getCuriosidadeAleatoria}>
          Sortear número
        </button>
      </div>
    </main>
  );
}

export default Curiosidades;
