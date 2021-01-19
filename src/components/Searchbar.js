import '../assets/css/Searchbar.css'

function Searchbar(props){
    return (
        <div className='searchbar'>
            <input type='text' className='input' placeholder='Enter Your Name Emoji...' onChange={props.change} value={props.kw}></input>
        </div>
    )
}
export {Searchbar}