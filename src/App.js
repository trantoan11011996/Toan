import logo from './logo.svg';
import './App.css';
import { Header } from './components/header'
import { Searchbar } from './components/searchbar';
import { Emojilist } from './components/emojlist';
import { Component, component } from 'react'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      kw : ' '
    } 
    this.inputvalue = this.inputvalue.bind(this)
  }
  inputvalue(event){
    this.setState({kw : event.target.value} )
  }
  render(){
    return (
      <div className='App'>
        <Header />
        <Searchbar kw = {this.state.kw} change={this.inputvalue} />
      </div>
    )
  }
}
export default App;
