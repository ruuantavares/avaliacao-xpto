import "./style.css";
import { useEffect, useState } from "react";
import { getCuriosidades } from "../../api/curiosidades";
import { Link } from "react-router-dom";

function Curiosidades() {
  const [conteudo, setConteudo] = useState(<>....</>);
  async function TransformaEmLista() {
    const curiosidades = await getCuriosidades();

    return curiosidades.map((curiosidades) => (
      <div className="curiosidades" key={curiosidades.Curiosidades}>
        <h2>{curiosidades}</h2>
      </div>
    ));
  }
  useEffect(() => {
    async function Carregar() {
      setConteudo(await TransformaEmLista());
    }
    Carregar();
  }, []);

  return (
    <main>
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
      </nav>
      <div className="lista-principal">{conteudo}</div>
    </main>
  );
}

export default Curiosidades;
