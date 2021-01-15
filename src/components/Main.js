import '../assets/css/main.css'
import {ShowBook} from '../Components/Showbook.js'
export function Main(props){
    console.log(props)
    return (
        <div className="main-area">
           <ShowBook books={props.books}/>
        </div>
    )
}