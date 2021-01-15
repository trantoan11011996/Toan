import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header'
import { SearchBar } from './Components/Searchbar';
import { ShowBook } from './Components/Showbook';
import { Book } from './Components/book';
import { Main } from './Components/Main';
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
        this.setState({books : data.items})
      })
    }
  }
  
  render(){
  return (
    <div>
    <SearchBar search={this.Search}/>
    <Main books={this.state.books?this.state.books:[]}/>
    </div>
  );
  }
}

export default App;
