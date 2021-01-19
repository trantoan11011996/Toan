import logo from './logo.svg';
import './App.css';
import { Header} from './components/Header'
import { Searchbar } from './components/Searchbar';
import { Main } from './components/Main';
import { Mainbook } from './components/Mainbook';

function App() {
  return (
    <div>
    <Header/>
    <Searchbar/>
    <Main/>
    </div>
  );
}

export default App;
