import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../components/Header'

export default function Home() {
    return (
        <>
       <main className='main-home'>
        <h2 className='h2-home'>Gostaria de saber mais sobre os numeros?</h2>

        <p className='p-home'>Voce sabia que cada numero tem uma historia? <Link to={"Curiosidades"}><button className='btn-home'>Saiba Mais</button></Link></p>

        <p className='p-home'>Gostaria de uma recomedação de musica? <Link to={"Musicas"}><button className='btn-home'>Clique Aqui!</button></Link></p>
        
       </main>
        </>
    )

}