import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Searchbar } from './components/Searchbar';
import { Main } from './components/Main';
import { Mainbook } from './components/Mainbook';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.searchbook = this.searchbook.bind(this)
  }
  searchbook(e) {
    if (e.key == 'Enter') {
      fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}`)
        .then((data) => {
          return data.json()
            .then(value => {
              console.log('value:', value)
              this.setState({books : value.items})
            })
        })
    }
  }
  render() {
    return (
      <div>
        <Header />
        <Searchbar change={this.searchbook}/>
        <Main books = {this.state.books?this.state.books:[]}/>
      </div>
    );
  }
}

export default App;
