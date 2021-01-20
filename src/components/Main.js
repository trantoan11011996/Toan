import '../assets/css/Main.css';
import {Booklist} from '../components/Booklist'

function Main(props){
    return(
        <div className='main'>
            <Booklist books ={props.books}/>
        </div>
    )
}
export {Main}