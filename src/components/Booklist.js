
import {Mainbook} from '../components/Mainbook'
import '../assets/css/Mainbook.css'

function Booklist(props){
    return(
        <div className='main'>
                {props.books.map( book => {
                    return(
                        <Mainbook {...book}/>
                    )
                })}      
        </div>
    )
}
export {Booklist}