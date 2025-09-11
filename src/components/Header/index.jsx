import './style.css'
import { Link } from 'react-router-dom'


export default function Header( {titulo}){
    return (
        <>
        <header>
        <h1>{titulo ? titulo : 'Curiosidade sobre números'}</h1>

        </header>
        </>
    )
}

