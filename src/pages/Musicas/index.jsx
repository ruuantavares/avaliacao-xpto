import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./style.css";

export default function Musicas() {
  return (
    <>
      <main >
        <section className="pageMusic">
          <Header className="headerMusic" titulo={"Top musicas do mundo"} />
          <nav>
            <Link to="/">
              <button className="btnMusic">Voltar</button>
            </Link>
          </nav>
          <div>
            <h2>
              Clique no Play e descubra a prévia das melhores musicas do mundo.
            </h2>
           <div className="div-music">
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/playlist/37i9dQZEVXbNG2KDcFcKOF?utm_source=generator&theme=0"
              width="100%"
              height="152"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
              loading="lazy"
            ></iframe>
            </div> 
          </div>
        </section>
      </main>
    </>
  );
}
