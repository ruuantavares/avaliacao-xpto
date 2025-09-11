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
    <main className="main-curi">
      <nav>
        <Link to="/">
          <button className="btn-curi">Voltar</button>
        </Link>
      </nav>

      <div className="lista-principal">
        <h2 className="h2-curi">{conteudo}</h2>
        <button onClick={getCuriosidadeAleatoria} className="btn-curi">
          Sortear número
        </button>
      </div>
    </main>
  );
}

export default Curiosidades;
