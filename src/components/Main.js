import '../assets/css/main.css'
import {ShowBook} from '../Components/Showbook.js'
export function Main(props){
    console.log("main:",props)
    return (
        <div className="main-area">
           <ShowBook books={props.books}/>
        </div>
    )
}