import '../assets/css/header.css'
import {Pokemon} from './pokemon1'
import {pokemon} from '../pokemonlist'
function Header(props){
    return(
        <div className='header-cont'>
           {
               pokemon.map((item,inx)=> <img src={item.avatar}/>)
           }
        </div>
    )
}
export {Header} 