import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { SearchBar } from './components/Searchbar';
import { ShowBook } from './components/Showbook';
import { Book } from './components/book';
import { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }
  Search = (event) =>{
    if (event.key == 'Enter'){
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${event.target.value}`)
      .then(res => res.json())
      .then(data =>{
        console.log('data : ', data.items)
      })
    }
  }
  
  render(){
  return (
    <div>
    <Header/>
    <SearchBar search={this.Search}/>
    <ShowBook/>
    <Book/>
    </div>
  );
  }
}

export default App;
