import { Link } from 'react-router-dom'
import './style.css'

export default function Home() {
    return (
        <>
       <main>
        <h2>Gostaria de saber mais sobre os numeros?</h2>
        <p>Voce sabia que cada numero tem uma historia? <Link to={"Curiosidades"}><button>Saiba Mais</button></Link></p>
        
       </main>
        </>
    )

}