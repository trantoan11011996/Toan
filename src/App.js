import { Component, component } from 'react'
import './App.css';
import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { EmojiList } from './components/EmojiList'

class App extends Component {
  constructor(props){
    super(props)
      this.state={
        kw : ''
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(ev){
      this.setState({kw : ev.target.value})
    }
  render(){
    return (
      <div className='App'>
        <Header />
        <SearchBar kw ={this.state.kw} change={this.handleChange} />
        <EmojiList kw={this.state.kw}/>

      </div>
    );
  }
}

export default App;