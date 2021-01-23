
import '../assets/css/home.css'

function Listtodo(props){
    return(
        <div className='container'>
            <div className='sidebar'>
                <img src='https://i.ytimg.com/vi/mcYoiXQVrzk/maxresdefault.jpg'></img>
                <div className='account'>
                    <a href='/signin'><img className='img' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQam1l_3NcHzCl6qij4sHeNjyq1pfnyuaB2Dg&usqp=CAU'></img></a>
                <a  className="a1" href='/signin'>Account</a>
                </div>
                <div className='account'>
                   <a href='/signin'><img className='img' src='https://cdn4.iconfinder.com/data/icons/android-11/512/logout_signout-512.png' ></img></a>
                <a  className="a1" href='/signin'>Sign Out</a>
                </div>
            </div>
            <div className='boxlist'>
                <div className='todolist'>
                    <div className='list'>
                        <div className='namework'>
                        </div>
                        <div className='functional'>
                           <a href='/'>View</a>
                           <a href='/'>Complete</a>
                           <a href='/'>Edit</a>
                           <a href='/'>Remove</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Listtodo}