import '../assets/css/Searchbar.css'

function Searchbar(props){
    return(
        <div className='searchbar'>
            <input className='input' type='text' placeholder='Enter Your Book Name...' onKeyDown={props.change}></input>
        </div>
    )
}
export {Searchbar}