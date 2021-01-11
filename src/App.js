import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import {EmojiList} from './components/EmojiList'

function App() {

  return (
    <div className='App'>
      <Header />
      <SearchBar />
      <EmojiList />
    </div>
  );
}

export default App;
