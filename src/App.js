import './App.css';
import {addTodo,edittodo} from './ultis/ultis.js'
// signup({username : 'minhben1997', password : 'minh1234'})
//   .then(data =>{
//     console.log('data: ',data)
//   })
//   .catch(er =>{
//     console.error(er.stack)
//   })

addTodo({
  // todoID : '3ledK6vuQs69BHGIDzBb',
  ownerid : '1',
  title : 'morning working',
  content : 'di cho, nau an, hoc lap trinh',
})
edittodo({
  todoID : '3ledK6vuQs69BHGIDzBb',
  ownerid : '1',
  title : 'morning working vui qa la vui',
  content : 'di cho, nau an di lam  vui qa la vui',
}).then(data=>{
  console.log(data)
})
function App() {
  return(
    
    <nav className="navbar navbar-inverse">
      <a className="navbar-brand" >Title</a>
      <ul className="nav navbar-nav">
        <li className="active">
          <a >Home</a>
        </li>
        <li>
          <a >Link</a>
        </li>
      </ul>
    </nav>
    
  )
}

export default App;
