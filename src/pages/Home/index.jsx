import { Link } from 'react-router-dom'
import './style.css'
import Header from '../../components/Header'

export default function Home() {
    return (
        <>
         <Header />
        <h2 className='h2-home'>Gostaria de saber mais sobre os numeros?</h2>
       <main className='main-home'>
        <div className='div-home'>
        <p className='p-home'>Voce sabia que cada numero tem uma historia? </p>
        <Link to={"Curiosidades"}><button className='btn-home'>Saiba Mais</button></Link>

        </div>
        <div className='div-home'>
        <p className='p-home'>Gostaria de uma recomedação de musica? </p>

        <Link to={"Musicas"}><button className='btn-home'>Clique Aqui!</button></Link>

        </div>
        
       </main>
        </>
    )

}