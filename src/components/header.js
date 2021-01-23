import '../assets/css/header.css'


export function Header(props){
    return(
        <div className='nav-cont'>
            <div className='nav-name2'>
                <a href='/'>Todo App</a>
            </div>
            <div className='nav-name1'>
                <a href='/signin'>Sign in</a>
            </div>
            <div className='nav-name1'>
                <a href='/signup'>Sign up</a>
            </div>
            <div className='nav-name1'>
            <a href='/about'>About</a>
            </div>
        </div>
        
    )
}