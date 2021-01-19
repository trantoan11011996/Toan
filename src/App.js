import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header'
import { Searchbar} from './components/Searchbar'
import { Emojilist} from './components/Emojilist'
import { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      kw : ''
    }
    this.handlechange = this.handlechange.bind(this)
  }
  handlechange(event){
    this.setState({kw : event.target.value})
  }
  render(){
  return (
    <div>
    <Header/>
    <Searchbar kw ={this.state.kw} change = {this.handlechange}/>
    <Emojilist kw ={this.state.kw} />
    </div>
  );
  }
}

export default App;
