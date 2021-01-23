import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import { Signin } from './components/signin'
import { Signup } from './components/signup'
import { About } from './components/about'
import { Listtodo} from './components/home'



function App() {
  let path = window.location.pathname
  let list = ['/signin','/signup','/about']
  if(list.indexOf(path) == -1){
    console.log(path)
  }
  const comp = {
    '/signin' : <Signin/>,
    '/signup' : <Signup/>,
    '/about' : <About/>,
    '/' : <Listtodo/>,
  }
  return (
    <div>
    <Header/>
    {
      comp[path]
    }
    </div>
  );
}

export default App;
