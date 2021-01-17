import '../assets/css/Showbook.css'
import {Book} from '../Components/book'


function ShowBook( props ) {
    console.log('props: ',props)
    return (
        <div className='showbook'>
            {props.books.map(book=>{
            return(
                <Book{...book}/>
            )})}
        </div>
    )
}

export { ShowBook }